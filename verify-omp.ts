import { SerenaClient } from "./src/serena/client.js";
import extensionFactory from "./src/index.js";

// Mock del objeto API de oh-my-pi
const mockApi = {
  events: {} as Record<string, Function>,
  on(event: string, callback: Function) {
    this.events[event] = callback;
    console.log(`[SIM] Hook registrado: ${event}`);
  },
  async emit(event: string, data: any, ctx: any) {
    if (this.events[event]) {
      return await this.events[event](data, ctx);
    }
  }
};

// Mock del contexto de oh-my-pi
const mockCtx = {
  ui: {
    notify: (msg: string) => console.log(`[UI NOTIFY] ${msg}`)
  },
  cwd: process.cwd()
};

async function verify() {
  console.log("🚀 Iniciando Verificación de Integración de Omni-Pi...");

  // 1. Cargar la extensión
  extensionFactory(mockApi);

  // 2. Simular Inicio de Sesión (Conexión a Serena)
  console.log("\n--- Probando session_start ---");
  await mockApi.emit("session_start", { type: "session_start" }, mockCtx);

  // 3. Simular Intención de Usuario (Prompt complejo)
  console.log("\n--- Probando Detección de Intención (context) ---");
  const event = {
    type: "context",
    messages: [
      { role: "user", content: "Oye, necesito que refactorices el código en 'src/compressor.ts' para que sea más LEAN." }
    ]
  };

  const result = await mockApi.emit("context", event, mockCtx);

  if (result && result.messages) {
    console.log("\n✅ ÉXITO: Inyección Semántica Detectada");
    console.log("Contenido del Advisory (Truncado):");
    console.log(result.messages[0].content.substring(0, 300) + "...");
  } else {
    console.error("\n❌ ERROR: No se inyectó contexto semántico.");
    process.exit(1);
  }

  // 4. Simular Gatekeeper de Impacto (tool_call)
  console.log("\n--- Probando Gatekeeper de Impacto (tool_call) ---");
  const toolCallEvent = {
    type: "tool_call",
    toolName: "replace_content",
    input: { relative_path: "src/types.ts", needle: "ExtensionContext", repl: "NewCtx" }
  };

  const impactResult = await mockApi.emit("tool_call", toolCallEvent, mockCtx);
  
  if (impactResult && impactResult.modifiedMessages) {
    console.log("\n✅ ÉXITO: Gatekeeper de Impacto Generado");
    console.log(impactResult.modifiedMessages[0].content);
  } else if (impactResult && impactResult.reason) {
     console.log("\n✅ ÉXITO: Gatekeeper de Impacto Generado (vía reason)");
     console.log(impactResult.reason);
  } else {
    console.log("\nℹ️ No se detectó impacto crítico (esperado si no hay referencias cruzadas).");
  }

  // 5. Shutdown
  await mockApi.emit("session_shutdown", { type: "session_shutdown" }, mockCtx);
  console.log("\n🏁 Verificación finalizada.");
}

verify().catch(console.error);
