
# P5 Working with the DOM



 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />

#### On this page:

1. Run sketch full screen
2. random()
3. Perlin noise: noise()
4. Timers: setInterval() and setTimeout()
5. Immediately Invoked Function Expressions (IIFE)

---
<br>

## ▼△▼△▼ Run sketch full screen

Before getting into the DOM, you might want to run your sketch on the full browser screen, on top or behind the HTML. There is another zip of an empty p5 folder in the [06_introToProgramming_p5-Basics assets folder](../06_introToProgramming_p5-Basics/assets). This has a few changes to the CSS and Canvas size to make the sketch full screen and running in the background.
<br>

First, size canvas to the whole browser window:

    function setup() {
      createCanvas(windowWidth, windowHeight);
    }

    function draw() {
    	// clear();
    	ellipse(mouseX, mouseY, 100);
    }

***Note:*** *adding clear() to the draw loop will clear each frame, erasing object trails.*


Add CSS for canvas running full screen: this sets canvas to be aligned to top right of screen. Position absolute will stop it from scrolling.


    canvas {
      margin: auto;
      top: 0;
      left: 0;
      position: absolute;
    }

<br>

If you want to run your sketch BEHIND the HTML, not on top of it, change your canvas' z-index.

    canvas {
      margin: auto;
      top: 0;
      left: 0;
      position: absolute;
      z-index: -1;
    }
<br>


## ▼△▼△▼ Random()

random() is a function built into p5 that generates random numbers, or selects random items from an array. Check out the [p5 documentation](https://p5js.org/reference/#/p5/random)
for more detailed examples.

random(255) will return a random number from 0-255

random(50, 100) will return a random number from 50-100


random(arrayName) will return a random item from an array

random() alone will return a random decimal from 0-1.


***Note:*** *If you want whole numbers, not decimal points, add the math function floor():

floor(random(255)) will return whole integers from 0-255.*

<br>


## ▼△▼△▼ Perlin noise

Perlin noise is a more complex, harmonic, and 'natural'-seeming randomness generator.

You can generate Perlin noise in p5 with the function:

    noise(x);

Note it is different than random(): the return value will always be between 0 and 1

Check out the [documentation](https://p5js.org/reference/#/p5/noise) for more information.

<br>

## ▼△▼△▼ Timers: setInterval() and setTimeout()

These are Javascript timers. They allow you to schedule timed executions of functions.

Coding Train tutorials:
* [setTimeout()](https://www.youtube.com/watch?v=nGfTjA8qNDA)
* [setInterval()](https://www.youtube.com/watch?v=CqDqHiamRHA)



[setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp) will let you schedule a function to execute once in the future. It takes two arguments: the name of the function you want executed (NOT followed by parenthesis, just the name of the function), and the time delay in milliseconds.

It looks like:

    setTimeout(callBackFunction, time);

<br>

In addition to the timeOut() code, it is likely you will also be writing the callback function.

    // alertFunc() will trigger in 3 seconds    
    setTimeout(alertFunc, 3000);


    // this is the function   
    function alertFunc() {
        alert("Hello!");
    }


[SetInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)* will program a function to execute at an interval of a given milliseconds, over and over.

    // this will trigger EVERY 3 seconds
    setInterval(alertFunc, 3000);

    function alertFunc() {
        alert("Hello!");
    }

<br>

## ▼△▼△▼ Immediately Invoked Function Expressions (IIFE)

In the [W3Schools documentation](https://www.w3schools.com/jsref/met_win_setinterval.asp) for SetInterval(), they use an *immediately invoked* function instead of a callback.

The same code above can be written like this using an Immediately Invoked Function Expression (IIFE):

    setInterval(function(){ alert("Hello"); }, 3000);

This can be a little confusing at first. Immediate invoked functions are not named and defined, they execute immediately and are not stored in memory. In this second example, there is no function named alertFunc() -- its code is moved into setInterval() and executed once the timer ends.

The syntax is similar to declaring a function with a name, except there is no name! just parenthesis after the word 'function' and the code to execute.

Check out [this short tutorial](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html) for a more comprehensive (but still confusing) explanation as to why this is useful.

You will mostly see them in callbacks, .forEach() loops on arrays, or as a variable definition.
