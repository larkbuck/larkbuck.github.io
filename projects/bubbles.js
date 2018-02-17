let bubblesPop = []; //array of images
let bubble; //bubble object
let bubbles = []; //array of bubble objects
let popText = [];
let counter = 0;
let popSound = [];

function preload() {
  //need to preload images to bubblesPop array
  for (i = 0; i < 21; i++) {
    if (i < 10) {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_0${i}.png`)
    } else {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_${i}.png`)
    }
  }

  popSound[0] = loadSound('../assets/bubbles/bubble_pop.mp3');

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position:fixed;");


  //create array of bubble objects
  for (var i = 0; i < bubblesPop.length; i++) {
    bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 250 * (i) + random(200), popSound[0]);
  }

}

function draw() {
  // background(0);
  clear();
  // tint(255, 126);
  // image(bubblesPop[0], 10, 10);

  //hm how to stagger them... could set timer that releases them, sets move state to true
  for (var i = 0; i < bubbles.length; i++) {
    //un-comment this if you want popped item to keep moving
    // bubbles[i].move();

    if (bubbles[i].popped == false) {
      bubbles[i].move();
      bubbles[i].display();
    } else {
      bubbles[i].pop();
    }
  }
  // console.log(bubbles[0].x);
}

//create Bubble class using ES6 constructor
//will need display, x, y, move, possible destroy function ?
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
      this.y = windowHeight + 250;
    }

    // this.y -= (300/(this.img.width));
    this.y -= (1 + 100 / (this.img.width));
    this.x = this.x + sin(map(this.y, 0, windowHeight, 0, 3));

  }

  pop() {
    if (this.popCounter < 6) {
      stroke(0, this.randomSeed * 20, this.popCounter * this.randomSeed * 10, 100);
      strokeWeight(15/this.popCounter);
      noFill();
      ellipse(this.x, this.y - this.popCounter*2, this.img.height / this.popCounter, this.img.height / this.popCounter);

      // fill(0, 255, 10, 255/this.popCounter);
      // textAlign(CENTER);
      // textSize(33);
      // text("ultimate", this.x, this.y);

      this.popCounter += .5;
    }
    // if (this.popCounter <= 10) {
    //   setInterval(function() {
    //     stroke(0);
    //     noFill();
    //     color(this.popCounter * 5);
    //     ellipse(this.x, this.y, this.img.width / this.popCounter, this.img.height / this.popCounter);
    //     this.popCounter += 1;
    //   }, 50);
    // }
  }
}


function popCircles(bubble) {
  // for (i = 1; i < 10; i += 1) {
  //   fill(0);
  //   ellipse(bubble.x, bubble.y, bubble.img.width / i, bubble.img.height / i);
  //   console.log(bubble);
  // }
}

function mousePressed() {
  // loop backwards so bubbles on top pop first
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].img.height) / 2) {
      bubbles[i].popped = true;
      bubbles[i].popSound.setVolume(0.5);
      bubbles[i].popSound.setLoop(false);
      bubbles[i].popSound.play();
      popCircles(bubbles[i]);
      // for (j = 1; j <= 10; j += .01) {
      //   image(bubbles[i].img, bubbles[i].x, bubbles[i].y, bubbles[i].img.width/j, bubbles[i].img.height/j);
      //   console.log(bubbles[i].img.width/j);
      // }
      setTimeout(function() {
        popText[i] = createP(`bubble #${counter}`);
        // popText[i].position(bubbles[i].x - 30, bubbles[i].y - 80);
        popText[i].position(windowWidth - 250, 350 + 50 * counter);
        popText[i].style("position:fixed; font-size: 20px; color: orange");
        counter++;
        // move bubble off screen so no re-clicks
        bubbles[i].x = -400;
        bubbles[i].y = -400;
      }, 500);

      console.log(`bubbles[${i}] has popped`);
      break;
    }
  }
  // prevent default
  return false;
}
