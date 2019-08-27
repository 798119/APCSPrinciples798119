//  Calvin Kapral
// 	8/15/19
//  This is correct

var x, y, a, b, p;


function setup() {
  x=200
  y=200
  a=230
  b=410
  p=565
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  fill(0, 0, 0);


}

//  The draw function is called @ 30 fps
function draw() {
  x=x+1
  a=a+1
fill (200,0,0)
rect(x,y,60,55)
fill (23,4,143)
ellipse(a,b, 150, 300)
fill(200,0,0)
rect(x,p,60,55)
}
