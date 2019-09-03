//  Calvin Kapral
// 	8/15/19
//  This is correct

var Balls=[]
var mainBall;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(200);

}


function draw() {
  background(30,30,30,207);
  runBalls();
//  runTriangles()
}

function loadBalls(n){
  for(var i = 0; i < n ; i++){
    Balls[i] = new Ball(random(width), random(height), random(-.8,.8), random(-8,8));

  }
}
function runBalls(){
  for(var i =0;i < Balls.length; i++){
    Balls[i].run();
  }
}
