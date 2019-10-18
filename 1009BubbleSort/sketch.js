//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins
var list=[1,3,2,9,7];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
background(5,5,5);
fill(10,10,10);
}
for (var i = arr.length; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
// Swapping Code ++++++++++++++
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
// Swapping Code ++++++++++++++
     }
   }
