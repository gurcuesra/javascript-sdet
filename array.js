//// Creating Array in different ways
//
//var scores1 = new Array();
//var scores2 = Array(10);
//var scores3 = new Array(9,10,5,8);
//var scores4 = ["red", "green", 1, false];
//var scores5 = [];
//
//// Accesing Array Elements
//
//var mountains = ["Everest", "Fuji", "Nanga Parbat"];
//
//console.log("Oth element is: " + mountains[0]);  // "Everest"
//console.log("1st element is: " + mountains[1]);  // "Fuji"
//console.log("2nd element is: " + mountains[2]);  // "Nanga Parbat"
//
//
//// Example
//
//var names = ["Mike", "Smith", "John", "Tedd"];
//
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//console.log(names[4]);
//
//// Example of Concatenation
//console.log(names[0] + " " + names[1]);



// Task 1

//var ask = parseInt(prompt("Please enter a number between 1-12!!!"));
//var MonthName = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
//console.log("The month name is: " + MonthName[ask]);

// Ozzy's way:
//var myArray = Array(11);
//myArray[0] = "January";
//myArray[1] = "February";
//myArray[2] = "March";
//myArray[3] = "April";
//myArray[4] = "May";
//myArray[5] = "June";
//myArray[6] = "July";
//myArray[7] = "August";
//myArray[8] = "September";
//myArray[9] = "October";
//myArray[10] = "November";
//myArray[11] = "December";
//
//var index;
//index = prompt("Enter your month index");
//
//console.log("The month is " + myArray[index]);



// Task 2

//var ask = parseInt(prompt("Please enter a number between 1-7!!!"));
//var dayName = ["","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//
//console.log("The day name is: " + dayName[ask]);


// Task 3 - Length of the Array

// First way:

//var shoppingList=["cheese", "pumpkin", "bread", "eggs", "milk", "almonds"];
//
//for(var i=0; i<=5; i++){
//    console.log(shoppingList[i]);
//}

// Second way: 

//var shoppingList=["cheese", "pumpkin", "bread", "eggs", "milk", "almonds"];
//
//for(var i=0; i<shoppingList.length; i++){
//    console.log(shoppingList[i]);
//}



// Task 4

//var car = ["Ferrari", "Toyota", "Porsche", "Honda", "Chevrolet", "Mustang"];

// First way:

//for(var i=0; i<car.length; i++){
//    if(car[i] == "Honda"){
//        console.log("I found your car Honda in this array");
//        break;
//    } else if(i==car.length-1) {
//        console.log("I could not find your car in this array");
//    }
//}

// Second way:

//var bool = false;
//for(var i=0; i<cars.length;i++){
//    if(car[i] == "Honda"){
//        bool = true;
//    } else {
//        bool = false;
//    }
//}
//
//if(bool == true) {
//    console.log("found it");
//} else {
//    console.log("not found it")
//}




// toString()  && Array.isArray(arrayName);

//var car = ["Ferrari", "Toyota", "Porsche", "Honda", "Chevrolet", "Mustang"];
//
//console.log(car.toString());



// Task 5

//var shoppingList=["cheese", "pumpkin", "bread", "eggs", "milk", "almonds"];
//
//if (Array.isArray(shoppingList)){
//    console.log(shoppingList.toString());
//} else{
//    console.log("Your shopping list is not Array...")
//}



// push() && pop();

//var stack =[];  // empty array
//stack.push(1);  // add end of the array. Which is 1
//
//stack.push(2);  // add 2 end of the array. Which is after 1. 
//
//stack.push(3);  // add 3 end of the array. Which is after 2.
//
//stack.pop();    // remove last one. Which is 3.
//
//console.log(stack);
//
//for(var i=0; i<stack.length; i++){
//    console.log(stack[i]);
//}
//
//
//stack.push("apple");
//console.log(stack);


// Task 6

//var fruit = [];
//for(var i=0; i<5; i++){
//   var ask = prompt("Please enter your favorite fruit");
//    fruit.push(ask);
//    if(ask == "palm"){
//        fruit.pop();
//        console.log(fruit + " I am sorry. I don't like palm :( ");
//        break;
//    } else {
//        console.log(fruit);
//    }
//}


// Ozzy's way:

//var stack=[];
//
//while(true){
//var selection=parseInt(prompt("Please select one of them: \n 1- Add a new element to the array \n 2- Remove an element from the array\n 3-Print each element from element \n 4- Exit the program."));
//    
//
//if(selection==1){
//    var input=prompt("Enter your element");
//    stack.push(input);
//} else if(selection==2){
//    stack.pop();
//} else if(selection==3){
//    console.log(stack);
//} else if(selection==4){
//    console.log("Bye");
//    break;
//}
//
//}







// Task 4










