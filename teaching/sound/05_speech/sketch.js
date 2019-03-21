'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html



let talkButton;
let voice;


function setup() {
  talkButton = select('#talk');
  talkButton.mousePressed('startVoice');

  voice = new p5.Speech();
  voice.listVoices();
}

function draw() {

}

function startVoice() {
  voice.speak('hello');
  voice.listVoices();
}
//
// let talkButton;
//
//
// function setup() {
//   talkButton = select('#talk');
//   talkButton.mousePressed('startVoice');
// }
//
// function draw() {
//
// }
