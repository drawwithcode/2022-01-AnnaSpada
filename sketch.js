//Inspired to Composizione n.9 by Mauro Reggiani 
//https://api.pananti.com/api/lotto/immagine/52780/0/600.jpg

//canvas variables
const Wcanvas = 850; 
const Hcanvas = 780;  

//squares variables
let L = 110;  //square side
let l = 21;   //rectangle constant side 

let x1 = 50;  //x-coordinate of the rectangles in the first column
let x2 = 200; //x-coordinate of the rectangles in the second column
let x3 = 356; //x-coordinate of the rectangles in the third column
let x4 = 547; //x-coordinate of the rectangles in the fourth column
let x5 = 700; //x-coordinate of the rectangles in the fifth column

let y2 = 42;  //y-coordinate of the rectangles in the second row
let y3 = 228; //y-coordinate of the rectangles in third row
let y4 = 365; //y-coordinate of the rectangles in the fourth row 
let y5 = 497; //y-coordinate of the rectangles in the fifth row 
let y6 = 644; //y-coordinate of the rectangles in the sisth row

//color variables
let colorA = 0;
let colorB = 0;
let colorC = 0;
let colorD = 0;

//canvas dimension, number of frames to be displayed every second and current mode definition for angles
function setup() {
  createCanvas(Wcanvas, Hcanvas);
  angleMode(DEGREES);
  frameRate(30); 

//variables take a random value between 0 and 255 
  colorA = random(255); 
  colorB = random(255); 
  colorC = random(255); 
  colorD = random(255); 
}


function draw() {
  background("black");

//background on the top  
fill("lightgrey") 
rect(0, 0, Wcanvas, 178);

//green stripe
fill("#78ac10")
rect(0, 175, Wcanvas, l);  
  
//color, dimension and position of the squares

//first row 
fill(colorD);
rect(0, 0, 180, l);
rect(236, 0, 153, l);
rect(478, 0, 130, l);
rect(670, 0, 180, l);

//second row 
fill(colorC);
rect(x1, y2, L, L);
rect(x2, y2, L, L);
rect(x3, y2, L, L);
rect(x4, y2, L, L);
rect(x5, y2, Wcanvas-x5, L);

//third row 
fill(colorA);
rect(x1, y3, L, L);
rect(x2, y3, 134, L);
rect(640, y3, 160, L);

//fourth row
fill(colorB);
rect(26, y4, 207, L);
rect(715, y4, L, L);

//fifth row
fill(colorC);
rect(x1, y5, L, L);
rect(x2, y5, L, L);
rect(x5, y5, L, L);

//sixth row
fill(colorD);
rect(x1, y6, L, L);
rect(x2, y6, L, L);
rect(x3, y6, L, L);
rect(x4, y6, L, L);
rect(x5, y6, L, L);

//set framecount to change the color of the squares
if (frameCount % 60 == 0) {
  colorA = color(random(255), random(255), random(255));
  colorB = color(random(255), random(255), random(255));
  colorC = color(random(255), random(255), random(255));
  colorD = color(random(255), random(255), random(255));
}

//yellow rectangles 
noStroke();
fill("#d1ab25");
rect(640, y3, 30, L);
rect(180, y4, 54, L);

//big rotating square 
push()
let mycolor = lerpColor(color("black"), color("lightgrey"), frameCount / 150);
fill(mycolor);
translate (482,434);
rotate(mouseX)
rectMode(CENTER)
rect(0, 0, 305, 305);
pop()

}



