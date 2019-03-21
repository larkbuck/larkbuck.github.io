'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html



let talkButton;
let voice = new p5.Speech();;


function setup() {
  talkButton = select('#talk');
  talkButton.mousePressed(startVoice);


  voice.listVoices();
  voice.setVoice("Karen");
  voice.setPitch(.6);
  voice.setRate(1.5);
}

function draw() {

}

function startVoice() {
  voice.speak('hello');
}
