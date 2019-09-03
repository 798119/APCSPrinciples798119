//  Calvin Kapral
// 	8/15/19
//  This is correct

var BallSack=[]
var bigballs;

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
  bigballs = new Ball (random(width), random(height), random(-1,1), random(-1,1),-1,50,50);
  for(var i = 0; i < n ; i++){
    BallSack[i] = new Ball(random(width), random(height), random(-2,2), random(-2,2),i,20,20);

  }
}
function runBalls(){
  for(var i =0; i < Balls.length; i++){
    BallSack[i].run();
  }
  bigballs.run();
}
