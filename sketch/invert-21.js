// An outer square with various inner shapes and random colors

// off is like the padding between the outer and inner shapes

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const shapes = ['square', 'circle', 'triangle', 'rhombus'];

    const w = width * 0.15;
    const h = height * 0.15;
    const gap = width * 0.03;

    const ix = width * 0.07;
    const iy = height * 0.07;

    const off = width * 0.05;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'white';
        context.stroke();

        const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];

        context.beginPath();

        switch (selectedShape) {
          case 'square':
            context.rect(x + off / 2, y + off / 2, w - off, h - off);
            break;
          case 'circle':
            context.arc(x + w / 2, y + h / 2, Math.min(w, h) / 2 - off / 2, 0, Math.PI * 2);
            break;
          case 'triangle':
            context.moveTo(x + w / 2, y + off / 2);
            context.lineTo(x + off / 2, y + h - off / 2);
            context.lineTo(x + w - off / 2, y + h - off / 2);
            context.closePath();
            break;
          case 'rhombus':
            context.moveTo(x + w / 2, y + off / 2);
            context.lineTo(x + off / 2, y + h / 2);
            context.lineTo(x + w / 2, y + h - off / 2);
            context.lineTo(x + w - off / 2, y + h / 2);
            context.closePath();
            break;
        }


        context.strokeStyle = 'white';
        context.stroke();
      }
    }
  };
};

canvasSketch(sketch, settings);
