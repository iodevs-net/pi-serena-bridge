/**
 * Layer B: Semantic Compressor
 * Transforma la salida detallada de Serena en un formato denso para el prompt del LLM.
 * Respeta el límite de ~500 tokens (estimado en caracteres).
 */
export class SemanticCompressor {
  private static readonly MAX_CHARS = 2000; // Aprox 500 tokens

  /**
   * Comprime la respuesta de herramientas como find_referencing_symbols o get_symbols_overview.
   */
  static compress(response: any): string {
    if (!response || !response.content || response.content.length === 0) {
      return "[SEMANTIC] No symbols found.";
    }

    try {
      const text = response.content[0].text;
      
      // Si el texto es error, reportarlo directamente pero breve
      if (text.startsWith("Error executing tool")) {
        return `[SEMANTIC_ERR] ${text.substring(0, 100)}...`;
      }

      // Intentar parsear si es JSON, sino usar el texto directamente
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      let output = "SEMANTIC_CONTEXT:\n";

      if (typeof data === "string") {
        output += data.substring(0, this.MAX_CHARS);
      } else if (Array.isArray(data)) {
        // Para listas de símbolos
        data.forEach((sym: any) => {
          const line = `  - ${sym.name} (${sym.kind}) @ ${sym.relative_path}:${sym.line}\n`;
          if (output.length + line.length < this.MAX_CHARS) {
            output += line;
          }
        });
      } else if (data.structuredContent) {
        // Manejo de structuredContent si existe
        output += JSON.stringify(data.structuredContent).substring(0, this.MAX_CHARS);
      } else {
        // Fallback genérico comprimido
        output += JSON.stringify(data).substring(0, this.MAX_CHARS);
      }

      return output.trim();
    } catch (error) {
      return "[SEMANTIC_ERR] Compression failed.";
    }
  }
}
