let dogs = ["cutie", "angel", "stardust"];


function setup() {

  createCanvas(600, 600);
  background(40, 200, 80);


  // strange - the console.log includes the unshifted array...

  console.log(dogs);

  console.log(dogs[0]);


  // hard code in
  // dogs[3] = "tigerlily"


  // methods
  dogs.push("sam");

  // dogs.pop();

  // dogs.shift();

  // dogs.unshift("nala")

  // play with it in console


console.log(dogs.length);

dogs[dogs.length] = "new dog";

// splice = can squeeze things in middle of array (not just beginning and end)

// AND you can delete from inside array

console.log(dogs);

dogs.splice(2, 1); // removes one element from array at location 2

console.log(dogs);

// ?? how do you choose random element in array, and then remove it?
// question - can you call random(array) AND delete that element?

// different ways to approach. Start with storing index in variable  1) use that variable to access item in array, then splice it   2) splicing returns spliced object

console.log(random(dogs)); // random element from array - but we don't have it's index?

console.log(random(5));

console.log(Math.floor(random(5)));

let spliceIndex = Math.floor(random(dogs.length));

console.log(dogs);

console.log(spliceIndex);

console.log(dogs[spliceIndex]);

console.log(dogs);


//

text(dogs[spliceIndex], 50, 50);
dogs.splice(spliceIndex, 1);

console.log(dogs);

}

function draw() {

}

// function mousePressed() {
//
//   roster.unshift({firstName: "new student"});
//
//   console.log(roster);
// }
