let roster = [{
  firstName: "Lark",
  lastName: "Alder",
  favoriteColor: "chartreuse"
}, {
  firstName: "Nala",
  lastName: "Coso",
  favoriteColor: "dog treat color"
}, {
  firstName: "sadf",
  lastName: "love",
  favoriteColor: "poop"
}, {
  firstName: "joyous",
  lastName: "pain",
  favoriteColor: "elation"
}, ];

let index;

function setup() {

  createCanvas(600, 600);
  background(40, 200, 80);



// // weird how this console.log doesn't include the spliced item !!
//   console.log(roster);
//   index = Math.floor(random(roster.length));
//   text(roster[index].firstName, 100, 100);
//   roster.splice(index, 1);
//
//   console.log(roster);

// weird how this console.log doesn't include the spliced item !!

// recursive timeer
let timer = setTimeout(function animate(){
  console.log("doing it")
setTimeout(animate, 1000);

}, 1000)

  console.log(roster);
  index = Math.floor(random(roster.length));
  text(roster[index].firstName, 100, 100);
  roster.splice(index, 1);

  console.log(roster);

}

function draw() {

}

// function mousePressed() {
//
//   roster.unshift({firstName: "new student"});
//
//   console.log(roster);
// }
