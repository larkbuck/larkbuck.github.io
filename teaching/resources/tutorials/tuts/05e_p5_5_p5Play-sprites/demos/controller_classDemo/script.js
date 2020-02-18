//moving sprite
let eye;

//background;
let ground;

//variables for jump
let gravity = 1;
let jump = 15;

function setup() {
    createCanvas(800, 400);

    // create background
    ground = createSprite(width / 2, height - 50, width, 2);
    ground.shapeColor = color(255);

    //create the sprites
    eye = createSprite(600, 300, 50, 100);
    eye.addAnimation("walking", "images/dude/dude_00000.png", "images/dude/dude_00007.png");
    eye.addAnimation("blinking", "images/dude/dude_00009.png", "images/dude/dude_00060.png");
    eye.addAnimation("jumping", "images/dude/dude_00009.png", "images/dude/dude_00060.png");
    eye.velocity.x = 0;

    //create custom collider for eye bc png size too big
    eye.setCollider("rectangle", 0, 0, 100, 100);

}

function draw() {
    background(0);

    //eye player controls
    //left, right
    if (keyDown("a")) {
        eye.changeAnimation("walking");
        eye.velocity.x = -2;
    } else if (keyDown("d")) {
        eye.changeAnimation("walking");
        eye.velocity.x = 2;
    } else {
        eye.velocity.x = 0;
        eye.changeAnimation("blinking");
    }

    //jump
    eye.velocity.y += gravity;

    if (eye.collide(ground)) {
        eye.velocity.y = 0;
        //eye.changeAnimation("blinking");
    }

    if (keyWentDown("w")) {
        eye.changeAnimation("jumping");
        //eye.animation.rewind(); //not sure why this is in example - sprite animation backwards?
        eye.velocity.y = -jump;
    }

    //check collision boxes
    eye.debug = mouseIsPressed;
    ground.debug = mouseIsPressed;

    //draw the sprite
    drawSprites();
}
