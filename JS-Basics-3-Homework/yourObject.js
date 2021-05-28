// YourObjectIn this small project, we will be creating an objectthat signifies you. 
// 1.Declare a new variable called yourName that storesan object literal that represents you!
// It should have all of the following keys: name, age,alive, and homeTown. 
// Give each ofthose keys an appropriate value.
// 2.Practice using dot notation to access each value onyour object.
var yourName = {
   name:"kim",
   alive:true,
   homeTown:"Glenwook"
}
//practice dot notation
console.log(yourName.name)
//add an object
yourName["currentLocation"]="Boulder";
console.log(yourName);

yourName.name="Tobias";
console.log(yourName.name)
// Reassigning & Adding
//1.Go back to the object about you, and add a property of currentLocation to your object. 
// Assign it to a string of any coffee shop location you (used to) frequent.
var shops={"moes","joes","flos"};
// 2.Now try re-assigning the age property to a different number.
// 3.Remember to call the object or the property on thelast line of the file
//  (or in theconsole), and run the code to verify the outcome!