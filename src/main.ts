import initRenderingContext  from '~/initRenderingContext';
import initSquareBuffer  from '~/initSquareBuffer';
import initSimpleShader from './initSimpleShader';

// get WebGLRenderingContext
const gGl = initRenderingContext('GLCanvas');

// create a square as Vertex Buffer
const gSquareVertexBuffer = initSquareBuffer(gGl);

initSimpleShader(gSquareVertexBuffer, 'VertexShader', 'FragmentShader', gGl);
