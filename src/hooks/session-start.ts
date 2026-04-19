import { SessionStartEvent, ExtensionContext, ISemanticProvider } from "../types.js";

/**
 * Hook: session_start
 * Inicializa la conexión con el motor semántico.
 */
export async function handleSessionStart(
  event: SessionStartEvent,
  ctx: ExtensionContext,
  provider: ISemanticProvider
) {
  try {
    const ok = await provider.connect();
    if (ok) {
      ctx.ui.notify("✅ Semántica Activa");
      console.log("[Bridge] Motor semántico listo e indexando.");
    } else {
      ctx.ui.notify("⚠️ Semántica en modo degradado");
    }
  } catch (error) {
    console.error("[Bridge] Error al conectar con el motor semántico:", error);
  }
}
