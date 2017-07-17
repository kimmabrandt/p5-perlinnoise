////// Part 3 - Flow Field //////

// instead of pixels, we will be using VECTORS
// vectors - ie arrows/directions.
// then particles can be put into the flow field, and they will
// follow the vectors

// TODO: make sliders

var inc = 0.1;
// scale - how many pixels per vector
var scl = 10;
var cols, rows;

var zoff = 0;

var particles = [];

var flowfield;



// ---- SETUP FUNCTION ---- //
function setup() {
  createCanvas(800, 600);
  // floor gets rid of decimal place
  cols = floor(width / scl);
  rows = floor(height / scl);

  // flowfield has as many spots as there are cols and rows
  flowfield = new Array(cols*rows);

  for (var i = 0; i < 2500; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

// ---- DRAW FUNCTION ---- //
function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * cols);
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4
      var v = p5.Vector.fromAngle(angle); //create a vector from an angle
      v.setMag(1);
      flowfield[index] = v; //all calculated vectors will be stored in flowfield arr
      xoff += inc;
      stroke(0, 50); //draw line

      // // draw the vectors
      // push();
      // translate(x * scl, y * scl); // rotate line according to heading/angle
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
    zoff += .0003;
  }
    for (var i = 0; i < particles.length; i++){
      particles[i].follow(flowfield); // each particle find vector in flowfield
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }


  // noLoop();
}
