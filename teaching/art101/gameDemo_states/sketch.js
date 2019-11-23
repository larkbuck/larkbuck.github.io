// pseudocode
// you can stick to basic code outline if that helps give you structure


// declare variables for:
// game state
// points

let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(400, 400);

}

function draw() {

  switch (state) {
    case 'title':
      titlePage();
      break;
    case 'level 1':
      level1();
      break;
    default:
      break;

  }

  //   if game state variable is "title"
  //   then draw the title page
  // (execute title page function)

  //   if game state is "first level"
  //   execute first level function

  // if points drop to below 0
  // execute game over function

  // if points exceeds 100
  // execute you won function
}

function titlePage() {
  background(0);
  // make background black
  // display image of my sprite
  // display text "my fantastic game"
  cnv.mouseClicked(function(){  console.log('hello'); state = 'level 1'});

}

function level1(){
  background(125);
  cnv.mouseClicked(function(){  console.log('level 1');});
}
