import { ToolCallEvent, ExtensionContext, HookResponse, ISemanticProvider } from "../types.js";
import { SemanticCompressor } from "../compressor.js";

/**
 * Hook: tool_call (Gatekeeper Semántico)
 * Intercepta ediciones y valida contra el grafo de dependencias.
 */
export async function handleToolCall(
  event: ToolCallEvent,
  ctx: ExtensionContext,
  provider: ISemanticProvider
): Promise<HookResponse | void> {
  const editTools = ["replace_content", "write_file", "edit_file", "replace_symbol_body"];
  if (!editTools.includes(event.toolName)) return;

  const targetPath = event.input.relative_path || event.input.path;
  if (!targetPath) return;

  try {
    ctx.ui.notify(`[Bridge] Validando edición en: ${targetPath}`);
    
    const overview = await provider.getSymbolsOverview(targetPath);
    const compressed = SemanticCompressor.compress(overview);
    
    if (compressed.includes("- ")) {
      ctx.ui.notify("[Bridge] Detectados símbolos críticos.");
      return {
        block: false, 
        message: `[BRIDGE_WARNING] Estás editando un archivo con dependencias activas:\n${compressed}\nAsegúrate de que tus cambios sean compatibles.`
      };
    }
  } catch (error) {
    console.error("[Bridge] Error en validación semántica:", error);
  }
}
