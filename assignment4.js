

//// Answer 1
//var num = parseInt(prompt("Please enter a number. I will say this number is ODD or EVEN!"));
//var result = num % 2;
//
//switch (result){
//    case 0:
//        console.log("Your number: " + num + " is an EVEN");
//        break;
//    case 1:
//        console.log("Your number: " + num + " is an ODD");
//        break;
//    default:
//        console.log("Please enter valid number...");
//        break;
//}
//
//
//// Answer 2
//
//var num = parseInt(prompt("Please enter a number"));
//
//switch (num) {
//    case 0:
//    case 1:
//    case 2:
//        console.log("Low Number");
//        break;
//    case 3:
//    case 4:
//    case 5:
//        console.log("Medium Number");
//        break;
//    default:
//        console.log("Other Number");
//        break;
//}
//
//
//
//// Answer 3
//
var totalCost = parseInt(prompt("Please enter your total cost"));
var discount_1 = 0.05;
var discount_2 = 0.08;
var payAmount;

switch (true) {
    case (totalCost >= 1000 && totalCost <=10000):
        payAmount = totalCost - (totalCost * discount_1);
        console.log("Your pay amount is: " + payAmount);
        break;
    case (totalCost >= 10000):
        payAmount = totalCost - (totalCost * discount_2);
        console.log("Your pay amount is: " + payAmount);
        break;
    default:
        console.log("You can not take any discount...");
        break;
}
//
//
//// Answer 4
//
//var trafficLight = prompt("Please enter 'R/r' or 'O/o' or 'G/g'. Then, i will show you traffic light...");
//
//switch (trafficLight) {
//    case "R":
//        console.log("Red");
//        break;
//    case "r":
//        console.log("Red");
//        break;
//    case "O":
//        console.log("Orange");
//        break;
//    case "o":
//        console.log("Orange");
//        break;    
//    case "G":
//        console.log("Green");
//        break;
//    case "g":
//        console.log("Green");
//        break;    
//    default:
//        console.log("Please enter valid character...")
//        break;
//}
//


