//Implement Fizz Buzz. Loop from 1 to 100. 
//If the number is divisible by both 3 and 5 print "fizzbuzz".
//Otherwise, if the number is divisible by 3, print "fizz"
//if the number is divisible by 5, print "buzz".
//If none of the above are true, print the number. 

//create an array of numbers 1-100
//make empty array
var onetohunArray = [];
   for( var i = 1; i <101; i++){
       //console.log(i); //log the iterator
       var numbers = i; //binding agent
       onetohunArray.push(numbers); //push values to empty array
   }
   //console.log(onetohunArray)

function makeFizzbuzz(array){
   console.log(array)
   for(var m=0; m<= array.length; m++){
         if (array[m] % 3===0){
            console.log ("fizz")
         }else if(array[m] % 5===0){
            console.log ("buzz")
         }else if( array[m] % 5===0 && array[m] % 3===0){
            console.log("fizzbuzz")
         }else{
            console.log(array[m])
      }
   }
}
makeFizzbuzz(onetohunArray);