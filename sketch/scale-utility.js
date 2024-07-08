const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [2048, 2048]
};

// const degToRad = (deg) => {
//   return (deg / 180) * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'lavender';
    context.strokeStyle = 'lavender';

    const cx = width * 0.5;
    const cy = height * 0.5;

    // 30% of the canvas width and height is used
    const w = width * 0.01;
    const h = height * 0.1;

    // we declared x and y with let so we can modify the values in the loop
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      // change the angle of the location by the index of the loop
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      // scale takes 2 parameters and the default value is 1
      // a random value from 1 - 3. math.random's default starts from 0
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5))

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
