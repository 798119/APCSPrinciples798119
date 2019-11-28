//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins

var nums;
//setup help
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x<1500; x++){
    nums[x] = Math.floor(random(20));
    }

    }

function draw() {

function swap(nums, a, b){ //the swap function
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
}

function bubbleSort(nums){
var t1=millis();
  console.log(nums);
  for(var i = nums.length -1; i > 0 ; i --){
    for (var j = 0 ; j < nums.length; j ++){// creates limit
      if (nums[j] < nums[j-1]){
        swap(nums, j, j-1);
        }
      }
    }
    var t2=millis();
      console.log(nums); //puts on a console so eaasy to read
    }


function median (nums){

if (nums.length % 2 === 0){ //check even
 var half = nums.length/2;
 var med = nums[half] + nums[half+1];
 var medEven = med/2;
 console.log(medEven);
  }
else if(nums.length %2 ===1){ //check odd
  var half = nums.length/2;
  var medOdd = nums[half];
  console.log(medOdd);
  }
}
