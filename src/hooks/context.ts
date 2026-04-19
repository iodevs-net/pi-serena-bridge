import { ContextEvent, ExtensionContext, ISemanticProvider } from "../types.js";
import { SemanticCompressor } from "../compressor.js";

/**
 * Hook: context
 * Inyecta semántica cuando el usuario muestra intención de modificar código.
 */
export async function handleContext(event: ContextEvent, ctx: ExtensionContext, provider: ISemanticProvider): Promise<void> {
  const lastMessage = event.messages[event.messages.length - 1];
  if (lastMessage?.role !== "user") return;

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
      
      const symbols = await provider.getSymbolsOverview(".");
      if (!symbols || symbols.length < 10) return;

      const compressed = SemanticCompressor.compress(symbols);

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
