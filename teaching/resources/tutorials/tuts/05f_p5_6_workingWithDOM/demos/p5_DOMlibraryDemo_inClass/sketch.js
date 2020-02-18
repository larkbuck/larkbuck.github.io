
let wordInput;
let definitionInput;
let saveButton;

let definitions = [];

function setup() {
  // noCanvas();
  frameRate(2);
  createCanvas(500, 200);
  background(200, 100, 50);

  wordInput = select("#word");
  definitionInput = select("#definition");

  saveButton = createButton("SAVE");
  saveButton.mousePressed(saveDefinition)
}

function saveDefinition() {
    // console.log("save button pressed");
    definitions.push({word: wordInput.value(), definition: definitionInput.value()})
    createP(wordInput.value() + " is defined as " + definitionInput.value())
    console.log(definitions);
}

function draw() {
    for (let i = 0; i < definitions.length; i++) {
      textSize(34);
      text(definitions[i].word, random(width), random(height));
    }
    // since definitions are being stored to an array... you can also access
    // them in draw loop!
    // enable canvas and do something here.....
}
