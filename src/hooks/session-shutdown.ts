import { ExtensionContext, ISemanticProvider } from "../types.js";

/**
 * Hook: session_shutdown
 * Libera recursos de forma agnóstica.
 */
export async function handleSessionShutdown(ctx: ExtensionContext, provider: ISemanticProvider): Promise<void> {
  try {
    ctx.ui.notify("[Bridge] Cerrando puente semántico...");
    await provider.disconnect();
    console.log("[Bridge] Sesión finalizada correctamente.");
  } catch (error) {
    console.error("[Bridge] Error durante el cierre de sesión:", error);
  }
}
