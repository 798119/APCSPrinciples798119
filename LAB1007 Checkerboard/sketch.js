//  Calvin Kapral
// 	8/15/19
//  This is correct
var square []
//variables within code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(5,5,5);
fill(10,10,10);
loadsquare();

//Square For Loop


for (var i=0; i< squares.length; i++){
    squares[i].render();
  }

}
function loadsquare(){

 this.clr(255,255,255)


}
