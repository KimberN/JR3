//Get a little more practice. Use this object:
 var employee ={
    id:245345, 
    name:'megan cain',
    team:4,
    payTier:7
 }
//  1.How many property/value pairs does the employee object have? 4
//  2.What value is associated with the property of payTier? 7
//  3.What is the property name, or label, for the value "Megan Cain"? name
//  4.Write your own object assigned to a variable named friend. 
//  The friend should have a name property and an appropriate value.
var friend={
   name:'cedric',
}
//  5.Write another object assigned to a variable named artist.
//  The artist should have at least three properties.
var namedArtist={
   name:'Andy Warhol',
   place:'New York',
   Genre:'Pop Art'
}

//  Dot Notation PracticeWe’ll use the same employee object from the previous practice section.
//  1.Write the syntax that will access the value 4:
//  2.Write the syntax that will access the value "MeganCain":
//  3.What will happen if you call employee.age? Why? error because it's not defined

console.log(employee.team);
console.log(employee.name);
console.log(employee.age);//undefined

// 1.Write the syntax that will access the value "FrontEnd":
// 2.Write the syntax that will access the value true:
// 3.What will happen if you call francy.module? Why?

var student ={
   name:'joan',
   program:'front end',
   module:5,
   alum:true
}
console.log(student.program);
console.log(student.alum);
//console.log(joan.module) //joan is not defined

// We’ll use a similar student object from the previous practice section.
//  ● Write the syntax that will move Tristan to Module 2:
// ● Write the syntax that will move Tristan to Module 5:
// ● Write the syntax that will make Tristan an alum:
// ● What will happen if you run tristan.module = 3? Why?
var student ={
   name:'Tristan',
   program:'front end',
   module:1,
   alum:false
}
student.module=2;
student.alum=true;
console.log(student)