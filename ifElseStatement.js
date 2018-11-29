//var firstName = "Mike";
//var status = "Married";
//
//if (status == "Married") {
//    console.log("Mike is Married");
//} else {
//    console.log("Mike is Single");
//}

//var numberOfWaterMelon = 20;
//if (numberOfWaterMelon>20) {
//    console.log("I have more than 20 water melon");
//} else {
//    console.log("I don't have more than 20 watermelon");
//}

// Task 1
//var membership = prompt("Do you have membership? Say Yes or No");
//var orderAmount = parseInt(prompt("What is your order amount?"));
//
//if (membership == "Yes" && orderAmount >= 40) {
//    console.log("Free shipping");
//} else if(membership == "No"){
//    console.log("You don't have membership! You need to pay for order")
//} else if(orderAmount < 40) {
//    console.log("You have to add more items in your cart. Limit is 40$ for free shipping.")
//} else{
//    console.log("You don't have membership")
//}


// Task 2
//var num1, num2;
//num1 = parseInt(prompt("Enter first number"));
//num2 = parseInt(prompt("Enter second number"));
//
//if (num1>num2) {
//    console.log("First number: " + num1 + " is greater than second number: " + num2);
//} else {
//    console.log("Second number: " + num2 + " is greater than first number: " + num1);
//}


// Task 3

var hour = parseInt(prompt("Enter hour! (You should write with 24 system.)"));

if (hour < 12) {
    console.log("Good Morning Sunshine :) ");
} else {
    if (hour == 12 || hour < 15) {
    console.log("Good Afternoon...");
    }
} else {
    if (hour >= 15 && hour <= 24) {
    console.log("Good Evening...");
    }
} else {
    console.log("A day is 24 hours :) ");
}
