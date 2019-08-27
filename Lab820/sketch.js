//  Calvin Kapral
// 	8/15/19
//  This is correct

var X, Y;
var speedX, speedY;
speedX=10
function setup() {
  X=200;
  Y=400;
  speedX = random(-5.0, 5.0)
  speedY=random(-5.0,5.0)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30)



}

//  The draw function is called @ 30 fps
function draw() {
background(30, 30, 30)
fill (200,0,0)

if (X>0){ speedX=-1*speedX }

if (X<width) {speedX=-speedX}

if (Y>0) {speedY=-1*speedY}

if (Y<width) {speedY=-speedY}
X=X+speedX
Y=Y+speedY
fill (255,0,0)
ellipse (X,Y,50,50)
fill (0,255,0)
ellipse(X,Y,40,40)
fill(0,0,255)
ellipse(X,Y,30,30)
}
