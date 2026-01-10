// Task 1: Variables for Control
// Variables define the starting state of our composition 
let shapeSize = 50;      // Controls dimensions 
let shapeColor;          // Controls visual style 
let thickness = 2;       // Controls line weight

function setup() {
  createCanvas(600, 400);
  // Initializing color variable [cite: 8]
  shapeColor = color(100, 150, 200);
  background(240);
}

function draw() {
  // To allow painting
  // Google Gemini (2026)
  // Prompt: Generate me a code for interactive art
  // No modifications made
  // Task 3: Interaction (Mouse Controls Position & Color)
  // Using mouseX and mouseY to drive variables 
  let posX = mouseX; // Position controlled by mouse
  let posY = mouseY;
  
  // Mapping mouse position to color for Task 3 
  let r = map(mouseX, 0, width, 100, 255);
  let g = map(mouseY, 0, height, 100, 200);
  let b = 200;
  shapeColor = color(r, g, b, 100);

  // Task 1: Drawing Shapes with Variables
  if (mouseIsPressed) {
    stroke(0, 50);
    strokeWeight(thickness);
    
    // Shape 1: Line 
    line(posX, posY, width / 2, height / 2);
    
    fill(shapeColor);
    noStroke();
    
    // Shape 2: Circle 
    ellipse(posX, posY, shapeSize, shapeSize);
    
    // Shape 3: Rectangle 
    rect(posX - 20, posY - 20, shapeSize / 2, shapeSize / 2);
  }

  // Task 3: Interaction (Keyboard)
  // If a key is pressed, the size variable increases
  if (keyIsPressed) {
    shapeSize = random(20, 100); // Extension: Variable change [cite: 10]
  }

  // Static Text for UI
  drawUI();
}

function drawUI() {
  // UI Overlay
  fill(255, 200);
  rect(0, 0, 260, 90);
  
  fill(50);
  noStroke();
  textSize(16);
  text("Task 1 & 3: Interaction Canvas", 20, 30);
  
  textSize(12);
  text("Click & Drag: Draw shapes (Pos/Color)", 20, 50);
  text("Hold Any Key: Randomize size", 20, 70);
}