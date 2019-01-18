// by Lark VCR 2019
// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/
// candle & background sketches adapted from:
// https://editor.p5js.org/runemadsen/sketches/S1qav1gJG
// & https://kampeki-factory.blogspot.com/2018/03/set-your-browser-on-fire-with-p5js.html


'use strict';



let spellInput;
let spell;
let spellCast = false;
let saveSpellButton;
let castSpellButton;
let thisManyTimes = 1;
let thisManyTimesSpan;
let incantationVoice = new p5.Speech(); // new P5.Speech object
let lightCandleButton;
let candleBurning = false;
let muteButton;
let volSlider;
let rateSlider;
let speaking = false;
let sayFooOnceBool = true;
let numTimesP;
let castCircleDiv;

let castCircleRow_0;
let castCircleRow_1;
let castCircleRow_2;
let castCircleRow_3;
let castCircleRow_4;
let castCircleRow_5;
let castCircleRow_6;
let castCircleRow_7;
let saveEast;
let saveSouth;
let saveWest;
let saveNorth;
let saveAbove;
let saveBelow;
let saveCenter;
let saveDigital;
let castCircleButton;
let welcomeDiv;
let castSpellDiv;
let spellDiv;
let spellBodyDiv;
let printSpellDiv;


function setup() {
  // touch events to fix mobile bug
  // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

  // rows & divs
  castCircleDiv = document.querySelector("#castCircleDiv");
  castCircleRow_0 = document.querySelector("#castCircleRow_0");
  castCircleRow_1 = document.querySelector("#castCircleRow_1");
  castCircleRow_2 = document.querySelector("#castCircleRow_2");
  castCircleRow_3 = document.querySelector("#castCircleRow_3");
  castCircleRow_4 = document.querySelector("#castCircleRow_4");
  castCircleRow_5 = document.querySelector("#castCircleRow_5");
  castCircleRow_6 = document.querySelector("#castCircleRow_6");
  castCircleRow_7 = document.querySelector("#castCircleRow_7");
  welcomeDiv = document.querySelector("#welcomeDiv");
  castSpellDiv = document.querySelector("#castSpellDiv");
  spellDiv = document.querySelector("#spellDiv");
  spellBodyDiv = document.querySelector("#spellBodyDiv");
  printSpellDiv = document.querySelector("#printSpellDiv");
  printSpellDiv = document.querySelector("#printSpellDiv");
  saveEast = document.querySelector("#saveEast");


  // buttons
  lightCandleButton = select("#lightCandleButton");
  lightCandleButton.mousePressed(lightCandle);

  saveEast = select("#saveEast");
  saveEast.mousePressed(function() {
    castCircleRow_1.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveSouth = select("#saveSouth");
  saveSouth.mousePressed(function() {
    castCircleRow_2.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveWest = select("#saveWest");
  saveWest.mousePressed(function() {
    castCircleRow_3.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveNorth = select("#saveNorth");
  saveNorth.mousePressed(function() {
    castCircleRow_4.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveAbove = select("#saveAbove");
  saveAbove.mousePressed(function() {
    castCircleRow_5.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveBelow = select("#saveBelow");
  saveBelow.mousePressed(function() {
    castCircleRow_6.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveCenter = select("#saveCenter");
  saveCenter.mousePressed(function() {
    castCircleRow_7.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  saveDigital = select("#saveDigital");
  saveDigital.mousePressed(function() {
    castCircleButtonDiv.style.visibility = "visible";
    // castCircleRow_1.style.display = "block";
  });

  castCircleButton = select("#castCircleButton");
  castCircleButton.mousePressed(function() {
    welcomeDiv.style.visibility = "visible";
    setTimeout(function() {
      castSpellDiv.style.visibility = "visible";
    }, 1000);
    // castCircleRow_1.style.display = "block";
  });

  spellInput = select("#spellInput");

  saveSpellButton = select("#saveSpellButton");
  saveSpellButton.mousePressed(saveSpell);

  castSpellButton = select("#castSpellButton");
  castSpellButton.mousePressed(castSpell);

  numTimesP = select("#numTimesP");
  thisManyTimesSpan = select("#thisManyTimesSpan");



  // // speak controls
  // speakButton = select("#speakButton");
  // speakButton.mousePressed(toggleIncantation);


  // incantationVoice.listVoices();
  incantationVoice.setVoice("Karen");
  incantationVoice.setPitch(.6);
  incantationVoice.setRate(1.5);


  // for testing incantation voice upon page load
  // incantationVoice.speak("this is my wonderful voice, i can cast all the best spells");


  volSlider = select("#volSlider");
  volSlider.mouseReleased(setVolume);

  muteButton = select("#muteButton");
  muteButton.mousePressed(muteIncantation);

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


}



function draw() {
  if (spellCast) {
    numTimesP.style("visibility", "visible");
    let smallSpell = createP(`${spell}`);
    smallSpell.parent("#printSpellDiv");
    // let bigSpell = createElement("h1", spell);
    // bigSpell.parent("#spellRightCol");
    thisManyTimesSpan.html(`${thisManyTimes}`);
    // thisManyTimesSpan.innerHTML = `${thisManyTimes}`;
    thisManyTimes++;
    printSpellDiv.scrollTop++;
    // printSpellDiv.scrollTop = printSpellDiv.scrollHeight - printSpellDiv.clientHeight;
  }

  if (speaking) {
    if (sayFooOnceBool) {
      incantationVoice.setRate(.8);
      incantationVoice.speak("for let foo 0 foo bar foo 1");
      // incantationVoice.speak("for, let foo 0; foo bar; foo 1");
      incantationVoice.setRate(rateSlider.value() / 100.);
      sayFooOnceBool = false;
    } else {
      incantationVoice.speak(spellInput.value());
    }
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
    // castCircleDiv.style.display = "block";
    castCircleDiv.style.visibility = "visible";
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
    spellDiv.style.visibility = "visible";
    spell = spellInput.value();
  }
}


function castSpell() {
  if (!spellInput.value()) {
    alert("sorry, i'm not sure what spell to cast. write something in the input field and we can go from there.")
  } else {
    spellBodyDiv.style.visibility = "visible";
    spellCast = true;
    speaking = true;
  }
}

// function toggleIncantation() {
//   if (!spellInput.value()) {
//     alert("what would you like me to incantate for you? write it in the input field and i'll get started asap")
//     // if (!spell) {
//     //   alert("it would work better if you cast the spell first.")
//   } else {
//     if (speaking == false) {
//       speaking = true;
//       speakButton.html("stop incantation");
//     } else {
//       speaking = false;
//       speakButton.html("start incantation");
//     }
//   }
// }

function muteIncantation() {
  if (speaking == false) {
    speaking = true;

  } else {
    speaking = false;

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
