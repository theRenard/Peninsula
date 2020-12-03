
// Get canvas element
const canvas = document.getElementById("GLCanvas") as HTMLCanvasElement;

// Get webgl context from canvas
const gl = canvas.getContext("webgl") as WebGLRenderingContext;


gl.clearColor(0.0, 0.8, 0.0, 1.0);  // set the color to be cleared
gl.clear(gl.COLOR_BUFFER_BIT);   // clear the colors
