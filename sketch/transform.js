const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'orange';
    // we renamed x and y to cx and cy to be the center of the circle
    const cx = width * 0.5;
    const cy = height * 0.5;

    // 30% of the canvas width and height is used
    const w = width * 0.01;
    const h = height * 0.1;

    // we declared x and y with let so we can modify the values in the loop
    let x, y;

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

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      // change the angle of the location by the index of the loop
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }


  };
};

canvasSketch(sketch, settings);
