# Omni-Pi: Universal Semantic Intelligence Bridge

**Omni-Pi** es el puente de inteligencia semántica de élite para `oh-my-pi`. Proporciona una infraestructura modular para integrar servidores MCP (Serena) con la sesión del agente, habilitando inyección de contexto proactiva y análisis de impacto profundo.

## 🛡️ Arquitectura Elite (v5.0)

### 1. Capa de Compresión de 3 Niveles (Density-First)
Maximiza el valor por token mediante una jerarquía de información:
- **E> (Exported)**: Contratos públicos y APIs externas.
- **S> (Structural)**: Clases, interfaces y tipos internos.
- **I> (Implementation)**: Lógica de bajo nivel (solo si el contexto lo permite).
- **Normalización**: Eliminación de modificadores redundantes y compactación sintáctica.

### 2. Detección de Intención Semántica (Natural Intent)
Uso de *Stemming* y Regex de alto espectro para capturar la intención de cambio incluso en lenguaje natural ambiguo:
- Detecta verbos: `refactor`, `fix`, `optimiza`, `arregla`, `bug`, `error`.
- Extracción dinámica de archivos en cualquier posición del prompt.

### 3. Análisis de Impacto Paralelo (Zero-Latency)
- **Gatekeeper**: Antes de cada edición, valida el grafo de dependencias.
- **Paralelización**: Ejecuta consultas de referencias cruzadas en paralelo mediante `Promise.all`, eliminando el lag en el ciclo de edición.

## 📂 Estructura del Proyecto

- `src/` - Fuente de verdad del código fuente (TypeScript).
  - `compressor.ts` - Motor de optimización de tokens.
  - `hooks/` - Interceptores de ciclo de vida (`context`, `tool_call`).
  - `serena/` - Cliente MCP para comunicación con Serena.
- `omp/extensions/` - Despliegues locales de la extensión para `oh-my-pi`.
- `tests/` - Suite de validación Senior (Stress, Integración, Edge-cases).

## 🛠️ Comandos de Desarrollo
- `bun test` - Ejecutar suite de validación global.
- `bun run verify-omp.ts` - Simular integración real con la CLI de `omp`.
- `bun run src/index.ts` - Punto de entrada de la extensión.

---
*Omni-Pi - Universal Semantic Intelligence Bridge · v5.0 · Abril 2026*
