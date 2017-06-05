
// var xoff1 = 0;
// var xoff2 = 10000

var inc = 0.01;
var start = 0;

// ---- SETUP FUNCTION ---- //
function setup() {
  createCanvas(400, 400);
}

// ---- DRAW FUNCTION ---- //
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255);

    // //a way to make letter forms look like handwriting
    // var n = map(noise(xoff), 0, 1, -50, 50);
    // var s = map(sin(xoff), -1, 1, 0, height); // can switch last two values with above
    // var y = s + n;



    // // random vs perlin - this is random
    // var y = random(height);

    // // perlin noise - gets a particular y value based on the x offset
    var y = noise(xoff) * height;

    // // sin wave
    // var y = height / 2 + sin(xoff) * height / 2;

    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;

  // noLoop();


  // // var x = random(width);

  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);
  //
  // xoff1  += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24);
}
