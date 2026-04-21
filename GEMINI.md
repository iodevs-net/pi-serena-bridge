# GEMINI.md: Omni-Pi Directive Suite

**Omni-Pi** es el estándar de oro para la inyección semántica. Todas las interacciones con el motor Serena deben pasar por el puente para optimizar el presupuesto de tokens.

## 🛡️ Mandatos de Omni-Pi

### 1. Zero-Slop Semantic Context
- **No inyectar basura**: El advisory semántico (`SEMANTIC_ADVISORY`) debe ser breve y denso.
- **Prioridad de Capas**: Seguir el esquema `E>`, `S>`, `I>`. Si el archivo es masivo, trunca la implementación (`I>`) antes que la estructura (`S>`).

### 2. Detección de Intento y Corrección de Bugs
- Si el usuario reporta un **bug** o pide una **optimización**, el puente inyectará automáticamente los símbolos relevantes del archivo mencionado.
- **Acción**: Si ves un advisory de Omni-Pi, **respeta los contratos** definidos en la sección `E>`.

### 3. Análisis de Impacto Sistémico
- Antes de aplicar un cambio con `replace_content`, `edit_file` o similar, revisa el `DEEP_IMPACT_WARNING`.
- Si Omni-Pi advierte de impactos en otros archivos (ej. `//errors.py`, `main.ts`), **estás obligado** a verificar esos archivos antes de confirmar el cambio al usuario.

## 🛠️ Herramientas de Desarrollo y Verificación
- **Validación de Compresión**: `bun test tests/stress-semantic.test.ts`.
- **Validación de Hooks**: `bun test tests/integration-hooks.test.ts`.
- **Simulación OMP**: `bun run verify-omp.ts`.

## 📜 Metodología
- **DRY**: No reimplementes el parsing de símbolos; usa `provider.getSymbolsOverview`.
- **KISS**: Mantén el compressor libre de dependencias pesadas.
- **LEAN**: Si el mensaje del usuario no tiene intención de cambio, no inyectes nada.

---
*Omni-Pi - Directiva de Inteligencia Semántica · v5.0 · Abril 2026*
