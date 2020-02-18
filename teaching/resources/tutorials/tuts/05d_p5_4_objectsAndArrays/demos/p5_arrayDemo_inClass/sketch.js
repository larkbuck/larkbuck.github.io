
let rectangles = [];

function setup(){
  createCanvas(500, 500);

}


function mousePressed(){

  rectangles.push({
    posX: mouseX,
    posY: mouseY,
    color: random(255),
    size: random(50, 200),
    speed: random(5)
  });

  console.log(rectangles);


}


function draw(){
    background(100, 200, 100);

    // looping through array backwards!
    // this way when we splice one out, it doesn't cause a gap in the array
  for (i = rectangles.length - 1; i < 0; i--){
    fill(rectangles[i].color);
    rect(rectangles[i].posX, rectangles[i].posY, rectangles[i].size, rectangles[i].size);

    rectangles[i].posY += rectangles[i].speed;

    // remove rectangle from array when it hits the bottom of screen
    // this way array doesn't get so long it slows the performance
    if (rectangles[i].posY >= height + 200) {
      rectangles.splice(i, 1);
    }
  }

}
