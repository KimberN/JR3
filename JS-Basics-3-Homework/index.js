// Create a function that adds up the integers in the following array 
//var numbers = [10,20,30,40,50]. Do not use any array prototype methods, 
//this must be completed using for loops and variables.

 var numbers = [10,20,30,40,50];
 //create a function that adds the array
 function addNums(numArray){
    for(var i=0;i<numArray.length; i++){
    var sum = i + numArray[i];
    }
    return sum
 }

console.log(addNums(numbers));

//using protype method which is hard to understand for me yet--------------------------------------------------------------------------
var numbers = [10,20,30,40,50];
function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}


var sum= getArraySum(numbers);
console.log(sum)

//Create a function that reverses the following array

 var array1 = [0,1,2,3,4,5,6,7,8,9,10];
 function reverseArray(arr) {
   var newArray = [];
   for (var i = arr.length - 1; i >= 0; i--) {
     newArray.push(arr[i]);
   }
   return newArray;
 }
 reverseArray(array1)
//var array1 = [0,1,2,3,4,5,6,7,8,9,10];
//function reverse()*/
