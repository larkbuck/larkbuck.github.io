"use strict";





let breakoutGameInstance = function(p) { // p could be any variable name

  p.canvas;

  p.setup = function() {
    p.canvas = p.createCanvas(300, 300);
    p.canvas.parent("canvasDiv");
    // p.canvas.class("gameCanvas");
    // p.canvas.id("breakoutGameCanvas");
    // p.canvas.style("z-index: 5;");

    p.frameRate(30);
    p.background(0);


  };

  p.draw = function() {

  };

};

let breakoutGame = new p5(breakoutGameInstance, 'canvasDiv');

// let breakoutGameCanvas = document.querySelector("#breakoutGameCanvas");
// breakoutGameCanvas.style.visibility = "hidden";
