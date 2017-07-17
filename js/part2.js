////// Part 2 - 2D noise //////

// var xoff1 = 0;
// var xoff2 = 10000

var inc = 0.01;

// ---- SETUP FUNCTION ---- //
function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

// ---- DRAW FUNCTION ---- //
function draw() {
  var yoff = 0;
  // pixel array in HTML5 canvas
  // how to access each indiv pixels
  // and change colors of each pixel
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index+0] = r; //red value
      pixels[index+1] = r; //green value
      pixels[index+2] = r; //blue value
      pixels[index+3] = 255 ; //alpha value
      xoff += inc;

    }
    yoff += inc;
  }
  updatePixels();
  // noLoop();
  // noiseDetail(4, .5); - changes detail and falloff
}
