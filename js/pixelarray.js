////// Pixel Array //////
//
// var pixelarray = [R, G, B, A]
// first index is red value for 1st pixel, 2nd index green
// value for 1st pixel, etc
// so each pixel takes up 4 spots of array

// 6'x5' image with 60 pixels - length of array is 240 (60*4)

// to find the starting index in the pixel array of a certain spots
// x + (y * width) * 4
// so spot (4, 2) - 4 + 2 * 6 = 16; 16 * 4


function setup() {
  createCanvas(320, 240);
  // if using a retina display, this will make each pixel = 1 pixel
  pixelDensity(1);
}

function draw() {
  background(51);

  // tell p5 we are working with pixels
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index+0] = x;
      pixels[index+1] = random(200);
      pixels[index+2] = y;
      pixels[index+3] = 255;
    }
  }


  // make a pink pixel!
  // pixels[4] = 255;
  // pixels[5] = 0;
  // pixels[6] = 255;
  // pixels[7] = 255;

  // done changing pixels
  updatePixels();
}
