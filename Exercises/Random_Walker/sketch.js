let x;
let y;

function setup() {
  createCanvas(300, 300);
  x = width / 2;
  y = height / 2;
  
  // Initial background of the sketch
  background(32);
}

// Adding the 4th value or also known as alpha (25) to the background to create a trail
function draw() {
  background(32, 25);
  
  let nextX = x + random(-20, 20);
  let nextY = y + random(-20, 20);
  
  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);
  
  // Featuring the bright blue stroke in the sketch
  stroke(0, 150, 255);
  strokeWeight(4);
  
  line(x, y, nextX, nextY);
  
  x = nextX;
  y = nextY;
}