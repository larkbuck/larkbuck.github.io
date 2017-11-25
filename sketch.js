//homepage game by lark
//https://owenroberts.github.io/mmp310/week12/play.html
//http://creative-coding.decontextualize.com/making-games-with-p5-play/


var larkPlatform;
var tagalong;
var tagalongImg;
var folder1;
var folder1img;
var folder2;
var folder2img;
var folder3;
var folder3img;
var screenshot;
var screenshotImg;
var trash;
var trashImg;
var roboto; //font

//folders group
var folders;

//for moving things
var angle = 0;
var dragObjectIndex = null;
var trashCounter = 0;
var endY = -800;
var endFill = 1;
var endFillAngle = 0;




function preload() {
    //preload sprites
    //platform = loadImage('images/platform_medium.png');
    folder1img = loadImage('assets/homePage/folder_icons_green.png');
    folder2img = loadImage('assets/homePage/folder_icons_purple.png');
    folder3img = loadImage('assets/homePage/folder_icons_chartreuse.png');
    trashImg = loadImage('assets/homePage/trashempty.png');
    screenshotImg = loadImage('assets/homePage/folder_icons_Screenshot_1.png');
    tagalongImg = loadImage('assets/homePage/folder_icons_tagalong.png');
    roboto = loadFont('assets/homePage/Roboto-Regular.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth-300, 800);
    canvas.position(0,0);
    //canvas.parent("#canvas");


    //empty folders group
    //folders = new Group();

    larkPlatform = select("#lark");
    //larkPlatform.position(50, 20);


    // create desktop sprites
    trash = createSprite(width - 100, height - 75);
    // folder1 = createSprite(width - 200, 100);
    // folder2 = createSprite(width - 230, 250);
    // folder3 = createSprite(width - 200, 300);
    screenshot = createSprite(width/7, height - 100);
    folder1 = createSprite(width/4 + 50, height - 100);
    folder2 = createSprite(width/4, height - 300);
    folder3 = createSprite(width/5, height - 250);
    trash.addImage(trashImg);
    screenshot.addImage(screenshotImg);
    folder1.addImage(folder1img);
    folder2.addImage(folder2img);
    folder3.addImage(folder3img);
    screenshot.setCollider("rectangle", 0, 0, 100, 100);
    folder1.setCollider("rectangle", 0, 0, 100, 100);
    folder2.setCollider("rectangle", 0, 0, 100, 100);
    folder3.setCollider("rectangle", 0, 0, 100, 100);
    trash.setCollider("rectangle", 0, 0, 100, 100);

    //create folders group
    // folders.add(folder1);
    // folders.add(folder2);
    // folders.add(folder3);
    // folders.add(screenshot);

    //create folders array
    folders = [folder1, folder2, folder3, screenshot];
    // create tagalong sprite
    tagalong = createSprite(width, height, 100, 75);
    tagalong.addImage(tagalongImg);

    textFont(roboto);

    // line 987 of p5.play: this.mouseActive If set to true sprite will track its mouse state.
    //  the properties mouseIsPressed and mouseIsOver will be updated. Auto sets to true if
    //function defined for onMousePressed / other mouseProperty
    folders.forEach(function(folder, index) {
        folder.mouseActive = true;
        //folder.onMousePressed = function() {}
    })
}

function draw() {
    //background(233, 102, 127);
    clear();


    //trash move (sin pattern)
    var trashX = map(sin(angle), -1, 1, width - 280, width - 200);
    trash.position.x = trashX;
    angle += 0.02;

    //tagalong follows mouse
    tagalong.velocity.x = ((mouseX - 70) - tagalong.position.x) * 0.1;
    tagalong.velocity.y = ((mouseY + 30) - tagalong.position.y) * 0.1;

    if (tagalong.position.x > width - 50) {
        tagalong.position.x = width - 50;
    }
    if (tagalong.position.x < 50) {
        tagalong.position.x = 50;
    }
    if (tagalong.position.y > height - 40) {
        tagalong.position.y = height - 40;
    }
    if (tagalong.position.y < 40) {
        tagalong.position.y = 40;
    }

    //when folder is over trash but
    //it hasn't dropped yet (that's in mouse released function)
    for (i = 0; i < folders.length; i++) {
        if (folders[i] && folders[i].overlap(trash)) {
            trash.scale = 1.2;
        }
    }

    //you won!
    if (trashCounter == 4) {
        textSize(200);
        endFill = map(sin(endFillAngle), -1, 1, 0, 200);
        fill(color(100, 255 - endFill, endFill));
        text("flush bloop bloop ", 50, endY, width - 50, height);

        if(endY<=height + 100){
          endY+=3;
        endFillAngle += .02;
        }
        else if (endY > height + 100) {
            endY = -800;
        }
    }

    //draw text & sprites
    textSize(14);
    fill(20);
    textAlign(CENTER);
    drawSprite(trash);
    drawSprite(folder1);
    drawSprite(screenshot);
    if (!screenshot.removed) {
        // textStyle(BOLD);
        text("wanna play? clean desktop pls \n (browsers only)", screenshot.position.x - 70, screenshot.position.y + 50, 140, 100);
    }
    if (!folder1.removed) {
        text("mismatched socks", folder1.position.x - 70, folder1.position.y + 40, 140, 100);
    }
    drawSprite(folder2);
    if (!folder2.removed) {
        text("the material world", folder2.position.x - 70, folder2.position.y + 40, 140, 100);
    }
    drawSprite(folder3);
    if (!folder3.removed) {
        text("outdated dongles", folder3.position.x - 70, folder3.position.y + 40, 140, 100);
    }
    drawSprite(tagalong);

    //check collision boxes
    // tagalong.debug = mouseIsPressed;
    // folder1.debug = mouseIsPressed;
    // folder2.debug = mouseIsPressed;
    // folder3.debug = mouseIsPressed;
    // screenshot.debug = mouseIsPressed;
    // trash.debug = mouseIsPressed;

}

function mouseDragged() {
    //console.log('dragged');

    for (var i = 0; i < folders.length; i++) {
        if (folders[i] && folders[i].mouseIsPressed) {
            dragObjectIndex = (dragObjectIndex === null) ? i : dragObjectIndex;
        }
    }

    if (dragObjectIndex !== null && folders[dragObjectIndex]) {
        folders[dragObjectIndex].position.x = mouseX;
        folders[dragObjectIndex].position.y = mouseY;
    }


}

function mouseReleased() {
    dragObjectIndex = null;

    //drop item in trash
    for (i = 0; i < folders.length; i++) {
        if (folders[i] && folders[i].overlap(trash)) {
            folders[i].remove();
            //console.log(folders);
            folders[i] = undefined;
            trash.scale = 1;
            trashCounter++;
        }
    }
}

// function touchMoved() {
//     //console.log('dragged');
//     for (var i = 0; i < folders.length; i++) {
//         if (folders[i] && folders[i].mouseIsPressed) {
//             dragObjectIndex = (dragObjectIndex === null) ? i : dragObjectIndex;
//         }
//     }
//
//     if (dragObjectIndex !== null && folders[dragObjectIndex]) {
//         folders[dragObjectIndex].position.x = mouseX;
//         folders[dragObjectIndex].position.y = mouseY;
//     }
// }
