//allow user to interact with artists statement
//not working thing it's line 17 the statement.value() was previously a call
//on a textfield input

let meNala = [];
let counter = 0;

function preload() {
  //need to preload images to bubblesPop array
  for (i = 0; i < 7; i++) {
      meNala[i] = loadImage(`../assets/traumagotchi/traumagotchi_${i}.png`);
  }
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  setInterval(displayImage, 4500);
}

function displayImage (){
  fill(247, 247, 247);
  noStroke();
  rect(600, 500, 256, 256);
  image(meNala[counter], 600, 500, image.width/2, image.height/2);
  counter = (counter+1)%6;
  fill(5);
  text("You probably get asked this all the time,", 600, 700);
}
