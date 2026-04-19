import type { HookAPI } from "@oh-my-pi/pi-coding-agent";
import { handleToolCall } from "./hooks/tool-call.ts";
import { handleContext } from "./hooks/context.ts";
import { handleSessionStart } from "./hooks/session-start.ts";
import { SerenaClient } from "./serena/client.ts";

export default function (api: HookAPI) {
  // Initialize Serena Client with project CWD
  // Note: we'll refine how to get the project path
  const serena = new SerenaClient(process.cwd());

  // Register Hooks
  api.on("session_start", (event, ctx) => handleSessionStart(event as any, ctx as any, serena));
  
  api.on("context", (event, ctx) => handleContext(event as any, ctx as any, serena));

  api.on("tool_call", async (event, ctx) => {
    const response = await handleToolCall(event as any, ctx as any, serena);
    if (response) {
      if (response.block) return { block: true, message: response.message };
      // Si no bloquea, podemos inyectar el mensaje como un warning
      return { message: response.message };
    }
  });
  
  api.on("session_shutdown", async () => {
    await serena.disconnect();
  });
}
