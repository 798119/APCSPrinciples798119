//  Calvin Kapral
// 	8/15/19
//  This is correct
var bars=[];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(235);
loadbars();
for(var i=0; i< bars.length; i++){
  bars[i].render();
}
}


function loadbars(){
  for(var i=0; i<30; i++){
    var j=int(random(i,30));
    bars[i]= new Bar(25*i,800-(25*i),25,(25*i))

  }

}
