function setup() {
  createCanvas(500, 500);
  background(200);
  frameRate(250);
  fill(EraseC.color)
  rect(EraseC.x, EraseC.y, EraseC.w, EraseC.h)
  fill(BlackC.color)
  rect(BlackC.x, BlackC.y, BlackC.w, BlackC.h)
  fill(255, 0, 0)
  rect(50, 490, 25, 10);
  fill(0, 255, 0)
  rect(75, 490, 25, 10);
}

function draw() {

}



function mouseDragged() {

  if (mouseX < 501 && mouseY < 490 - EraseC.weight / 2) {

    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

var PencilChoice = function(color, x, y, w, h,weight) {

  this.color = color;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.weight = weight;
};
var EraseChoice = function(color, x, y, w, h, weight) {

  this.color = color;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.weight = weight;
}

var BlackC = {

  color: (0),
  x: 25,
  y: 490,
  w: 25,
  h: 10,
  weight: 1,
}


var redPencilChoice = new PencilChoice ("red", 50, 490, 25, 10, 1)
function mouseClicked() {
  if (mouseX > EraseC.x && mouseX < EraseC.w && mouseY > EraseC.y) {
    stroke(EraseC.color);
    strokeWeight(EraseC.weight)
  } else if (mouseX < BlackC.w + BlackC.x && mouseX > BlackC.x && mouseY > BlackC.y) {
    stroke(BlackC.color);
    strokeWeight(BlackC.weight);
  } else if (mouseX < redPencilChoice.w + redPencilChoice.x && mouseX > redPencilChoice.x && mouseY > redPencilChoice.y) {
    console.log (redPencilChoice.color);
    stroke(redPencilChoice.color);
    strokeWeight(redPencilChoice.weight);
  } else if (mouseX < 101 && mouseX > 76 && mouseY > 490) {
    stroke(0, 255, 0);
    strokeWeight(1);
  }
}
