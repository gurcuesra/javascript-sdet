//// Answer 1
//
//for (var i=1; i<=10 ; i++) {
//    console.log( 12 + " * " + i + " = " + (12 * i));
//} 
//
//// Answer 2
//
var n = parseInt(prompt("Please enter the term for Fibonacci series..."));

var x = 0, y = 1, z;
console.log(x);
console.log(y);
for (var i=2; i<n ; i++) {
    z = x + y;
    x = y;
    y = z;
    console.log(z);
}
//
//// Answer 3
//
//console.log("1 :is not divisible by 5");
//
//for (var i=1; i<=100; i++) {
//    if(i%5==0) {
//        console.log(i + " :is divisible by 5");
//    }
//}
//
//// Answer 4
//
//var total = 0;
//for (var i = 5; i<=44; i++) {
//    total += 5;
//    console.log(total);
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
