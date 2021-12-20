let state = 0;
let bubblesPop = []; //array of images
let bubble; //bubble object
let bubbles = []; //array of bubble objects
let popText = [];
// let popTextWords = ["some things", "are", "just", "joyous", "and beautiful", "and fill you", "with awe,", "thank goddess.", "the act", "of watching", "bubbles move through", "air releases", "serotonin. this is", "an untested", "but not unlikely", "hypothesis.", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
let counter = 0;
let popSound = [];
let home;


function preload() {
  //preload images to bubblesPop array
  for (i = 0; i < 21; i++) {
    if (i < 10) {
      bubblesPop[i] = loadImage(`../../assets/bubbles/bubblesPop_0${i}.png`)
    } else {
      bubblesPop[i] = loadImage(`../../assets/bubbles/bubblesPop_${i}.png`)
    }
  }

  popSound[0] = loadSound('../../assets/bubbles/bubble_pop.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  canvas.parent('bgCanvas');

  // if (window.matchMedia("(max-width: 600px)").matches) {
  //   // run JavaScript in here.
  //   canvas.style("z-index: -2;");
  //   console.log("media query works");
  // };

  //create array of bubble objects
  for (var i = 0; i < bubblesPop.length; i++) {
    bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 200 * (i) + random(200), popSound[0]);
  }


  // hard coding links if not accessible bc of mousePressed()
  // home = select(".purpleLink");
  // home.mousePressed(logPress, "/");

}

// working on this now
function logPress(url) {
  // window.location = url;
  // window.location.href = `<a href="${url}" </a>`;
  // console.log(url);
}

function draw() {
  clear();

  for (var i = 0; i < bubbles.length; i++) {


    if (bubbles[i].popped == false) {
      bubbles[i].move();
      bubbles[i].display();
    } else {
      bubbles[i].pop();
    }
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//create Bubble class
class Bubble {
  constructor(img, x, y, popSound, popped, popCounter, randomSeed) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.popSound = popSound
    this.popped = false;
    this.popCounter = 1.5;
    this.randomSeed = random(10);
  }

  display() {
    imageMode(CENTER);
    // tint slows down sketch
    // tint(255, 126);
    image(this.img, this.x, this.y);
  }

  move() {
    if (this.x >= windowWidth + 200) {
      this.x = random(windowWidth / 2);
    }
    // bug here! When there are more than a few bubbles on the screen
    // some of them will appear at middle of page not bottom. not sure why...
    // for now getting around by having them reappear 1250px below window bottom
    if (this.y <= -250) {
      this.y = windowHeight + 1250;
    }

    // this.y -= (300/(this.img.width)); // different math
    this.y -= (1 + 100 / (this.img.width));
    this.x = this.x + sin(map(this.y, 0, windowHeight, 0, 3));

  }

  pop() {
    // popCounter is for animation, counts frames following pop
    if (this.popCounter < 6) {
      stroke(0, this.randomSeed * 20, this.popCounter * this.randomSeed * 10, 100);
      strokeWeight(15 / this.popCounter);
      noFill();
      ellipse(this.x, this.y - this.popCounter * 2, this.img.height / this.popCounter, this.img.height / this.popCounter);

      // if you want text
      // fill(0, 255, 10, 255/this.popCounter);
      // textAlign(CENTER);
      // textSize(33);
      // text("ultimate", this.x, this.y);

      this.popCounter += .5;
    }
  }
}

// function mousePressed() {
// bug! if this click is enabled you can't go back to menu
// now it's working? new p5 fixed it?!
// function mouseClicked() {
function mouseReleased() {

  // loop backwards so bubbles on top pop first
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].img.height) / 2) {
      bubbles[i].popped = true;
      bubbles[i].popSound.setVolume(0.1);
      bubbles[i].popSound.setLoop(false);
      bubbles[i].popSound.play();
      setTimeout(function() {
        counter++;
        // move bubble off screen so no re-clicks
        bubbles[i].x -= 200;
        bubbles[i].y = windowHeight - 300;
        // if you want to reset bubble state
        // bubbles[i].popped = false;
      }, 300);

      // console.log(`bubbles[${i}] has popped`);
      break;
    }
  }
  // prevent default
  return false;
}
