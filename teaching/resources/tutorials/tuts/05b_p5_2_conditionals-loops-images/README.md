
# P5 2: Conditionals, Loops, Images



 ◇─◇──◇────◇────◇────◇────◇────◇─◇─◇
<br />

#### On this page:

1. [Conditionals (if statements)](#-conditionals)
2. [Loops](#-loops)
3. [Display Images](#-display-images)
4. [Displaying GIFs](#-displaying-gifs)
5. [Super Mario Clouds In-Class Exercise](#-super-mario-clouds-in-class-exercise)

---
<br>


# ▼△▼△▼ Conditionals
##### (If statements)

<br>
#### BOOLEAN EXPRESSION

Booleans are expressions that evaluate to true or false.

* 120 equals 120 -> true
* 120 equals 121 -> false
* 120 - 10 equals 110 -> true!


<br>

#### Anatomy of an if statement

    if (something is true) {
      // run this code
    } else {
      // do this
    }


<br>

#### Interaction:

Here is an if statement that checks to see if the mouse is pressed:

    function setup() {
    	createCanvas(500, 500);
    	background(200);
    }

    function draw() {
    	if (mouseIsPressed) {
    		fill(10, 100, 200);
    		ellipse(mouseX, mouseY, 80, 80);
    	} else {
    		fill(255, 100, 50);
    		rectMode(CENTER);
    		rect(mouseX, mouseY, 80, 80);
    	}
    }

<br>

#### Breakpoints

If statements can be chained together with 'else if'

<br>

It looks like this:

    if (something is true) {
      // run this code
    } else if (this is true) {
      // run this code
    } else {
      // do this
    }

<br>

    function setup() {
        createCanvas(500, 500);
        background(200);
        strokeWeight(10);
    }

    function draw() {
      if (mouseX > 400) {
        fill(255, 100, 50);
      } else if (mouseX > 300) {
        fill(200, 100, 100);
        } else if (mouseX > 200) {
            fill(150, 100, 150);
        } else if (mouseX > 100) {
            fill(100, 100, 200);
      } else {
        fill(50, 100, 250);
      }
        // A triangle!
      	triangle(50, 400, 150, 400, 100, 480);
        // A quad!
        quad(30, 100, 300, 450, 350, 150, 200, 50);
        // A text!
    		textSize(16);
        text("CHANGE COLOR WITH BREAKPOINTS", width/2 - 50, 475);
    }

<br>

#### Logical operators:

<br>

    >	greater than

    <	less than

    >=	greater than or equal to

    <=	less than or equal to

    ==	equal

    ===	equal value and equal type

    !=	not equal

    !==	not equal value or not equal type

    &&  both are true

    ||  one or the other are true

<br>

Note when you are CHECKING to see if something is true you use two equals signs. When you are assigning a variable you would use just one.

True or false also applies to whether or not variables exist. A variable that is not defined equates to false, one that is defined is true.


    // one equals sign for defining variables
    let p = 5;
    let q;

    function setup() {
      if (p) {
        console.log("p exists and is " + p);
      }

      // two equals signs for checking if something is true
      if (p == 5) {
        console.log("yup, p is definitely 5")
      }

      if (q) {
        console.log("q exists")
      }

      if (!q) {
        console.log("q does not exists and is " + q)
      }
    }
<br>

**Or statements use pipes ||** <br>
This code would get triggered when the mouse was greater than 400 OR less than 100.


    if (mouseX > 400 || mouseX < 100) {
      fill(255, 100, 50);
    } else {
      fill(50, 100, 250);
    }

<br>

**And statements use two 'ands' &&** <br>
This code gets triggered when the mouse is in the top right corner. Notice you don't need an else statement at the end — JavaScript will default to doing nothing.
<br>

    function setup() {
    	createCanvas(500, 500);
    }

    function draw() {
    	background(200);
    	noStroke();
      if (mouseX > 400 && mouseY > 400) {
        ellipse(100, 100, 100, 100);
        text("that's the spot", 63, 100);
      }
    }

<br>



# ▼△▼△▼ Loops

Notes on operators shorthand

x = x + 4;
is same as:
x += 4;

x = x + 1;
is same as:
x++;

x = x - 1
is same as;
x--;
<br>
<br>

#### while loop

Will loop as long as condition is true! Just make sure there is an exit condition or it will loop for ever.

    let x = 0;

    function setup() {
      createCanvas(500, 500);

    }

    function draw() {
      background(100);
      while (x < width) {
        fill(129, 206, 15);
        rect(x, 100, 10, 10);
        x += 20;
        // line above is same as x = x + 20
      }
    }

<br>

#### for loop

loops a given number of times

      for (let i = 0; i < 10; i++) {
      // code will run 10 times here
      // the variable i increases by 1 each time
      console.log(i)
      }

For loop example: describe what this code will create:
<br>


    function setup() {
      createCanvas(720, 400);
    }

    function draw() {
      background(127);
      noStroke();
      for (var i = 0; i < height; i += 20) {
        fill(129, 206, 15);
        rect(0, i, width, 10);
        fill(255);
        rect(i, 0, 10, height);
      }
    }


# ▼△▼△▼ Display images

[p5 reference for image()](https://p5js.org/reference/#/p5/image)

[p5 example on loading images](https://p5js.org/examples/image-load-and-display-image.html)

    let img;

    function preload() {
      // you will need to change this to the file path to your image
      img = loadImage('filePath/image.png');
    }

    function setup() {
      createCanvas(500, 500);
      background(200);

      // Top-left corner of the img is at (0, 0)
      // Width and height are the img's original width and height
      image(img, 0, 0);

      // If you want to scale the image to 100 x 100 pixels
      // image(img, 0, 0, 100, 100);

      // If you want to scale image by 50%
      // image(img, 10, 10, img.width/2, img.height/2);
    }

Note img.width in references the variable name 'img'.

If your image was named something else it would be:

somethingElse.width/2

# ▼△▼△▼ Displaying GIFs

To display GIFs, you have to install a [separate p5 library](https://github.com/antiboredom/p5.gif.js/tree/master) that supports GIFs. To install, copy the library into your libraries folder and make sure it is linked to in your index.html.

***Note:*** *This library works in Chrome, but might not work in other browsers. If you are going to have many animated sprites, you might want to use the [p5.play library](../10-p5Play-sprites) (though it is little more work to set up).*

# ▼△▼△▼ Super Mario clouds In-class-exercise

Make an image move from one side of screen to the other. You will need to store the image in a variable, then make its location move in the draw loop. Use an **if statement** to check to see if it has reached the end of the screen.

You can use the Super Mario Clouds pngs in the assets folder of this tutorial, or any other image you choose. Save the image inside your p5 sketch folder and make sure it is loading from the correct file path.

If you want, try running your sketch over the full screen, perhaps over some html on your webpage! The zip for a full screen sketch is in the assets folder: [p5-blankExample_fullScreen.zip](assets/p5-blankExample_fullScreen.zip)
