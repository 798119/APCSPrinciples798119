//  Calvin Kapral
// 	8/15/19
//  This is correct

var Balls=[]
var bigballs;
// var gameStart;
var paddle;
var gameState = 3;
var mode = "Eazy";
var lives = 10;
var score = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(2);
loadPaddle();

}

function draw(){
  if(gameState===1){
startGame();
}else if(gameState===2){
playGame();
}else if(gameState===3){
endGame();
}
  background(30,30,30,207);
  runBalls();
  runPaddle();
//  runTriangles()
}

function startGame(){
  background(40,40,40);
  //title
  textSize(60);
  fill(250);
  text("PaddleGame",250,200);
  //dificulty setting
  textSize(24);
  fill(0,60,250);
  rect(200,600,70,40);
  fill(255);
  text("Eazy",215,625);
  fill(250,0,250);
  rect(350,600,70,40);
  fill(255);
  text("Medium",365,625);
  fill(255,0,0);
  rect(500,600,70,40);
  fill(255);
  text("Challenge",515,625);
  //dificulty
  if(mouseIsPressed &&
    mouseX>200 && mouseX<280 &&
    mouseY>600 && mouseY<640){
      mode = "Eazy";
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>350 && mouseX<430 &&
    mouseY>600 && mouseY<640){
      mode = "Medium";
      gameState = 2;
    }
  if(mouseIsPressed &&
    mouseX>500 && mouseX<580 &&
    mouseY>600 && mouseY<640){
      mode = "Challenge";
      gameState = 2;
    }

}

//play game screen
function playGame(){
  background(0);
  textSize(20);
  fill(255);
  text("lives = " + lives,20,20);
  text("score = " + score,200,20);
  runBalls();
  runPaddle();
}
//end game scren
function endGame(){
  background(50,50,50);
  //title
  textSize(50);
  fill(255);
  text("PaddleBall",270,200);
  //new game?
  textSize(30);
  fill(250,0,250);
  rect(190,600,190,50);
  fill(255);
  text("New Game",210,635);
  fill(255,0,0);
  rect(440,600,80,50);
  fill(255);
  text("Quit",450,635);

  if(mouseIsPressed &&
    mouseX>190 && mouseX<380 &&
    mouseY>600 && mouseY<650){
      gameState = 1;
      lives = 10;
      score = 0;
    }else if(mouseIsPressed &&
      mouseX>440 && mouseX<520 &&
      mouseY>600 && mouseY<650){
        textSize(50);
        fill(255);
        text("Leave A Review",160,400);
      }

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
  paddle=new Paddle(500,500, 200,30);

  }

function runPaddle(){
  paddle.run();
  }
