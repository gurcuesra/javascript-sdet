//var i = 0; 
//while (1<6) {
//    if(i==3){
//        continue;
//    }
//    i++;
//    console.log(i);
//}

//var print = "";
//for(var i=1; i<=10; i++){
//    if(i%2==0){
//        continue;
//    }
//    print = print + i + " ";
//}
//console.log(print);

// Task 1

//var sum = 0;
//
//do {
//    var ask = parseInt(prompt("Please enter a number and I will calculate it. It will stop when you write negative number"));
////    if (ask<0) {
////        break;
////    }
//    sum = sum + ask;
//    console.log(sum);
//    
//    
//}while(ask>0);

// Ozzy's way:
//var number;
//var sum=0;
//
//while(true) {
//    number = parseInt(prompt("Please enter a number"));
//    if(number < 0) {
//        break;
//    }
//    sum = sum + number;
//}
//console.log(sum);


// Task 2

//var sum = 0;
//for (var i = 1; i<6; i++) {
//    var number =parseInt(prompt("Please enter number"));
//    if(number <=0) {
//        continue;
//    }
//    sum = sum + number;
//}
//console.log(sum);


// Task 3

var start = 1;
var sum = 0;
do {
    if(start%2==0) {
        continue;
    }
    sum+=start;
    
}while(++start<=10);
console.log(sum);














