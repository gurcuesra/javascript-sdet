// Task 1
//var firstName = "Esra";
//var lastName = "Kartal";
//var salary = "$100k";
//
//console.log("Hi! My name is " + firstName + " " + lastName + " and my salary is " + salary);



// Task 2
//var hourlyRate, hours;
//hourlyRate = 50;
//hours = parseInt(prompt("Please write your hours!"));
//
//console.log("You worked this " + hours + " hours this week and you made $" + (hours * hourlyRate));





// Task 3
//var x = 5 + 5;
//console.log(x);

//var x = "5" + "5";
//console.log(x);

//var x = 5 + "5";
//console.log(x);

//var x = "5" + 5;
//console.log(x);



// Task 4

//var a,b,c;
//a=25;
//b=35;
//c=a;
//a=b;
//console.log(a);
//console.log(b);
//console.log(c);


// Task 5

//var ask_1 = parseInt(prompt("Please enter your first number"));
//var ask_2 = parseInt(prompt("Please enter your second number"));
//var ask_3 = parseInt(prompt("Please enter your third number"));
//var ask_4 = parseInt(prompt("Please enter your forth number"));
//
//var average = (ask_1 + ask_2 + ask_3 + ask_4)/4;
//
//console.log("Average is: " + average);


// Task 6

//var x=5,y=4;
//console.log(x<10 && y>1);

//var x=5,y=4;
//console.log(!(x==y));





// Task 7

//var number = parseInt(prompt("Please enter a number. I will show this number is odd or even"));
//
//if(number % 2 == 0) {
//    console.log(number + " is an even number");
//} else if (number % 2 != 0) {
//    console.log(number + " is an odd number");
//}



// Task 8

//var num1, num2;
//num1 = parseInt(prompt("Please enter first number"));
//num2 = parseInt(prompt("Please enter second number"));
//
//if (num1 == num2) {
//    console.log(num1 + " and " + num2 + " are equal" );
//} else{
//    console.log(num1 + " and " + num2 + " are not equal" );
//}



// Task 9

//var score = parseInt(prompt("Please enter your score!"));
//
//if (score >= 90 && score <= 100) {
//    console.log("Your score is: " + score + " and your grade is A");
//} else if (score >= 80 && score < 90) {
//    console.log("Your score is: " + score + " and your grade is B");
//} else if (score >= 70 && score < 80) {
//    console.log("Your score is: " + score + " and your grade is C");
//} else if (score >= 0  && score < 70) {
//    console.log("Your score is: " + score + " and your grade is F");
//} else {
//    console.log("Score should be between 0-100");
//}



// Task 10

//var price = parseInt(prompt("Please enter price!"));
//var quantity = parseInt(prompt("Please enter quantity!"));
//var revenue = price * quantity;
//
//if (revenue < 3000) {
//    console.log("No discount sorry! For taking discount, you should spend more than $3000!!!");
//} else if (revenue >= 3000 && revenue < 5000) {
//    var pay = revenue - (revenue*0.15); 
//    console.log("You earned %15 discount. You will pay: " + pay);
//} else if (revenue >= 5000 && revenue < 10000) {
//    var pay = revenue - (revenue*0.25); 
//    console.log("You earned %25 discount. You will pay: " + pay);
//} else if (revenue >= 10000) {
//    var pay = revenue - (revenue*0.40); 
//    console.log("You earned %40 discount. You will pay: " + pay);
//} 



// Task 11

//var car = prompt("Please enter car model. (toyota or ferrari or mercedes)");
//
//switch(car) {
//    case "toyota":
//        console.log("Toyota is good for UBER/LYFT! My car is Toyota too :) ");
//        break;
//    case "ferrari":
//        console.log("Ferrari is good for race! I love Ferrari too! <3 ");
//        break;
//    case "mercedes":
//        console.log("Mercedes is good for luxury! But, I don't like it :(");
//        break;
//    default:
//        console.log("Please enter 'toyota' / 'ferrari' / 'mercedes'. And it should be lower case... ");
//        break;
//}



// Task 12

