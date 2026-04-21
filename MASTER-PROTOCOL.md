# MASTER-SPEC-PROTOCOL: Omni-Pi (Universal Semantic Intelligence)

## 1. Visión y Objetivo
Eliminar el **Semantic Gap** en `oh-my-pi`. **Omni-Pi** es el puente semántico proactivo que intercepta ediciones y proporciona contexto de dependencias profundo mediante una arquitectura de compresión de 3 capas.

### Core Principles
| Principio | Aplicación en Omni-Pi |
| :--- | :--- |
| **DRY** | Usar Serena para toda la lógica simbólica; no reimplementar parsing. |
| **KISS** | Un solo punto de entrada (`src/index.ts`) que orqueste hooks simples. |
| **SOLID** | Cada hook (`context`, `tool_call`) tiene una responsabilidad única. |
| **LEAN** | No inyectar contexto si no hay una intención clara de edición (YAGNI). |
| **Zero-Invasive** | No modificar el core de `oh-my-pi`; usar solo el sistema de extensiones. |

---

## 2. Arquitectura Técnica Atómica (v5.0 Elite)

### 2.1. Capas del Sistema
1.  **Layer A: Adaptador Serena (Client)**
    *   Gestiona la conexión MCP vía Stdio.
    *   Protocolo: `uvx --from git+https://github.com/oraios/serena serena start-mcp-server`.
2.  **Layer B: Semantic Compressor (3-Layer Hierarchy)**
    *   `E> (Exported)`, `S> (Structural)`, `I> (Implementation)`.
    *   Normalización agresiva de tokens (~30% de ahorro).
3.  **Layer C: Hook Interceptors (High-Speed)**
    *   `session_start`: Activa e indexa el proyecto en Serena.
    *   `context`: Inyecta el `SEMANTIC_ADVISORY` basado en la intención.
    *   `tool_call`: **Gatekeeper de Impacto Paralelo** que valida los parches contra el grafo de Serena.

---

## 3. Sistema de GATES (Workflow)

Cada tarea debe pasar por este flujo:

*   **GATE 0: Aislar**: Crear rama o entorno de trabajo limpio.
*   **GATE 1: Investigar**: Validar tipos en `oh-my-pi` y herramientas en `Serena`.
*   **GATE 2: Planificar**: Definir la tarea atómica.
*   **GATE 3: Implementar**: Escribir el código mínimo necesario siguiendo SOLID.
*   **GATE 4: Validar**: Ejecutar `bun test` y simulaciones de integración (`verify-omp.ts`).
*   **GATE 5: Sincronizar**: Replicar `src/` en todas las carpetas de extensiones.

---

## 4. Matriz de Validación de Elite
| Test | Escenario | Criterio de Éxito |
| :--- | :--- | :--- |
| **Compresión** | Archivo de 10k líneas | Se mantiene el límite de tokens y se preserva `E>`. |
| **Intención** | Prompt de lenguaje natural | Se extrae el path y se dispara el advisory. |
| **Impacto** | Cambio en símbolo crítico | El Gatekeeper detecta referencias cruzadas en paralelo. |

---

## 5. Reglas de Ingeniería (Elite AI Instructions)
1.  **Protección de Hardware**: Minimizar escrituras. Usar `scratch/` para pruebas temporales.
2.  **No Lore**: Prohibido el lenguaje florido. Solo hechos técnicos y código idiomático.
3.  **Sync-Safety**: Toda llamada a Serena debe tener un timeout de 3s máximo.
4.  **Error Handling**: Si Serena falla, Omni-Pi debe fallar silenciosamente para mantener la operatividad de `oh-my-pi`.

---

**Estado del Protocolo: CERTIFICADO v5.0.**
