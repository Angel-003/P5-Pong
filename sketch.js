let cor_1;
let cor_2;
let circleX;
let circleY;

function setup() {
  createCanvas(400, 400); // (widght, height)
  background(100, 0, 0);
  cor_1 = color(random(0, 250), random(0, 250), random(0, 250), 50);
  cor_2 = color(random(0, 250), random(0, 250), random(0, 250));
  circleX = [0, 0, 0, 0];
  circleY = [random(height), random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor_1)
  stroke(cor_2)
  
  // console.log(circleX.lenght)
  for(let contador in circleX) {
    // console.log(contador)
    circle(circleX[contador], circleY[contador], 50);
    circleX[contador] += random(3, 10);
    circleY[contador] += random(-5, 5);
    
    if(circleX[contador] >= width) {
      circleX[contador] = 0;
      circleY[contador] = random(height)
    }
  }
  
  if(mouseIsPressed) {
    cor_1 = color(random(0, 250), random(0, 250), random(0, 250), 50);
    cor_2 = color(random(0, 250), random(0, 250), random(0, 250));  
  }
}