//  Calvin Kapral
// 	8/15/19
//  This is correct

var Balls=[]
var bigballs;
// var gameStart;
var paddle;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(2);
loadPaddle();

}
function draw(){
//   if(gameState===1){
// startGame();
// }else if(gameState===2){
// playGame();
// }else if(gameState===3){
// endGame();
// }
  background(30,30,30,207);
  runBalls();
  runPaddle();
//  runTriangles()
}

function loadBalls(n){
  for(var i = 0; i < n ; i++){
    Balls[i] = new Ball(random(width),0, random(-.8,.8), random(-8,8));

  }
}
function runBalls(){
  for(var i =0;i < Balls.length; i++){
    Balls[i].run();
  }
}
  function loadPaddle(){
    paddle=new Paddle(500,500);

  }
  function runPaddle(){
  paddle.run();
  }
