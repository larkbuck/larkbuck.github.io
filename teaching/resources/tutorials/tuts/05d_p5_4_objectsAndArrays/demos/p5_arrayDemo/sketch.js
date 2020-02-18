

let rectangles = [];

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  // push an object with the mouse position and random color
  // to the rectangles array
  rectangles.push({posX: mouseX, posY: mouseY, color: random(255)})
  console.log(rectangles);
}

function draw() {
  background(200, 100, 50);

  // draw all rectangles every draw loop
  for (let i = 0; i < rectangles.length; i++) {
    fill(rectangles[i].color);
    rect(rectangles[i].posX, rectangles[i].posY, 100, 100);
    // make them fall by changing their y position every loop
    rectangles[i].posY += 2;
  }
}
