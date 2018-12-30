let wishInput;
let wish;
let wishButton;
let thisManyTimes = 1;
let thisManyTimesSpan;

function setup() {
  wishInput = select("#wishInput");
  wishButton = select("#wishButton");
  wishButton.mousePressed(printWish);
  thisManyTimesSpan = document.querySelector("#thisManyTimes");
  console.log(thisManyTimesSpan);
}

function printWish(){
  wish = wishInput.value();
  console.log(wish);


}

function draw() {
  if (wish) {
    let smallWish = createP(wish);
    smallWish.parent("#wishLeftCol");
    let bigWish = createElement("h1", wish);
    bigWish.parent("#wishRightCol");
    thisManyTimesSpan.innerHTML = `${thisManyTimes}`;
    thisManyTimes++;
  }


}
