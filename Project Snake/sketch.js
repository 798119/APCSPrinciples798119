//  Calvin Kapral
// 	8/15/19
//  This is correct

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);

snake= new Snake(20,20,20,20)
  }

  function draw(){
    background (0,0,0)
    runFood();
    runSnake();

  }

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
