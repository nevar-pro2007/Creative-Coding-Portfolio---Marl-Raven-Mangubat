// Task 1: Variables for Shape Control
let shapeSize = 60;        // Controls shape size
let posX = 200;            // Controls position x
let posY = 200;            // Controls position y
let mainCol;               // Controls color

function setup() {
  createCanvas(600, 400);
  
  // Task 1: Change variable every time sketch runs 
  mainCol = color(random(100, 255), random(100, 200), 200); 
  
  noLoop(); // Drawing for the pattern
}

function draw() {
  background(245);
  
  // Task 2: Repetition with Loops
  // Using a for loop to create a grid pattern
  // This ensures at least 10 repeated shapes
  for (let x = 30; x < width; x += 60) {
    for (let y = 50; y < height; y += 80) {
      
      // Even spacing using calculations
      stroke(200);
      strokeWeight(1);
      line(x, y, x + 20, y + 20); // Shape 1: Line
      
      fill(220, 230, 240);
      noStroke();
      rect(x, y, 15, 15);         // Shape 2: Rectangle
    }
  }

  // Task 1: Drawing the Shapes using Variables
  // Large Circle 
  fill(mainCol);
  noStroke();
  ellipse(posX, posY, shapeSize, shapeSize); 
  
  // Google Gemini (2026)
  // Prompt: Generate me a rectangle
  // Decorative Rectangle 
  fill(50, 50, 50, 150);
  rect(posX - 40, posY + 40, shapeSize * 1.5, 10); 
  

  // Visual Text 
  fill(50);
  textSize(18);
  textFont('Times New Roman');
  text("The VariaLoop Artwork", 20, 30);
  
  textSize(12);
  text("A generative pattern using the mix of variables and loops", 20, 50);
}
