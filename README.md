# Omni-Pi (v1.3.0)

**Universal Semantic Intelligence Bridge for oh-my-pi.**

**Omni-Pi** es una extensión de inteligencia semántica proactiva diseñada para el ecosistema **oh-my-pi** (OMP). Actúa como un puente agnóstico que conecta agentes de codificación con servidores de conocimiento semántico (como Serena MCP, LSP o Tree-sitter), dotando al agente de una "visión arquitectónica" global y previniendo cambios disruptivos mediante análisis de impacto profundo.

## 🛡️ Características Principales

- **Deep Impact Analysis**: Rastreo proactivo de referencias cruzadas. Omni-Pi te advierte si un cambio local afecta a otros archivos o contratos públicos en el proyecto.
- **Semantic Gatekeeper**: Intercepta llamadas a herramientas de edición para validar la integridad semántica antes de que se apliquen los cambios.
- **Universal Provider Architecture**: Diseño desacoplado bajo el patrón Strategy. Soporta múltiples motores de análisis (actualmente optimizado para Serena MCP).
- **Proactive Context Injection**: Inyecta automáticamente mapas de símbolos comprimidos y priorizados cuando detecta intención de modificación en el lenguaje natural.
- **Elite Resilience**: Sistema de caché inteligente, Circuit Breaker para fallos de red y timeouts dinámicos de 3s para garantizar latencia cero en el flujo de trabajo.

## 🚀 Instalación

1. Clona este repositorio en tu directorio de extensiones de oh-my-pi:
   ```bash
   cd ~/.omp/extensions/
   git clone https://github.com/iodevs-net/omni-pi.git
   ```
2. Instala las dependencias:
   ```bash
   cd omni-pi
   bun install
   ```
3. Verifica la integridad:
   ```bash
   bun test
   ```

## 🛠️ Filosofía de Diseño

Omni-Pi no es solo un puente; es un multiplicador de precisión. Su objetivo es transformar a cualquier agente de codificación de un "escritor de archivos" a un "arquitecto de sistemas", proporcionando la señal semántica exacta necesaria para mantener codebases sanos a gran escala.

## 📄 Licencia

MIT - Evolucionando el desarrollo asistido por IA.
