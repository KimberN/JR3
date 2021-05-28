//Create an array with 10 items in it
var items=["rock", 3,"lemon", "squirrel", "lamp", 9,"pen","circle", 5,"glasses"]
//make a conditional that checks the number of items in the array is greater than zero
while(items.length>0){ 
    var removedItem = items.pop();
    console.log(removedItem)
    
    if(items.length ===0){
        console.log('this loop is completed')
    }

    console.log(items);
    
}