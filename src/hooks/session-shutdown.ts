import { ExtensionContext } from "../types.js";
import { SerenaClient } from "../serena/client.js";

/**
 * Hook: session_shutdown
 * Libera recursos y cierra la conexión con Serena MCP de forma limpia.
 * (Addressing Audit Item 3.2)
 */
export async function handleSessionShutdown(ctx: ExtensionContext, serena: SerenaClient): Promise<void> {
  try {
    ctx.ui.notify("[Bridge] Cerrando puente semántico...");
    await serena.disconnect();
    console.log("[Bridge] Sesión finalizada correctamente.");
  } catch (error) {
    console.error("[Bridge] Error durante el cierre de sesión:", error);
  }
}
