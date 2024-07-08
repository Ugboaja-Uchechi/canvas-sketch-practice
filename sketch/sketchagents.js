const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

// to animate it needs to be specified in the settings
const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

// another way to animate without using canvas
// const animate = () => {
//   console.log('animate');
//   requestAnimationFrame(animate); 
// }

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
      agent.update()
      agent.draw(context);
      agent.bounce(width, height);
    })

  };
};

canvasSketch(sketch, settings);

class Vector {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(2, 12);
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      // invert the velocity
      this.vel.x *= -1;
    }

    if (this.pos.y <= 0 || this.pos.y >= height) {
      // invert the velocity
      this.vel.y *= -1;
    }
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 2.5;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }
}
