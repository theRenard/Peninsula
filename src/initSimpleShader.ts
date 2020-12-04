import loadAndCompileShader from './loadAndCompileShader';

export default (gSquareVertexBuffer: WebGLBuffer, vertexShaderID: string, fragmentShaderID: string, gGl: WebGLRenderingContext): void => {

  const { VERTEX_SHADER, FRAGMENT_SHADER, LINK_STATUS, ARRAY_BUFFER } = gGl;

  // Step A: load and compile the vertex and fragment shaders
  const vertexShader = loadAndCompileShader(vertexShaderID, VERTEX_SHADER, gGl);
  const fragmentShader = loadAndCompileShader(fragmentShaderID, FRAGMENT_SHADER, gGl);

    // Step B: Create and link the shaders into a program.
  const gSimpleShader = gGl.createProgram();

  if (!gSimpleShader) throw new Error('No gl program');

  gGl.attachShader(gSimpleShader, vertexShader);
  gGl.attachShader(gSimpleShader, fragmentShader);
  gGl.linkProgram(gSimpleShader);

  // Step C: check for error
  if (!gGl.getProgramParameter(gSimpleShader, LINK_STATUS))
    alert("Error linking shader");

    // Step D: Gets a reference to the aSquareVertexPosition attribute
  const gShaderVertexPositionAttribute = gGl.getAttribLocation(gSimpleShader, "aSquareVertexPosition");

    // Step E: Activates the vertex buffer loaded in VertexBuffer.js
  gGl.bindBuffer(ARRAY_BUFFER, gSquareVertexBuffer);

  // Step F: Describe the characteristic of the vertex position attribute
  gGl.vertexAttribPointer(gShaderVertexPositionAttribute,
    3, // each vertex element is a 3-float (x,y,z)
    gGl.FLOAT, // data type is FLOAT
    false, // if the content is normalized vectors
    0, // number of bytes to skip in between elements
    0); // offsets to the first element

    gGl.clear(gGl.COLOR_BUFFER_BIT);
    // Step A: Activate the shader to use
    gGl.useProgram(gSimpleShader);
    // Step B: Enable the vertex position attribute
    gGl.enableVertexAttribArray(gShaderVertexPositionAttribute);
    // Step C: Draw with the above settings
    gGl.drawArrays(gGl.TRIANGLE_STRIP, 0, 4);

  }