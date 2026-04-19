# Pi-Serena Semantic Bridge (v1.3.0)

**Native Semantic Bridge for oh-my-pi and Serena MCP.**

Este bridge integra el servidor **Serena MCP** con el ecosistema **oh-my-pi** (OMP) para dotar al agente de una "visión semántica" proactiva, previniendo errores de dependencia y cambios disruptivos antes de que ocurran.

## 🛡️ Características Elite

- **Deep Impact Analysis (v1.3.0)**: Rastreo proactivo de referencias cruzadas. El bridge te advierte si un cambio local afecta a otros archivos del proyecto.
- **Semantic Gatekeeper**: Intercepta llamadas a herramientas de edición (`tool_call`) para validar la integridad semántica.
- **Smart Context Injection**: Inyecta proactivamente un mapa de símbolos optimizado cuando detecta intención de modificar código.
- **Smart Compression**: Algoritmo de priorización que asegura que el contexto inyectado contenga la estructura más valiosa (exports, clases, interfaces).
- **Vendor-Agnostic Architecture**: Diseñado bajo el patrón Strategy. Puedes cambiar Serena por cualquier otro proveedor semántico (LSP, Tree-sitter) mediante la interfaz `ISemanticProvider`.
- **Resiliencia Industrial**: Implementa Circuit Breaker, reconexión automática y caché semántica con TTL.
- **Elite Test Suite**: Suite de pruebas unitarias integradas con Bun Test para garantizar la estabilidad del núcleo.

## 🚀 Instalación Rápida

1. Asegúrate de tener instalado [oh-my-pi](https://github.com/iodevs-net/oh-my-pi).
2. Clona este repositorio en tu directorio de extensiones:
   ```bash
   cd ~/.omp/extensions/
   git clone https://github.com/iodevs-net/pi-serena-bridge.git
   ```
3. Instala las dependencias y verifica:
   ```bash
   cd pi-serena-bridge
   bun install
   bun test
   ```

## 🛠️ Arquitectura

El bridge sigue una arquitectura de tres capas desacopladas:
- **Capa A**: Adaptador de Cliente (Gestiona la conexión MCP y la resiliencia).
- **Capa B**: Compresor Semántico (Optimiza la data para el LLM).
- **Capa C**: Interceptores de Hooks (Implementa la lógica de oh-my-pi).

## 📄 Licencia

MIT - Desarrollado con orgullo para el ecosistema de agentes autónomos.
