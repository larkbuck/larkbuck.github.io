let osc;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator('square');
}

function draw() {
  background(220);
  osc.freq(60 + mouseX);
  osc.amp(map(mouseY, 0, height, 0.2, 0));
  // to draw shape
  // rect(50, 50, map(mouseX, 0, width, 0, 200), map(mouseY, 0, height, 0, 200));
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}
