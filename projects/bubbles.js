let bubblesPop = []; //array of images
let bubble; //bubble object
let bubbles = []; //array of bubble objects
let popText = [];
var counter = 0;

function preload() {
  //need to preload images to bubblesPop array
  for (i = 0; i < 21; i++) {
    if (i < 10) {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_0${i}.png`)
    } else {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_${i}.png`)
    }
  }
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position:fixed;");


  //create array of bubble objects
  for (var i = 0; i < bubblesPop.length; i++) {
    bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 250 * (i + 1) + random(200));
  }

}

function draw() {
  // background(0);
  clear();

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
  constructor(img, x, y, popped) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.popped = false;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y)

    // trying to create translucent shadow but can't get tint to work not sure why
    // tint(255, 126);
    // image(this.img, this.x-50, this.y-50)
    // tint(255, 255);
    // image(this.img, this.x, this.y)
  }

  move() {
    // this.y -= (300/(this.img.width));
    this.y -= (1 + 100 / (this.img.width));
    this.x = this.x + sin(map(this.y, 0, windowHeight, 0, 3));

    if (this.x > windowWidth + 200) {
      this.x = random(windowWidth / 2);
    }
    // bug here! When there are more than a few bubbles on the screen
    // some of them will appear at middle of page not bottom. not sure why...
    if (this.y < -250) {
      this.y = windowHeight + 250;
    }
  }

  pop() {
    // only problem is that this text is static, can't access counter variable
    // from here... changing text need to be created in mousePressed
    // function unless it is variable declared in constructor
    text(this.x, this.x, this.y);
  }
}

function mousePressed() {
  // loop backwards so bubbles on top pop first
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].img.height) / 2) {
      bubbles[i].popped = true;
      setTimeout(function() {
        popText[i] = createP(`bubble #${counter}`);
        // popText[i].position(bubbles[i].x - 30, bubbles[i].y - 80);
        popText[i].position(windowWidth - 250, 350 + 50*counter);
        popText[i].style("position:fixed; font-size: 20px; color: orange");
        counter++;
        // move bubble off screen so no re-clicks
        bubbles[i].x = -400;
        bubbles[i].y = -400;
      }, 100 + 20 * counter);

      console.log(`bubbles[${i}] has popped`);
      break;
    }
  }
  // prevent default
  return false;
}
