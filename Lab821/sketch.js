//  Calvin Kapral
// 	8/15/19
//  This is correct

var c1, c2, c3, c4;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30)
c1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
c2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
c3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
c4 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
}


function draw() {
  background(30,30,30);
c1.run();
c2.run();
c3.run();
c4.run();
}
