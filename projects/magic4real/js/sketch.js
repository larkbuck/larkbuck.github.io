// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/


// ideas
// light candle... scroll down = ascii drawings

'use strict';



let spellInput;
let spell;
let castSpellButton;
let thisManyTimes = 1;
let thisManyTimesSpan;
let incantationVoice = new p5.Speech(); // new P5.Speech object
let lightCandleButton;
let candleBurning = false;
let speakButton;
let volSlider;
let rateSlider;
let speaking = false;
let numTimesP;


function setup() {
  // touch events to fix mobile bug
  // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

  // speak controls
  lightCandleButton = select("#lightCandleButton");
  lightCandleButton.mousePressed(lightCandle);

  spellInput = select("#spellInput");
  castSpellButton = select("#castSpellButton");
  castSpellButton.mousePressed(saveSpell);

  numTimesP = select("#numTimesP");
  thisManyTimesSpan = select("#thisManyTimesSpan");

  // speak controls
  speakButton = select("#speakButton");
  speakButton.mousePressed(toggleIncantation);


  // incantationVoice.listVoices();
  // incantationVoice.setVoice("Ellen");
  incantationVoice.setVoice("Karen");
  // incantationVoice.setVoice("Victoria");
  incantationVoice.setPitch(.6);
  // incantationVoice.setRate(.7);
  incantationVoice.setRate(1.5);
  // incantationVoice.setVoice("Samantha");
  // incantationVoice.setVoice("Veena");


  // for testing incantation voice upon page load
  // incantationVoice.speak("this is my wonderful voice, i can cast all the best spells");


  volSlider = select("#volSlider");
  volSlider.mouseReleased(setVolume);

  rateSlider = select("#rateSlider");
  rateSlider.mouseReleased(setRate);


  // long css shadow
  let shadowString = '';
  let shadowColor = 33;

  for (let i = 0; i < 200; i++) {
    shadowColor++;
    shadowString += `${i}px ${i}px rgba(${255 - shadowColor}, ${shadowColor}, 128, ${((200 - i) / 800)}), `;
    // shadowString += i + 'px ' + i + 'px rgba(128,55,128,' + ((200 - i) / 800) + '), ';
  }
  shadowString = shadowString.substr(0, shadowString.length - 2);

  // hm somereason query selector not working....
  // document.querySelectorAll(".longShadow").style.textShadow = shadowString;
  let longShadowEls = document.querySelectorAll(".longShadow");

  for (let i = 0; i < longShadowEls.length; i++) {
    longShadowEls[i].style.textShadow = shadowString;
  }
  // document.querySelector("#longShadow").style.textShadow = shadowstring;
  // document.getElementById("longShadow").setAttribute("style", "text-shadow: " + shadowString);

// trying to make magic for loop
  // ofMagicAscending(0, 1, 10, function() {
  //   console.log(0);
  // });
}

// function ofMagicAscending(_initial, _iterator, _condition, _magicLoop) {
//   for (let iterator = _initial; this += _iterator; this < _condition) {
//     _magicLoop();
//   }
// }


function draw() {
  if (spell) {
    numTimesP.style("visibility", "visible");
    let smallSpell = createP(`${spell} **888**`);
    smallSpell.parent("#spellLeftCol");
    let bigSpell = createElement("h1", spell);
    bigSpell.parent("#spellRightCol");
    thisManyTimesSpan.html(`${thisManyTimes}`);
    // thisManyTimesSpan.innerHTML = `${thisManyTimes}`;
    thisManyTimes++;
  }

  if (speaking) {
    incantationVoice.speak(spellInput.value());
  } else {
    incantationVoice.stop();
  }

  if (candleBurning) {
    // console.log("candle burning")
  } else {
    // console.log("candle still")
  }

}

function lightCandle() {
  if (candleBurning == false) {
    candleBurning = true;
    lightCandleButton.html("blow out candle");
  } else {
    candleBurning = false;
    lightCandleButton.html("light candle");
  }
}

function saveSpell() {

  if (!spellInput.value()) {
    alert("sorry, i'm not sure what spell to cast. write something in the input field and we can go from there.")
  } else {
    spell = spellInput.value();
  }
}

function toggleIncantation() {
  if (!spellInput.value()) {
    alert("what would you like me to incantate for you? write it in the input field and i'll get started asap")
    // if (!spell) {
    //   alert("it would work better if you cast the spell first.")
  } else {
    if (speaking == false) {
      speaking = true;
      speakButton.html("stop incantation");
    } else {
      speaking = false;
      speakButton.html("start incantation");
    }
  }
}

function setVolume() {
  incantationVoice.setVolume(volSlider.value() / 100.);
}

function setRate() {
  incantationVoice.stop();
  incantationVoice.setRate(rateSlider.value() / 100.);
  incantationVoice.speak(spellInput.value());

}


// ideas for incantations:
// may the hundred gazillion bits lighting up the internet ...
// propel
//may i be strong may i be resilient may my footsteps echo with joy and radiate out into the world
// I believe in my ability to
//


// fire Code
// https://editor.p5js.org/runemadsen/sketches/S1qav1gJG
// https://kampeki-factory.blogspot.com/2018/03/set-your-browser-on-fire-with-p5js.html
