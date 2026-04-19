/**
 * MASTER-SPEC-PROTOCOL: Layer C - Hook Interceptors Types
 * Contrato de tipos para oh-my-pi bridge.
 */

export interface ExtensionContext {
  ui: any;
  cwd: string;
  getContextUsage(): any;
  hasUI: boolean;
  isIdle(): boolean;
  getSystemPrompt(): string;
}

export interface SessionStartEvent {
  type: "session_start";
}

export interface ContextEvent {
  type: "context";
  messages: any[];
}

export interface ToolCallEvent {
  type: "tool_call";
  toolCallId: string;
  toolName: string;
  input: Record<string, any>;
}

/**
 * Respuesta de validación para hooks que pueden bloquear o modificar.
 */
export interface HookResponse {
  block?: boolean;
  message?: string;
  modifiedMessages?: any[];
}
