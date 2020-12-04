export default (id: string): WebGLRenderingContext => {

  // Get canvas element
  const canvas = document.getElementById(id) as HTMLCanvasElement;

  if (!canvas) throw new Error('No canvas element found');

  // Get webgl context from canvas
  const gGl = canvas.getContext("webgl") as WebGLRenderingContext;
  // assign a color
  gGl.clearColor(0.0, 0.8, 0.0, 1.0); // set the color to be cleared
  gGl.clear(gGl.COLOR_BUFFER_BIT); // clear the colors

  return gGl;

}