let x, y; // Position of the ball
let xSpeed, ySpeed; // Velocity of the ball
let radius = 25;
let gravity = 0.5;
let friction = 0.8; // Indicates the energy lost when the ball hits the floor

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = 5;
  ySpeed = 2;
}

function draw() {
  background(50);
  
  // To draw the ball
  fill(0, 200, 255);
  noStroke();
  ellipse(x, y, radius * 2);
  
  // Applying gravity to the ball
  ySpeed += gravity;
  x += xSpeed;
  y += ySpeed;
  
  // Bouncing logic (particularly to the floor and walls)
  if (x + radius > width || x - radius < 0) {
    xSpeed *= -1; // Reverses the horizontal direction
  }
  
  if (y + radius > height) {
    y = height - radius;
    ySpeed *= -friction; // Reverses and slows down the ball
  }
  
  // Adding the shake simulation of the ball by mouse movement
  if (movedX > 50 || movedY > 50) {
    shuffleBall();
  }
}
  
  
function shuffleBall() {
  xSpeed = random(-15, 15);
  ySpeed = random(-20, 20);
}

// Adding interaction via mouse movement
function mousePressed() {
    shuffleBall();
}