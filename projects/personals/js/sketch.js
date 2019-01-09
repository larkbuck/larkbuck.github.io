let personalsP5Instance_1 = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  p.mouseIsClickedHere = false;

  p.setup = function() {
    p.canvasDiv = document.querySelector("#p5Canvas_1");

    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);
    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    // p.canvas.style("z-index: 5;");
    // p.canvas.mousePressed(localMouseClicked);
    // p.canvas.mouseReleased(localMouseUp);



    p.frameRate(30);

    // eraseButton.addEventListener("click", p.eraseCanvas);
  };

  p.draw = function() {
    // p.clear();
    p.background(155);


  };

  p.windowResized = function() {

    p.resizeCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);

  }


  p.localMouseClicked = function() {
    console.log("hey")
    p.mouseIsClickedHere = true;
  }

  p.localMouseUp = function() {
    console.log("bye")
    p.mouseIsClickedHere = false;
  }
};

let personalsCanvas_1 = new p5(personalsP5Instance_1, 'p5Canvas_1');
