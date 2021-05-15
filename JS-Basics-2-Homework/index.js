//var grade= ;
function numbertoLetter(grade){
   if (grade >= 95 &&  grade <= 100) {
      console.log('Your grade is an A')
    } else if (grade >= 90 && grade <= 94) {
      console.log('Your grade is an A-')
    } else if (grade >= 87 && grade<90) {
      console.log('Your grade is a B+')
    } else if (grade >= 84 && grade< 87) {
      console.log('Your grade is a B')
    } else if (grade >= 80 && grade<84) {
      console.log('Your grade is a B-')
    } else if (grade >= 77 && grade<=89) {
      console.log('Your grade is a C+')
    } else if (grade >= 74 && grade<=77) {
      console.log('Your grade is a C')
    } else if (grade >= 70 && grade<74) {
      console.log('Your grade is a C-')
    } else if (grade >= 60 && grade<=69) {
      console.log('Your grade is a D')
    } else {
      console.log('Your grade is an F')
    }
   }
console.log(numbertoLetter(88)) //returns Your grade is a B+


//For bonus: think about how your function would run if the parameter passed in was not a
//number, but a string. Look up how to add in test cases to make sure if the function is
//called but the parameter is not a number it returns an error message instead.
console.log(numbertoLetter(string))