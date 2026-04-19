import { ContextEvent, ExtensionContext } from "../types.js";
import { SerenaClient } from "../serena/client.js";
import { SemanticCompressor } from "../compressor.js";

/**
 * Hook: context
 * Inyecta semántica de Serena cuando el usuario muestra intención de modificar código.
 * (Addressing Audit Item 2.1 & 2.2)
 */
export async function handleContext(event: ContextEvent, ctx: ExtensionContext, serena: SerenaClient): Promise<void> {
  const lastMessage = event.messages[event.messages.length - 1];
  if (lastMessage?.role !== "user") return;

  // Diccionario expandido y multilingüe de intenciones (Audit 2.1)
  const intents = [
    "refactor", "cambiar", "change", "fix", "arreglar", "use", "usar", 
    "implement", "implementar", "mover", "move", "borrar", "delete", 
    "update", "actualizar", "modify", "modificar", "optimizar", "optimize",
    "limpiar", "clean", "extract", "extraer", "inline"
  ];
  
  const content = lastMessage.content.toLowerCase();
  const hasIntent = intents.some(intent => content.includes(intent));

  if (hasIntent) {
    try {
      ctx.ui.notify("[Bridge] Analizando impacto semántico...");
      
      const symbols = await serena.getSymbolsOverview(".");
      if (!symbols || symbols.length < 10) return; // Evitar ruido (Audit 2.4)

      const compressed = SemanticCompressor.compress(symbols);

      // Formato optimizado para LLM (Audit 2.2)
      const semanticAdvisory = `
### 🛡️ SEMANTIC_ARCHITECT_ADVISORY
The following project symbols were detected. Use this as a reference to ensure architectural integrity:
\`\`\`text
${compressed}
\`\`\`
*Review references before refactoring any of these symbols.*
`.trim();

      event.messages.unshift({
        role: "system",
        content: semanticAdvisory
      });
      
    } catch (error) {
      console.warn("[Bridge] Salto de inyección semántica:", error);
    }
  }
}
