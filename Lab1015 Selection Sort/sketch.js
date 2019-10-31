//  Calvin Kapral
// 	8/15/19
//  This is correct
//  The setup function function is called once when your program begins
function setup() {
  for (var i = 0; i < arr.length - 1; i++)
         {
             var index = i;
             for (var j = i + 1; j < arr.length; j++)
     if (arr[j] < arr[index])
        index = j;
       		  //  Swapping Code
             var smallerNumber = arr[index];
             arr[index] = arr[i];
             arr[i] = smallerNumber;
         }
}
