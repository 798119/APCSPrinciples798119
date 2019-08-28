//  Calvin Kapral
// 	8/15/19
//  This is correct

var balls=[]
var triangles= []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(30,30,30);
loadBalls(150);
loadtriangles(100);
}


function draw() {
  background(30,30,30);
  runBalls();
//  runTriangles()
}

function loadBalls(n){
  for(var i = 0; i < n ; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8));

  }
}
function runBalls(){
  for(var i =0;i < balls.length; i++){
    balls[i].run();
  }
}

function loadtriangles(n){
  for (var i=0; i < n; i++){
    triangles[i] = new Triangle(random(width), random(height), random(100), random(-8,8), random(-8,8),random(-8,8))
  }
}

function runTriangles(){
  for(var i =0;i < triangles.length; i++){
    triangles[i].run();
}
}
