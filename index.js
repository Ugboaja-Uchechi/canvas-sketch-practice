const canvas = document.getElementById('newCanvas');
const pathCanvas = document.getElementById('pathCanvas');


const context = canvas.getContext('2d');
const pathContext = pathCanvas.getContext('2d');

// The common way to draw on the canvas is to:

// Begin a Path - beginPath()
// Move from a point to a Point along a x and y axis without drawind a line. Think of it as some sort of margin - moveTo()
// The lineTo() method adds a line from the last point in the path to a new point. if we have a canvas with a width and height of 100 and a moveTo it draws a line from the moveTo according to the  - lineTo()
// Draw the Path - stroke()

pathContext.beginPath();
pathContext.moveTo(20,50);
pathContext.lineTo(580, 600);
// context.lineTo(100, 200);
// context.strokeStyle= 'limegreen';
pathContext.stroke();

// Draws a filled Rect
// context.fillStyle = "pink";
// context.fillRect(50, 50, 200, 200);


// We would only see one square because we are drawing on top of each other
// for (let i = 0; i < 5; i++) {
//   context.beginPath();
//   context.rect(0, 20, 50, 50);
//   context.stroke();
// }

// for (let i = 0; i < 5; i++) {
//   context.beginPath();
//   context.rect(100 + 60 * i, 20, 50, 50);
//   context.stroke();
// }

// System Code Generated
// for (let i = 0; i < 5; i++) {
//   context.beginPath();
//   context.fillRect(10 + i * 100, 10 + i * 100, 100, 100);
//   context.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// }

// Using Variables and Nested Loops

// This is a grid containing 25 boxes. Refer to Notion
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
  let width = 60;
  let height = 60;
  let gap = 20;
  let x = 10 + (width + gap) * i;
  let y = 20 + (height + gap) * j;

  context.beginPath();
  context.rect(x, y, width, height);
  context.stroke();

  if (Math.random() > 0.5) {
    context.beginPath();
     context.rect(x + 8, y + 8, width - 16, height - 16);
     context.stroke();
   }

  // context.beginPath();
  // context.rect(x + 8, y + 8, width - 16, height - 16);
  // context.stroke();
  }
}
