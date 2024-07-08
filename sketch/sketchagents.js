const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = ({ context, width, height }) => {
  const agents = [];

  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Two objects that are instances of the Agent class
    // const agentA = new Agent(800, 400, 10);
    // const agentB = new Agent(300, 700, 10);

    agents.forEach(agent => {
      agent.draw(context);
    })

  };
};

canvasSketch(sketch, settings);

class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Point(x, y);
    this.radius = 10;
  }

  draw(context) {
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}