//for (var i=1;i<=20;i++){
//    console.log("I will find $100k job in 5 months!");
//    console.log("");
//}




// Task 13

//var num =parseInt(prompt("Please enter a number for multiplication table of that number."));
//
//if (num != num || num <= 0){
//    console.log("Please enter valid number...")
//} else {
//    for(var i=1; i<=10 ; i++){
//    console.log(num + " * " + i + " = " + num * i);
//    }
//}


// Task 14
//var i = parseInt(prompt("Please enter a bottom limit"));
//if (i>=0 && i < 15){
//   while (i<=15) {
//       console.log(i);
//       i++;
//   } 
//} else {
//    console.log("Number should be greater than or equal to 0. And number should not be greater than 15.");
//}

// Task 15

//for(var i=1; i<=100 ; i++){
//    if( i % 5==0 || i % 7 == 0){
//        console.log(i + " : divisible by 5 or 7");
//    }
//}


// Task 16

//var counter = 0;
//for (var i=1; i<=5; i++){
//    var ask = parseInt(prompt("Please enter a number"));
//    if (10 < ask && ask<20) {
//        counter++;
//    } 
//} 
//console.log(counter + " number is between 10 and 20");
 

// Task 17

//var counter = 0;
//for (var i=1; i<=50; i++){
//    if (i%3==0 || i%5==0) {
//        console.log(i);
//        counter++;
//    } 
//} 
//console.log(counter + " number is divisible by 3 and 5");


// Task 18

//var number = 0;
//var sumEven=0;
//var sumOdd =0;
//while (number >= 0){
//    var ask = parseInt(prompt("Please enter a number. For stopping the program, you should write '0'"));
//    if (ask == 0){
//        break;
//    } else {
//        if (ask % 2==0 ){
//            sumEven = sumEven + ask;
//            console.log(sumEven + " :even total");
//        } else {
//            sumOdd = sumOdd + ask;
//            console.log(sumOdd + " :odd total");
//        }
//    }
//    number++;
//}
//console.log(sumEven + sumOdd + " :final total");

// joinpd.com

// Task 1

//var input = parseInt(prompt("How many time you want to play this game? Number must be bigger than 0!!!"));
//
//for (var i=1; i<=input; i++) {
//    var ask1 = parseInt(prompt("Please enter a number"));
//    var ask2 = parseInt(prompt("Please enter a number"));
//    var ask3 = parseInt(prompt("Please enter a number"));
//    
//    if(ask1 > ask2 && ask1 > ask3) {
//        console.log(ask1 + " is largest than " + ask2 + " and " + ask3);
//    } else if(ask2 > ask1 && ask2 > ask3) {
//        console.log(ask2 + " is largest than " + ask1 + " and " + ask3);
//    } else if(ask3 > ask1 && ask3 > ask2) {
//        console.log(ask3 + " is largest than " + ask1 + " and " + ask2);
//    } else{
//        console.log(ask1 + ", " +ask2 + " and " + ask3 + " are equal.")
//    }
//    
//    if (input != i){
//        alert("Please enter your new 3 number!!!")
//    }
//    
//}



// Task 2

//for (var i=1; i<=10; i++) {
//    var ask1 = parseInt(prompt("Please enter a number"));
//    var ask2 = parseInt(prompt("Please enter a number"));
//    var ask3 = parseInt(prompt("Please enter a number"));
//    
//    if(ask1 > ask2 && ask1 > ask3) {
//        console.log(ask1 + " is largest than " + ask2 + " and " + ask3);
//    } else if(ask2 > ask1 && ask2 > ask3) {
//        console.log(ask2 + " is largest than " + ask1 + " and " + ask3);
//    } else if(ask3 > ask1 && ask3 > ask2) {
//        console.log(ask3 + " is largest than " + ask1 + " and " + ask2);
//    } else{
//        console.log(ask1 + ", " +ask2 + " and " + ask3 + " are equal.")
//    }
//    
//    var input = parseInt(prompt("Do you want to continue? 1-Yes, 2-No"));
//    if (input == 1){
//        alert("Please enter your new 3 numbers");
//        continue;
//    } else if (input ==2){
//        console.log("Thank you!");
//        break;
//    } else {
//        alert("Please enter 1 for YES, 2 for NO!!!")
//    }
//    
//}



