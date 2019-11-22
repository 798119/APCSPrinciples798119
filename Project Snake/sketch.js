//  Calvin Kapral
// 	8/15/19
//  This is correct

//put setup code here
// var gameState = 1;


function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);
      frameRate(15);

snake = new Snake (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20,0,0,20,//COLOR HERE)
// food= new Food(Math.floor(Math.random((0,40)*20)), Math.floor(Math.random((0,40)*20)));
food = new Food (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20)
  }

function draw(){
  background(0,0,0)
  runFood();
  runSnake();

}

// function checkEdges(){
//   //checks edges
//     if(snake.head.x<0||snake.head.x>width||snake.head.y<0 || snake.head.y>height){
//       gameState = 3
//     }
//   //checks snake hitting snake
//     for(var i = snake.body.length-1; i >= 0; i--)
//       if(snake.head.x === snake.body[i].x &&
//         snake.head.y === snake.body[i].y){
//           gameState = 3
//         }
// }





  function loadFood(){

  }

  function runFood(){
food.run();
  }

  function loadSnake(){

  }

  function runSnake(){
snake.run();
  }
