// this silly! update to toggle x-index on html element, creating image each time

let meNala = [];
let counter = 1;
let caption;


function setup() {
  // canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0, 0);
  caption = createP("When you try to imitate your dog in a photo series.")
  caption.position(500, 850);
  meNala[0] = createImg(`../assets/contact/larkNala_0.jpg`)
  // meNala[0].parent('photos');
  meNala[0].position(500, 600);
  setInterval(displayImage, 2500);
}

function displayImage (){
  meNala[counter] = createImg(`../assets/contact/larkNala_${counter}.jpg`)
  // meNala[counter].parent('photos');
  meNala[counter].position(500, 600);

  // meNala[counter-1].remove(); // not working
  counter = (counter+1)%3;

}
