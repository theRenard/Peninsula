export default (gGl: WebGLRenderingContext): WebGLBuffer => {

  // First: define the vertices for a square
  const verticesOfSquare = [
      0.5, 0.5, 0.0,
      -0.5, 0.5, 0.0,
      0.5, -0.5, 0.0,
      -0.5, -0.5, 0.0
  ];

  // Step A: Create a buffer on the gGL context for our vertex positions
  const gSquareVertexBuffer = gGl.createBuffer();

  // Step B: Activate vertexBuffer
  gGl.bindBuffer(gGl.ARRAY_BUFFER, gSquareVertexBuffer);

  // Step C: Loads verticesOfSquare into the vertexBuffer
  gGl.bufferData(gGl.ARRAY_BUFFER, new Float32Array(verticesOfSquare), gGl.STATIC_DRAW);

  if (!gSquareVertexBuffer) throw new Error('No square vertex');

  return gSquareVertexBuffer;
}