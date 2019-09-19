//  Calvin Kapral
// 	8/15/19
//  This is correct

var Balls=[]
var bigballs;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(2000);

}


function draw() {
  background(30,30,30,20);
  runBalls();
//  runTriangles()
}

function loadBalls(n){
  bigballs = new Ball (width/2, height/2, random(-1,1), random(-1,1) ,-1);
  for(var i = 0; i < n ; i++){
  Balls[i] = new Ball(random(width), random(height) 3,3,i);

  }
}
function runBalls(){
  bigballs.run();
  for(var i =0; i < Balls.length; i++){
    Balls[i].run();
  }
}
