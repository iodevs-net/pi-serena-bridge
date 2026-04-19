# Omni-Pi Guidelines

## Project Overview
**Omni-Pi** is a Universal Semantic Intelligence Bridge for `oh-my-pi`. It provides a modular infrastructure to integrate MCP semantic servers with the coding agent session, enabling proactive context injection and impact analysis.

## Architecture & Data Flow
Omni-Pi follows a strictly decoupled layered architecture:
- **Layer A (Client Adapter)**: Manages communication with semantic providers (e.g., `SerenaClient`). Includes health checks, circuit breakers, and 10s TTL caching.
- **Layer B (Semantic Compressor)**: Implements structural prioritization to maximize token value.
- **Layer C (Hook Interceptors)**: Implements OMP native hooks (`session_start`, `context`, `tool_call`, `session_shutdown`).

Data flow:
1. OMP triggers native hooks.
2. Omni-Pi intercepts and identifies user intent.
3. Queries the `ISemanticProvider` for symbol overviews and incoming references.
4. For `context` hook: Injects system messages with structural advice.
5. For `tool_call` hook: Performs **Deep Impact Analysis**, warning or blocking based on cross-file dependencies.

## Key Directories
- `src/` - Main source code
  - `index.ts` - Entry point (HookFactory)
  - `serena/` - Serena-specific implementation
  - `hooks/` - Native OMP hook implementations
  - `types.ts` - Universal interfaces
  - `compressor.ts` - Semantic data compression logic

## Code Conventions
- **Naming**: Every log and notification MUST be prefixed with `[Omni-Pi]`.
- **Decoupling**: All logic must depend on the `ISemanticProvider` interface, never on concrete implementations.
- **Safety**: 3s timeout for all external semantic calls.