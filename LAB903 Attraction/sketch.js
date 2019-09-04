//  Calvin Kapral
// 	8/15/19
//  This is correct

var Ball=[]
var bigballs;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(200);

}


function draw() {
  background(30,30,30,20);
  runBall();
//  runTriangles()
}

function loadBalls(n){
  bigballs = new Ball (width/2, height/2, 50,50,50, 50);
  for(var i = 0; i < n ; i++){
  bigballs[i] = new Ball(width/2, height/2, 50,50,50, 50);

  }
}
function runBalls(){
  for(var i =0; i < Balls.length; i++){
    bigballs[i].run();
  }
  Ball[i].run();
}
