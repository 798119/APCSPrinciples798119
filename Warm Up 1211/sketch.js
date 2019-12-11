//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins

var nums = [];
//setup help
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNums();

    }

function draw() {

}

function loadNums(){
    for(var i = 0; i<11; i++){
      nums[i]= random(1,100);
    }
  }
  function bubblesort(){
      for(var i = nums.length -1; i > 0 ; i --){
        for (var j = 0 ; j < nums.length; j ++){// creates limit
          if (nums[j] < nums[j-1]){
            swap(nums, j, j-1);
            }
          }
        }
      }

    function logNumber(){

      console.log("nums");
    }

    function findAvg(){
      var sum = 0;
        for(var i=0; i < nums.length; i++){
          sum=sum+nums[i];

        }
          console.log("avg" + sum/nums.length);
        }
