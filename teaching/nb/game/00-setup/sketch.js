let score = 0;
let state = 'splash';
let w, h;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);

  w = width;
  h = height;
}

function draw() {

  switch (state) {
    case ('splash'):
      splashScreen();
      break;
    case ('gamePlay'):
      gamePlay();
      break;
    case ('youWon'):
      youWon();
      break;
    case ('youLose'):
      // youLose code
      break;
    default:
      break;
  }
}

function gamePlay() {
  background(220);
  fill(255, 33, 33);
  ellipse(w / 2, h / 2, 50);
}

function splashScreen() {
  background(0);

  fill(255);
  text('click to start', w / 2, h / 2);
}

function youWon() {
  background(random(255), random(255), random(255));

}

function mousePressed() {
  switch (state) {
    case ('splash'):
      splashScreenMousePressed();
      break;
    case ('gamePlay'):
      gamePlayMousePressed();
      break;
    case ('youWon'):
      // youWon code
      break;
    case ('youLose'):
      // youLose code
      break;
    default:
      break;
  }
}

function splashScreenMousePressed() {
  state = 'gamePlay';
}

function gamePlayMousePressed() {
  if (dist(mouseX, mouseY, w / 2, h / 2) <= 25) {
    score++;
    console.log(score);
  }

  if (score > 10) {
    state = 'youWon';
  }
}
