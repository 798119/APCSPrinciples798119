//  Calvin Kapral
// 	8/15/19
//  This is correct
// var bars=[];
// var numBars, barWidth;
//
// function setup() {
//   var cnv = createCanvas(800, 800);
//   cnv.position((windowWidth-width)/2, 30);
// background(235);
//
// barWidth = 10;
// numBars = width/barWidth;
// loadBars(numBars);
// runBars();
// myBubbleSort();
// }
//
// function draw(){
//   background (20,30,150);
//   framerate(1);
//   runBars();
//
// }
//
//
// function loadbars(nums){
//   for(var i=0; i<num; i++){
//     var j=int(random(i,30));
//     bars[i]= new Bar(25*i,800-(25*i),25,(25*i))
//
//   }
//
// }
var bars=[];

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
    cnv.position((windowWidth-width)/2,30);
      background(0);
          loadBars();
            frameRate(1);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function draw(){
  bubblesort();
  frameRate(10);
}
function move(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(120);
    for(var i=0; i<bars.length; i++){
      bars[i].run();
  }
}
function bubblesort(){
  //for (var i=bars.length-1;i>0; i--){
    for (var j=0; j<bars.length-1; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        move();
      }
    }
  }
//}



function loadBars(){
  for (var x=0; x<36; x++){
    var w=int(random(1.1,32));
    bars[x]= new Bar(22*x,800-(22*w),22,(22*w))
  }
}

function swap(list,a,b){
  var temp=list[a];
    list[a]=list[b];
      list[b]=temp;
}
