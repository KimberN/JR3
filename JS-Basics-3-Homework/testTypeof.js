//testing a typeof function
function testFunction(number) {
   // console.log(typeof number);
   if (typeof number === "number") {
     console.log("is number");
   } else {
     return "Need to pass in a number to function.";
   }
 }
 console.log(testFunction("hello"))
 testFunction(2);
 console.log(testFunction("hello"));



function testFunction(data) {
   console.log(typeof data);
   if (typeof data === data) {
     console.log("data is a " + data);
   } else {
     return "Need to pass in a number to function.";
   }
 }
 
 testFunction(2);
 console.log(testFunction("hello"));