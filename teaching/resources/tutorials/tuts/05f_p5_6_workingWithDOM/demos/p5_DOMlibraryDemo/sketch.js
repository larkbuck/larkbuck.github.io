
let saveButton;
let definitions = [];
let wordInput;
let definitionInput;

function setup() {
  noCanvas();
  // createCanvas(500, 200);
  // background(200, 100, 50);

  // create button and save it in a global variable
  saveButton = createButton("SAVE");

  // function 'addDefinition' is a call back in mouseClicked -- it is executed
  // even though we don't see the () after it.
  saveButton.mouseClicked(addDefinition);

  // select the HTML input field for word and store in wordInput variable
  // to select, use the HTML id (definied in index.html) with a hashtag in front
  wordInput = select("#word");

  // same with the definition
  definitionInput = select("#definition");

}

function addDefinition() {
    // access the text from the fields with the method .value()
    // push the word and defition to the definitions array
    definitions.push({word: wordInput.value(), definition: definitionInput.value()});
    console.log(definitions);

    // create a HTML p element with the word and definition
    createP(wordInput.value() + " is surf for " + definitionInput.value());
}

function draw() {
    // since definitions are being stored to an array... you can also access
    // them in draw loop!
    // enable canvas and do something here..... 
}