// second way:

//while(true){
//    var ask1 = parseInt(prompt("Please enter a number"));
//    var ask2 = parseInt(prompt("Please enter a number"));
//    var ask3 = parseInt(prompt("Please enter a number"));
//    
//    if(ask1 > ask2 && ask1 > ask3) {
//        alert(ask1 + " is largest than " + ask2 + " and " + ask3);
//    } else if(ask2 > ask1 && ask2 > ask3) {
//        alert(ask2 + " is largest than " + ask1 + " and " + ask3);
//    } else if(ask3 > ask1 && ask3 > ask2) {
//        alert(ask3 + " is largest than " + ask1 + " and " + ask2);
//    } else{
//        alert(ask1 + ", " +ask2 + " and " + ask3 + " are equal.")
//    }
//    
//    var input = parseInt(prompt("Do you want to continue? 1-Yes, 2-No"));
//    if (input == 1){
//        alert("Please enter your new 3 numbers");
//        continue;
//    } else if (input ==2){
//        console.log("Thank you!");
//        break;
//    } else {
//        alert("Please enter 1 for YES, 2 for NO!!!")
//    }
//}



// Task 3

//var count =1;
//while(true){
//    var ask1 = parseInt(prompt("Please enter a number"));
//    var ask2 = parseInt(prompt("Please enter a number"));
//    var ask3 = parseInt(prompt("Please enter a number"));
//    
//    if(ask1 > ask2 && ask1 > ask3) {
//        alert(ask1 + " is largest than " + ask2 + " and " + ask3);
//    } else if(ask2 > ask1 && ask2 > ask3) {
//        alert(ask2 + " is largest than " + ask1 + " and " + ask3);
//    } else if(ask3 > ask1 && ask3 > ask2) {
//        alert(ask3 + " is largest than " + ask1 + " and " + ask2);
//    } else{
//        alert(ask1 + ", " +ask2 + " and " + ask3 + " are equal.")
//    }
//    
//    var input = parseInt(prompt("Do you want to continue? 1-Yes, 2-No"));
//    if (input == 1){
//        alert("Please enter your new 3 numbers");
//        count++;
//        continue;
//    } else if (input ==2){
//        console.log("Thank you! you have tried " + count + " times");
//        break;
//    } else {
//        alert("Please enter 1 for YES, 2 for NO!!!")
//    }
//}





// Task 4











// joinpd.com


// Task 1

// a)
//var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// different way:
//var numArray = Array(15);
//numArray[0]=1;
//numArray[1]=2;
//numArray[2]=3;
//numArray[3]=4;
//numArray[4]=5;
//numArray[5]=6;
//numArray[6]=7;
//numArray[7]=8;
//numArray[8]=9;
//numArray[9]=10;
//numArray[10]=11;
//numArray[11]=12;
//numArray[12]=13;
//numArray[13]=14;
//numArray[14]=15;
//
//// b)
//console.log(numArray[9]);
//
//// c)
//numArray[4] = 35;
//console.log(numArray);
//
//// d)
//numArray[8] = numArray[5] + numArray[12];
//console.log(numArray);




// Task 2

//// a)
//var dayArray = Array(7);
//dayArray[0]="Sunday";
//dayArray[1]="Monday";
//dayArray[2]="Tuesday";
//dayArray[3]="Wednesday";
//dayArray[4]="Thursday";
//dayArray[5]="Friday";
//dayArray[6]="Saturday";
//
//// b)
//for(var i=0; i<dayArray.length; i++){
//    console.log(dayArray[i]);
//}




// Task 3

var userArray = Array(10);
var sum =0;
for(var i=0; i<userArray.length;i++){
    var ask = parseInt(prompt("Please enter a number"));
    userArray[i] = ask;
    sum = sum + ask;
}
console.log(userArray);
console.log(sum);



































