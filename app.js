/* app.js */
const { circleArea, squareArea } = require('./shape-area.js');

const raio = process.argv[2];
const lado = process.argv[3];

const areaOfCircle = circleArea (raio);
const areaOfSquare = squareArea (lado);

console.log(`${raio} A área do circulo é = ${areaOfCircle}`);
console.log(`${lado} A área do quadrado é = ${areaOfSquare}`);
 
