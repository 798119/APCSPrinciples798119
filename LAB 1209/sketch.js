//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins

var Balls = [];
//setup help
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(20);

    }

function draw() {

  runBalls();
  }

function swap(balls, a, b){ //the swap function
    var temp = balls[a];
    balls[a] = balls[b];
    balls[b] = temp;
      }

      function bubbleSort(balls){
        console.log(balls);
        for(var i = balls.clr -1; i > 0 ; i --){
          for (var j = 0 ; j < balls.clr; j ++){// creates limit
            if (balls[j] < balls[j-1]){
              swap(balls, j, j-1);
              }
            }
          }
        }


    function loadBalls(n){
      for(var i = 0; i < n ; i++){
        Balls[i] = new Ball(i*35+75, 400);
    // for loop to load balls
      }
    }

    function runBalls(){
      for(var i =0;i < Balls.length; i++){
        Balls[i].run();
    //for loop to run balls
      }
    }
