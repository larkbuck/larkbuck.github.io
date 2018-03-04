// fix this so images just don't keep stacking! tried using remove() but causing error,
// perhaps add to array... see how dan did it in fireworks tut

let meNala = [];
let counter = 1;
let caption;

// function preload() {
//   //need to preload images to bubblesPop array
//   for (i = 0; i < 4; i++) {
//       meNala[i] = loadImage(`../assets/contact/larkNala_${i}.jpg`);
//   }
// }


function setup() {
  // canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0, 0);
  caption = createP("When you try to imitate your dog in a photo series.")
  caption.position(500, 950);
  meNala[0] = createImg(`../assets/contact/larkNala_0.jpg`)
  meNala[0].position(500, 700);
  setInterval(displayImage, 2500);
}

function displayImage (){
  meNala[counter] = createImg(`../assets/contact/larkNala_${counter}.jpg`)
  meNala[counter].position(500, 700);
  // meNala[counter-1].remove();
  counter = (counter+1)%3;

}
// if doing p5 images on canvas
// function displayImage (){
//   image(meNala[counter], 500, 500, image.width/2, image.height/2);
//   counter = (counter+1)%3;
// }
