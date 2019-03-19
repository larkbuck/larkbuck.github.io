// p5 documentation
// https://p5js.org/examples/sound-load-and-play-sound.html

// coding train tutorial (more detailed)
// https://www.youtube.com/watch?v=Pn1g1wjxl_0


//get rid of preload

let song;
let playButton;
let volumeSlider;

function preload() {
  song = loadSound('../assets/music/astronomy-self-texture.mp3');
}

function setup() {
  playButton = select("#playButton");
  playButton.mousePressed(playSong);
  volumeSlider = select("#volumeSlider");

}

function draw() {
  song.setVolume(volumeSlider.value() / 10);
}

function playSong() {
  if (song.isPlaying()) {
    song.stop();
    playButton.html("PLAY")
  } else {
    song.play();
    playButton.html("STOP");
  }
}
