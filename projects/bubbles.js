let bubblesPop = []; //array of images
let bubble; //bubble object
let bubbles = []; //array of bubble objects

function preload()
{
  //need to preload images to bubblesPop array
  for(i = 0; i < 21; i++)
  {
    if (i<10)
    {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_0${i}.png`)
    }
    else
    {
      bubblesPop[i] = loadImage(`../assets/bubbles/bubblesPop_${i}.png`)
    }
  }
}


function setup()
{
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("position:fixed;")

//now will need to create array of bubble objects
// this is just 1:
  // bubble = new Bubble(bubblesPop[0], 100, windowHeight + 200);
  // bubbles[0] = bubble;

for (var i = 0; i < bubblesPop.length; i++)
{
  bubbles[i] = new Bubble(bubblesPop[i], random(windowWidth - 200) + 100, windowHeight + 300*(i+1) + random(200));
}

}

function draw()
{
  // background(0);
  clear();

  //hm how to stagger them... could set timer that releases them, sets move state to true
  for (var i = 0; i < bubbles.length; i++)
  {
    //un-comment this if you want popped item to keep moving
    // bubbles[i].move();

    if(bubbles[i].popped == false){
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
class Bubble
{
  constructor(img, x, y, popped)
  {
    this.img = img;
    this.x = x;
    this.y = y;
    this.popped = false;
  }

  display()
  {
    imageMode(CENTER);
    image(this.img, this.x, this.y)
  }

  move()
  {
    // this.y -= (300/(this.img.width));
    this.y -= (1 + 100/(this.img.width));
    this.x = this.x + sin(map(this.y, 0, windowHeight, 0, 3));

    if (this.y < -250)
    {
      this.y = windowHeight + 250;
      // var platformX = map(sin(angle), -1, 1, 300, 550);
      // platform.position.x = platformX;
      // angle += 0.02;
    }
  }

  pop()
  {
    text("popped", this.x, this.y);
  }
}

//get x, y components of mousePressed
function mousePressed() {
  // loop backwards so bubbles on top pop first
  for (var i = bubbles.length - 1; i >= 0; i--)
  {
    if(dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].img.height)/2){
      bubbles[i].popped = true;
      console.log(`bubbles[${i}] has popped`)
      break;
    }
  }
  // prevent default
  return false;
}
