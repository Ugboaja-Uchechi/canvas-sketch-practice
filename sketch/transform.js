const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'orange';
    const x = width * 0.5;
    const y = height * 0.5;

    // 30% of the canvas width and height is used
    const w = width * 0.01;
    const h = height * 0.1;
    
    // context.save();
    // context.translate(x,y);
    // // rotate is in radians not degree
    // // Formula to radian is: (x / 180 * Math.PI) x stands for whatever number of degree needs conversion
    // context.rotate(0.3);


    // context.beginPath();
    // context.rect(-w * 0.5, -h * 0.5, w, h);
    // context.fill();

    // // if we are to draw another shape it will start of from where we left this is good if wee want to transform that shape with the 1st shape. If not we need to save() and restore() to reset the canvas

    // context.translate(100, 400);
    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();
    // context.restore();

    // context.save();
    // context.translate(100, 400);
    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();
    // context.restore();

    context.translate(x,y);
    context.rotate(degToRad(45));
    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
  };
};

canvasSketch(sketch, settings);
