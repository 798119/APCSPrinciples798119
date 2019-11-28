//  Calvin Kapral
// 	8/15/19
//  This is correct

//put setup code here
// var gameState = 1;
var startGame= 1;
var gameState = 0;
var score=0;
function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);
      frameRate(15); //speed

snake = new Snake (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20,0,0,20)
//randomizes snake
food = new Food (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20)
} //randomizes food

function draw(){
  if (gameState ===0){
    textSize(60);
    fill(250,100,0);
    text("SNAKE GAME", 180,50)
    fill(0,250,0);
    rect(150,400,20,20);
    fill(0,0,200);
    rect(600,400,20,20);
    textSize(40);
    fill(50,100,200);
    text("Click Big Button to Play", 190,260);
    fill(0,60,250);
    rect(350,600,80,80);
    fill(0,250,0);
    textSize(20);
    text("Snake", 130,350);
    fill(0,0,200);
    textSize(20);
    text("Food", 585,350);
    if(mouseIsPressed &&
      mouseX>350 && mouseX<430 &&
      mouseY>600 && mouseY<680){
        gameState=1;
  }
  }
  if (gameState === 1){
  background(0,0,0);
  runFood();
  runSnake();
  textSize(25);
  fill(50,100,200);
  score = snake.body.length; //creates score
  text("Score: "+score, 50,50);
}
  if (gameState===2){
    background(0,0,0);
    textSize(100);
    fill(250,100,100);
    text("You Lose", 200,300 );

  }
}



  function runFood(){
food.run();
  }


  function runSnake(){
snake.run();
  }
