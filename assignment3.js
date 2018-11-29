//// Answer 1
//var marks;
//marks = prompt("Please enter your mark!");
//marks = parseInt(marks);
//
//// if Statement way:
//
//if (marks < 60) {
//    console.log("Fail");
//}
//
//if (marks >= 60 && marks < 90) {
//    console.log("Pass");
//}
//
//if (marks >= 90 && marks <= 100) {
//    console.log("Passed with Distinction");
//}
//
//if (marks > 100) {
//    console.log("Invalid...")
//}
//
//
//// if - else Statement way:
//
//if (marks < 60) {
//    console.log("Fail");
//} else {
//    if (marks >= 60 && marks < 90) {
//        console.log("Pass");
//    } else {
//        if(marks >= 90 && marks <= 100) {
//            console.log("Passed with Distinction");
//          } else {
//              console.log("Invalid...");
//          }
//    }
//}
//
//
//// if - else if - else Statement way: 
//
//if (marks < 60) {
//    console.log("Fail");
//} else if (marks >= 60 && marks < 90) {
//    console.log("Pass");
//} else if (marks >= 90 && marks <= 100) {
//    console.log("Passed with Distinction");
//} else {
//    console.log("Invalid...");
//}



// Answer 2
//
var userName, password;
userName = prompt("Please enter your username");
password = prompt("Please enter your password");

if (userName == "" && password == "") {
    console.log("Username and password fields cannot be empty");
} else if (userName == "" && password != "") {
    console.log("Username cannot be empty");
} else if (userName != "" && password == "") {
    console.log("Password cannot be empty");
} else if (userName != "Esra" || password != "Kartal"){
    console.log("Username and password is not valid. Please verify");
} else {
    console.log("User logged in succesfully")
}




// Answer 3
//
//var num1, operator, num2;
//num1 = parseInt(prompt("Please enter your first number"));
//
//if (num1 !== num1){
//    console.log("Please enter valid first number")
//} else {
//    operator = prompt("Please enter operator");
//    num2 = parseInt(prompt("Please enter your second number"));
//    if (num2 !== num2){
//        console.log("Please enter valid second number")
//    } else {
//        
//        if (operator == "+") {
//        console.log(num1 + num2);
//        } else if (operator == "-") {
//            console.log(num1 - num2);
//        } else if (operator == "*") {
//            console.log(num1 * num2);
//        } else if (operator == "/") {
//            console.log(num1 / num2);
//        } else {
//            console.log("Please enter valid operator.");
//        }
//    }
//}


// Answer 4

// // First way:
//var income, taxAmount;
//income = parseInt(prompt("Please enter your income"));
//taxRatio_1 = 0.25;
//taxRatio_2 = 0.30;
//taxRatio_3 = 0.35;
//taxRatio_4 = 0.40;
//taxRatio_5 = 0.50;
//if (income <= 150000000) {
//    taxAmount = income * taxRatio_1;
//    console.log("Your income is: " + income);
//    console.log("The tax amount you have to pay: " + taxAmount);
//} else if (income <= 300000000) {
//    taxAmount = (150000000 * taxRatio_1) + ((income - 150000000) * taxRatio_2);
//    console.log("Your income is: " + income);
//    console.log("The tax amount you have to pay: " + taxAmount);
//} else if (income <= 600000000) {
//    taxAmount = (150000000 * taxRatio_1) + ((income - 150000000) * taxRatio_2) + ((income-300000000) * taxRatio_3);
//    console.log("Your income is: " + income);
//    console.log("The tax amount you have to pay: " + taxAmount);
//} else if (income <= 1200000000) {
//    taxAmount = (150000000 * taxRatio_1) + ((income - 150000000) * taxRatio_2) + ((income-300000000) * taxRatio_3) + ((income - 600000000) * taxRatio_4);
//    console.log("Your income is: " + income);
//    console.log("The tax amount you have to pay: " + taxAmount);
//} else if (income > 1200000000) {
//    taxAmount = (150000000 * taxRatio_1) + ((income - 150000000) * taxRatio_2) + ((income-300000000) * taxRatio_3) + ((income - 600000000) * taxRatio_4) + ((income - 1200000000) * taxRatio_5);
//    console.log("Your income is: " + income);
//    console.log("The tax amount you have to pay: " + taxAmount);
//} else{
//    console.log("Please enter valid income...")
//}
//
//// // Second way:
//
//var income = parseInt(prompt("Please enter your income"));
//
//var taxAmount_1 = income * 0.25;
//var taxAmount_2 = ((income - 150000000) * 0.30) + (150000000 * 0.25);
//var taxAmount_3 = ((income - 300000000) * 0.35) + taxAmount_2;
//var taxAmount_4 = ((income - 600000000) * 0.40) + taxAmount_2 + taxAmount_3;
//var taxAmount_5 = ((income - 1200000000) * 0.50) + taxAmount_2 + taxAmount_3 + taxAmount_4;
//
//if (income <= 150000000) {
//    console.log("Your income: " + income);
//    console.log("The tax amount is you have to pay: " + taxAmount_1);
//} else if(income <= 300000000) {
//    console.log("Your income: " + income);
//    console.log("The tax amount is you have to pay: " + taxAmount_2);
//} else if(income <= 600000000) {
//    console.log("Your income: " + income);
//    console.log("The tax amount is you have to pay: " + taxAmount_3);
//} else if(income <= 1200000000) {
//    console.log("Your income: " + income);
//    console.log("The tax amount is you have to pay: " + taxAmount_4);
//} else if(income > 1200000000) {
//    console.log("Your income: " + income);
//    console.log("The tax amount is you have to pay: " + taxAmount_5);
//} else {
//    console.log("Please enter valid income...");
//}
//
//
//// Answer 5
//var year = parseInt(prompt("Please enter a year. Then I will say to you, this year is a leap year or not?"));
//
//if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
//    console.log(year + " is a leap year");
//} else {
//    console.log(year + " is NOT a leap year");
//}
//
//
//// Answer 6
//var bill, calls;
//calls = parseInt(prompt("Please enter your call total. Then, I will calculate your monthly telephone bills"));
//
//if (calls < 100) {
//    console.log("Your bill is minimum 200$ for up to 100 calls");
//} else if (calls < 150) {
//    bill = ((calls - 100) * 0.60) + 200;
//    console.log("Your bill is: " + bill);
//} else if (calls < 200) {
//    bill = ((calls - 150) * 0.50) + (50 * 0.60) + 200;
//    console.log("Your bill is: " + bill);
//} else if (calls > 200) {
//    bill = ((calls - 200) * 0.40) + (50 * 0.50) +(50 * 0.60) + 200;
//    console.log("Your bill is: " + bill);
//} else {
//    console.log("Please enter valid number...");
//}




