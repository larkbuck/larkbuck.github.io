// allow user to interact with artists statement while mouse highlights indiv
// words

var statement

function setup() {
    noCanvas();
    statement = select("#statement");
}

function newText() {
    // create variable for string of text entered
    var s = statement.value();
    // split string by anything not letter or number
    // capture what it is in a group so the non-letters
    // will be added to array as group1 and you don't
    // need to add spaces
    var words = s.split(/(\W+)/);
    for (var i = 0; i < words.length; i++) {
        // span is like paragraph but no line breaks
        // put span in output area of html for css styling
        // so name a variable and parent them to output id
        var span = createSpan(words[i]);
        span.parent(output);
        // write reg exp to test if it's a word or space
        if (!/\W+/.test(words[i])) {
            // style in JS!
            // span.style('background-color', "F0F");
            // Can make random
            // span.style('background-color', color(random(255),50,50));
            // BUT HOW YOU INTERACT IS TO GIVE SPAN AN EVENT LISTENER
            span.mouseOver(highlight);
        }
    }
}

function highlight() {
    // note you might need to use JS closure! for now simple p5
    // html is a dom element function in p5 that returns the contents
    // of that element
    console.log(this.html())
    // console.log(this); //p5 automatically binds element to this
    // console.log('hover'); //test hover
    // var s = this.html().replace(/(\w+)/, "peace") //but Dan stopped! doing
    // this bc already in "this"
    this.html('in a straight world, i would f dan schiffman');
    var c = color(random(255), random(255), random(255))
    this.style("background-color", c)
}


// below is replacer from previous tut
function replacer(match, group1, group2) {
    // console.log(match);
    // console.log(group1);
    // console.log(group2);
    // instead of writing out different arguments, you can use javascripts
    // arguments array
    console.log(arguments);
    return match;
}
