//  Calvin Kapral
// 	8/15/19
//  This is correct
var Ships= [];
var bigball;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadObjects();
}


function draw() {
  background(30,30,30,20);
  RunObjects();
  // runbigballs();
// runTriangles()

}

function loadObjects(){
  background(30,30,20,20)
  bigball = new Ball (random(-1,1), random(-1,1) ,-1);
  for(var i = 0; i < 100 ; i++){
  Ships[i] = new Ship(random(width), random(height), 3,3,i);

  }
}
function RunObjects(){
  background(30,30,30,20)
  bigball.Run();
  for(var i =0; i < Ships.length; i++){
    Ships[i].run();
  }
}
