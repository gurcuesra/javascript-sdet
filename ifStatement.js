//var numberOfWaterMelon = 10;
//
//if(numberOfWaterMelon>=20){
//    console.log("I have 20 and more watermelon");
//}
//
//
//var firstName = prompt("Enter your name");
//var status = prompt("Enter your status");
//
//if (status == "Married") {
//    console.log(firstName + " is married"); 
//}

// Task
//var temp = parseInt(prompt("Enter temp of the room"));
//
//if(temp>= 70 && temp <= 80) {
//    console.log("Temp is an ideal temp: " + temp);
//}

// Task 2
//var age = parseInt(prompt("Enter your age!"));
//
//if (age >= 18 ) {
//    console.log("You are eligible to vote");
//}

// Task 3

//var firstNumber, secondNumber, thirdNumber;
//firstNumber = parseInt(prompt("Enter first number"));
//secondNumber = parseInt(prompt("Enter second number"));
//thirdNumber = parseInt(prompt("Enter third number")); 
//
//if ((firstNumber>secondNumber) && (firstNumber>thirdNumber)) {
//    console.log("first number is greatest number -> " + firstNumber)
//}
//if ((secondNumber>thirdNumber) && (secondNumber>firstNumber)) {
//    console.log("second number is greatest number -> " + secondNumber)
//}
//if ((thirdNumber>secondNumber) && (thirdNumber>firstNumber)) {
//    console.log("third number is greatest number -> " + thirdNumber)
//}
//if((secondNumber==firstNumber==thirdNumber))
//   {console.log(" They are all equal");}



// Task 4
//var numberOfWaterMelon;
//var lotsOfWaterMelon;
//lotsOfWaterMelon = false;
//
//numberOfWaterMelon = parseInt(prompt("Please enter your number of watermelon"));
//
//if (numberOfWaterMelon>=20) {
//    console.log("I have more than 20 watermelon");
//    lotsOfWaterMelon=true;
//}
//
//if (lotsOfWaterMelon) {
//    console.log("good job");
//}
//
//if (lotsOfWaterMelon==false) {
//    console.log("I need more watermelon");
//}

// Task 5
//var num_1, num_2;
//num1 = parseInt(prompt("Please enter first number!"));
//num2 = parseInt(prompt("Please enter second number!"));
//
//if (num1 === num2) {
//    console.log("First number is: " + num1 + " and second number is: " + num2 + " are equal.");
//}
//
//if (num1 !== num2) {
//    console.log("First number is: " + num1 + " and second number is: " + num2 + " are  NOT equal.");
//}


// Task 6

var revenue, price, quantity;
price = parseInt(prompt("Please enter the selling price"));
quantity = parseInt(prompt("Please enter the quantity sold"));
revenue = price * quantity ;

if (revenue > 5000) {
    var discount = revenue * 10 / 100; 
    var netRevenue = revenue - discount ;
    console.log("Your revenue is: " + revenue);
    console.log("Your discount is: " + discount);
    console.log("Your net revenue is: " + netRevenue);
}

if (revenue <= 5000) {
    console.log("You don't get any discount! Sorry!");
}


