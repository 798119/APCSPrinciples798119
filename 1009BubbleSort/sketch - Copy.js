//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins

var temp[];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
}

swap(list, i, j){
  var    temp = list[i];
      list[i] = list[j]
      list[j] = temp;


}

for (var i=nums.length-1;i >0; i--){
   for (var j = 0; j < i; j++){
     if (nums[j] > nums[j+1]) {
		   swap(nums, j, j+1)
     }
   }
}
