// Task 5: Time-Based Animation
// Task 6: Remix a Tutorial 
// Source: "Coding Challenge #134.1: Heart Curve" video by The Coding Train
// URL: https://www.youtube.com/watch?v=oUBAi9xQ2X4
 
let heart = [];
let angle = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  translate(width / 2, height / 2);

  // Task 5: Time-Based Animation
  // Use frameCount to create a pulsing heartbeat effect 
  let pulse = 1 + sin(frameCount * 0.1) * 0.1; 
  
  // Use frameCount to shift the hue over time 
  let r = 200 + sin(frameCount * 0.05) * 55;
  let g = 100 + cos(frameCount * 0.05) * 50;
  let b = 150;

  // Modification 1: The visual style of the heart
  // Instead of a single line, we use a glowing gradient stroke
  stroke(r, g, b);
  strokeWeight(4);
  noFill();

  // Mathematical Heart Formula
  // Source: The Coding Train
  let x = 16 * pow(sin(angle), 3);
  let y = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));
  
  // Scale the coordinates by 10 and apply the pulse variable 
  heart.push(createVector(x * 10 * pulse, y * 10 * pulse));

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  // Second Modification: Behavior of the heart
  // The heart continuously draws itself and then resets to create a loop
  if (angle > TWO_PI) {
    heart = [];
    angle = 0;
  } else {
    angle += 0.1;
  }

  // Text
  resetMatrix(); // Reset translation for text positioning
  fill(255);
  noStroke();
  textSize(18);
  text("Task 5 & 6: Time-Based Animation & Remix Tutorial", 20, 30);
  textSize(12);
  text("Original Tutorial: The Coding Train", 20, 50);
  text("Remixed with: Pulsing Animation & Color Shifts", 20, 70);
}