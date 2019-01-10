// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/

let candleBurning = false;
let wishInput;
let wish;
let wishButton;
let thisManyTimes = 1;
let thisManyTimesSpan;
let incantationVoice = new p5.Speech(); // new P5.Speech object
let speakButton;
let volSlider;
let speaking = false


function setup() {
  // speak controls
  lightCandleButton = select("#lightCandleButton");
  lightCandleButton.mousePressed(lightCandle);

  wishInput = select("#wishInput");
  wishButton = select("#wishButton");
  wishButton.mousePressed(saveWish);
  thisManyTimesSpan = document.querySelector("#thisManyTimes");

  // speak controls
  speakButton = select("#speakButton");
  speakButton.mousePressed(toggleIncantation);


  incantationVoice.listVoices();
  // incantationVoice.setVoice("Ellen");
  incantationVoice.setVoice("Karen");
  // incantationVoice.setVoice("Victoria");
  incantationVoice.setPitch(.6);
  incantationVoice.setRate(.7);
  // incantationVoice.setVoice("Samantha");
  // incantationVoice.setVoice("Veena");


  // incantationVoice.speak("this is my wonderful voice, i can cast all the best spells");


  volSlider = select("#volSlider");
  volSlider.mouseReleased(setVolume);


}



function draw() {
  if (wish) {
    let smallWish = createP(wish);
    smallWish.parent("#wishLeftCol");
    let bigWish = createElement("h1", wish);
    bigWish.parent("#wishRightCol");
    thisManyTimesSpan.innerHTML = `${thisManyTimes}`;
    thisManyTimes++;
  }

  if (speaking) {
    incantationVoice.speak(wishInput.value());
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

function saveWish() {

  if (!wishInput.value()) {
    alert("sorry, i'm not sure what spell to cast.")
  } else {
    wish = wishInput.value();
  }
}

function toggleIncantation() {
  // if (!wishInput.value()) {
  //   alert("sorry, i am not sure what to incantate.")
  if (!wish) {
    alert("it would work better if you cast the spell first.")
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
