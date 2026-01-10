// Combination of Task 3 and 4 Experiment
let brushSize; 
let r, g, b;

function setup() {
  createCanvas(600, 400);
  background(15); // Dark aesthetic for visual appeal
  noStroke();
}

function draw() {
  // Task 3: Interaction (Mouse Control)
  // The shape follows the mouse position 
  let targetX = mouseX;
  let targetY = mouseY;

  // Task 4: Randomness Experiment
  // Generate random colors every frame 
  r = random(100, 255);
  g = random(50, 200);
  b = random(200, 255);
  
  // Generate random sizes for the splatter effect 
  brushSize = random(5, 30);

  // Drawing the interaction
  if (mouseIsPressed) {
    fill(r, g, b, 150); // Random color with some transparency
    ellipse(targetX, targetY, brushSize, brushSize); // Random size
  }
  // Google Gemini (2026)
  // Prompt: Generate me a code for UI
  // Modifications: Added texts to interact 
  // Visual UI elements
  drawUI();
}

// Task 3: Keyboard Interaction
function keyPressed() {
  // Press any key to clear the canvas  
  background(15);
}

function drawUI() {
  fill(255);
  textSize(16);
  text("Task 3 & 4: Interaction + Randomness", 20, 30);
  
  textSize(12);
  fill(200);
  text("Click & Drag to paint with random chaos", 20, 50);
  text("Press any key to reset the canvas", 20, 70);
}