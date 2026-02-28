function setup() {
  createCanvas(400, 400); 
  angleMode(DEGREES); // For math
}

function draw() {
  background(220);
  
  push(); // To save the current state
  translate(200, 200); // It moves the origin to the center
  rotate(frameCount); // The sketch will rotate based on the framecount
  
  fill(100, 150, 250); 
  rectMode(CENTER);
  rect(0, 0, 100, 100); // It draws at the new origin
  pop(); // Restores the state so the other things wont rotate
}