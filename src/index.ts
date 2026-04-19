import { SerenaClient } from "./serena/client.js";
import { handleSessionStart } from "./hooks/session-start.js";
import { handleContext } from "./hooks/context.js";
import { handleToolCall } from "./hooks/tool-call.js";
import { handleSessionShutdown } from "./hooks/session-shutdown.js";

/**
 * Pi-Serena Semantic Bridge
 * Extension for oh-my-pi
 */

const serena = new SerenaClient();

export default {
  // 1. Inicialización
  async session_start(event: any, ctx: any) {
    await handleSessionStart(event, ctx, serena);
  },

  // 2. Inyección de Contexto
  async context(event: any, ctx: any) {
    await handleContext(event, ctx, serena);
  },

  // 3. Gatekeeper de Ediciones
  async tool_call(event: any, ctx: any) {
    return await handleToolCall(event, ctx, serena);
  },

  // 4. Limpieza (Audit Item 3.2)
  async session_shutdown(event: any, ctx: any) {
    await handleSessionShutdown(ctx, serena);
  }
};
