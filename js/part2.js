////// Part 2 - 2D noise //////

// var xoff1 = 0;
// var xoff2 = 10000

var inc = 0.01;

// ---- SETUP FUNCTION ---- //
function setup() {
  createCanvas(200, 200);
}

// ---- DRAW FUNCTION ---- //
function draw() {
  // pixel array in HTML5 canvas
  // how to access each indiv pixels
  // and change colors of each pixel 
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      pixels[index+0] = 255; //red value
      pixels[index+1] = 0; //green value
      pixels[index+2] = 0; //blue value
      pixels[index+3] = 255; //alpha value


    }
  }
  updatePixels();

}
