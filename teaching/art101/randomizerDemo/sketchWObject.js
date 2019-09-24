let roster = [{
  firstName: "Lark",
  lastName: "Alder",
  favoriteColor: "chartreuse"
}, {
  firstName: "Nala",
  lastName: "Coso",
  favoriteColor: "dog treat color"
},];

function setup() {

  createCanvas(600, 600);
  background(40, 200, 80);


  // strange - the console.log includes the unshifted array...

  console.log(roster);

  console.log(roster[0]);

  console.log(roster[0].firstName);


}

function draw() {

}

// function mousePressed() {
//
//   roster.unshift({firstName: "new student"});
//
//   console.log(roster);
// }
