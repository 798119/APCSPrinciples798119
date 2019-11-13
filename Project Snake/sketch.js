//  Calvin Kapral
// 	8/15/19
//  This is correct

//put setup code here



function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);
      frameRate(10);

snake = new Snake (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20,20)
// food= new Food(Math.floor(Math.random((0,40)*20)), Math.floor(Math.random((0,40)*20)));
food = new Food (Math.floor(Math.random()*26)*20,Math.floor(Math.random()*26)*20)
  }








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
}
