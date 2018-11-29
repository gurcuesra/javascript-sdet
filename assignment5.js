// Answer 1

//var boolean_expression = 5;
//while(boolean_expression > 0){
//    console.log("HELLO");
//    console.log("\n");
//    --boolean_expression; 
//}



// Answer 2

// First way:

//var ask = parseInt(prompt("Please enter upper limit."));
//var sum = 0;
//var num = 0;
//
//do {
//    sum = sum + num;
//    num++;
//    sum++;
//}while(num < ask);
//console.log("Sum of the numbers from 1 to " + ask + " to: " + sum);


// Second way: 

//var ask = parseInt(prompt("Please enter upper limit."));
//var sum = 0;
//var num = 0;
//
//while (num < ask ){
//    sum = sum + num;
//    num++;
//    sum++;
//}
//console.log("Sum of the numbers from 1 to " + ask + " to: " + sum);



// Answer 3

//var num = 1;
//while (num <= 100) {
//    if(num % 2 == 0){
//        console.log("Even number is: " + num);
//    }
//    num++;
//}



// Answer 4  

//var num = parseInt(prompt("Please write a limit for learning odd numbers..."));
//var number = 2;
//var a = "";
//
//while (number <= (num-1)){
//    if (num % 2 == 1) {
//        if (number % 2 == 1){
//        a = a + number + ",";
//        }
//    } else {
//        if (number % 2 == 1){
//            a = a + "," + number;
//        }  
//    }
//    number++;
//}
//
//if (num % 2==1){
//    console.log("1," + a + num); 
//} else {
//    console.log("1" + a);
//}



