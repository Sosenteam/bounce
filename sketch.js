let dvdImage;
let x, y; // Position of the image
let xSpeed, ySpeed; // Speed of the image
let currentColor; // Store the current color

function preload() {
  // Load the image
  dvdImage = loadImage('newnew.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start the image at a random position
  x = random(dvdImage.width/2);
  y = random(0);
  
  // Set random speeds for x and y
  xSpeed = random(2, 5);
  ySpeed = random(2, 5);
//   xSpeed =0;
//   ySpeed =0;
  
  // Initialize the current color
  currentColor = color(random(255), random(255), random(255));
}

function draw() {
  background(0); // Clear the screen with a black background
  
  // Apply color filter to the image
  tint(currentColor);
  
  // Draw the DVD logo
  image(dvdImage, x, y);
  
  // Update the position
  x += xSpeed;
  y += ySpeed;
  
  // Check for collision with walls and bounce
  if (x <= 0 || x + dvdImage.width >= width) {
    xSpeed *= -1; // Reverse direction on x-axis
    changeColor(); // Change color on bounce
  }
  
  if (y <= 0 || y + dvdImage.height >= height) {
    ySpeed *= -1; // Reverse direction on y-axis
    changeColor(); // Change color on bounce
  }
}

function changeColor() {
  // Generate a new random color
  currentColor = color(random(150,255), random(150,255), random(150,255));
}
