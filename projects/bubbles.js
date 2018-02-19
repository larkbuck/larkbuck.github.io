let state = 0;
let bubblesPop = []; //array of images
let bubble; //bubble object
let bubbles = []; //array of bubble objects
let popText = [];
let popTextWords = ["some things", "are", "just", "joyous", "and beatiful", "and fill you", "with awe,", "thank goddess.", "the act", "of watching", "bubbles move through", "air releases", "serotonin. this is", "an untested", "but not unlikely", "hypothesis.", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
let counter = 0;
let popSound = [];
let serotoninImages = []
let serotonin;
let serotoninSwitch = false;
let home;

//Creating animations from explode things --- tho bug with animations so doing away with for now! saved copy in sync/code/games
// let popAnimations = [];
// let confettiPop_pink;
// let confettiPop_green;
// let collisionAnimation;

function preload() {
  //need to preload images to bubblesPop array
  for (i = 0; i < 21; i++) {
    if (i < 10) {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_0${i}.png`)
    } else {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_${i}.png`)
    }
  }

  serotonin = loadImage('../assets/bubbles/serotonin_512px.png')
  popSound[0] = loadSound('../assets/bubbles/bubble_pop.mp3');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(60);
  canvas.parent("bgCanvas");
  canvas.position(0, 0);


  if (window.matchMedia("(max-width: 600px)").matches) {
    // run JavaScript in here.
    canvas.style("z-index: -2;");
    console.log("media query works");
  };

  //create array of bubble objects
  //bug - to change later... for now reduced frequency bc you currently can't pop them
  for (var i = 0; i < bubblesPop.length; i++) {
    bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 200 * (i) + random(200), popSound[0]);
    // bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 150 * (i) + random(200), popSound[0]);
  }

  //bug! gar can't get the menu items to click if bubbles also popping!
  // won't let me select an element that wasn't created in p5
  //home = select('bgCanvas');
  //  home = select(".purpleLink");
  // home = document.querySelector(".purpleLink");
  // console.log(home);

// won't let me do action on an object that wasn't created dynamically in p5
  // canvas.mousePressed(logPress); // this works
}

function logPress() {
  console.log("home pressed");
}

function draw() {
  // background(0);
  clear();
  // background(34, 30, 24);

  for (var i = 0; i < bubbles.length; i++) {
    //un-comment this if you want popped item to keep moving
    // bubbles[i].move();

    if (bubbles[i].popped == false) {
      bubbles[i].move();
      bubbles[i].display();
    } else {
      // animation(confettiPop_pink, bubbles[i].x, bubbles[i].y);
      bubbles[i].pop();
    }
  }

  if (serotoninSwitch == true) {
    serotoninImages[0] = image(serotonin, windowWidth - 600, 600);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//create Bubble class using ES6 constructor
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
    // tint slows down processing too much
    // tint(255, 126);
    image(this.img, this.x, this.y);
  }

  move() {

    if (this.x >= windowWidth + 200) {
      this.x = random(windowWidth / 2);
    }
    // bug here! When there are more than a few bubbles on the screen
    // some of them will appear at middle of page not bottom. not sure why...
    if (this.y <= -250) {
      this.y = windowHeight + 1250;
    }

    // this.y -= (300/(this.img.width));
    this.y -= (1 + 100 / (this.img.width));
    this.x = this.x + sin(map(this.y, 0, windowHeight, 0, 3));

  }

  pop() {

    if (this.popCounter < 6) {
      stroke(0, this.randomSeed * 20, this.popCounter * this.randomSeed * 10, 100);
      strokeWeight(15 / this.popCounter);
      noFill();
      ellipse(this.x, this.y - this.popCounter * 2, this.img.height / this.popCounter, this.img.height / this.popCounter);

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
function mouseClicked() {

  // loop backwards so bubbles on top pop first
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].img.height) / 2) {
      bubbles[i].popped = true;
      bubbles[i].popSound.setVolume(0.1);
      bubbles[i].popSound.setLoop(false);
      bubbles[i].popSound.play();
      setTimeout(function() {
        if (counter <= 7) {
          popText[i] = createP(popTextWords[counter]);
          popText[i].position(windowWidth - 250, 350 + 50 * counter);
          popText[i].style("position:fixed; font-size: 26px; color: orange");
          // popText[i] = createP(`bubble #${counter}`);
          // popText[i].position(bubbles[i].x - 30, bubbles[i].y - 80);
        }

        // *** this is with more text ***
        // } else if (counter <= 11) {
        //   popText[i].position(windowWidth - 350, 340 + 50 * (counter - 7));
        //   popText[i].style("position:fixed; font-size: 26px; color: blue");
        // } else if (counter <= 15) {
        //   popText[i].position(windowWidth - 350, 340 + 50 * (counter - 7));
        //   popText[i].style("position:fixed; font-size: 26px; color: blue");
        //   serotoninSwitch = true;
        // } else {
        //   popText[i].position(windowWidth - 450, 330 + 50 * (counter - 15));
        //   popText[i].style("position:fixed; font-size: 100px; color: pink");
        // }

        counter++;
        // move bubble off screen so no re-clicks
        bubbles[i].x -= 200;
        bubbles[i].y = windowHeight - 300;
        // bubbles[i].popped = false;
      }, 300);

      console.log(`bubbles[${i}] has popped`);
      break;
    }
  }
  // prevent default
  return false;
}
