export default (id: string, shaderType: number, gGl: WebGLRenderingContext): WebGLShader => {

  // Step A: Get the shader source from index.html
  const shaderText = document.getElementById(id) as HTMLScriptElement;
  const shaderSource = shaderText?.firstChild?.textContent;

  // Step B: Create the shader based on the source type: vertex or fragment
  const compiledShader = gGl.createShader(shaderType);

  // Step C: Compile the created shader
  if (compiledShader && shaderSource) {
    gGl.shaderSource(compiledShader, shaderSource);
    gGl.compileShader(compiledShader);

    // Step D: check for error and return result
    if (!gGl.getShaderParameter(compiledShader, gGl.COMPILE_STATUS)) {
      alert("A shader compiling error occurred: " + gGl.getShaderInfoLog(compiledShader));
    }
  }

  if (!compiledShader) throw new Error('No compiled shader');

  return compiledShader;
}