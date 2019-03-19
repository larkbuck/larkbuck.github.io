// p5 documentation
// https://p5js.org/examples/sound-load-and-play-sound.html

// coding train tutorial (more detailed)
// https://www.youtube.com/watch?v=Pn1g1wjxl_0




let song;

function preload() {
  song = loadSound('../assets/music/astronomy-self-texture.mp3');
}

function setup() {
  // song.loop();
}

function draw() {

}

function mousePressed (){
  song.setVolume(.3);
  song.loop();
}
