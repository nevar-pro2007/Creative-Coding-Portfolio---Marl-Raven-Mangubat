function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  
  // For loading fonts
  textFont('Times New Roman');
  fill(50);
  textSize(18);
  textAlign(CENTER, CENTER);
  
  // Drawing the text
  text("Welcomne to Future Business and Technology Institute for Higher Training!", width / 2, height /2);
  
  // Adding secondary text
  textSize(12);
  text("This is where your future starts. Create your own success with us.", width / 2, height /2 + 50);
}