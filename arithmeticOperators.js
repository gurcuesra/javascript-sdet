//// Operator x + y
//
//// Number + Number = Addition
//
//console.log(2 + 2);
//console.log(20 + 200);
//
//// Boolean + Number = Addition
//console.log(false + 1);
//console.log(true + 1);
//
//// Number + String = Concatenation
//console.log(5 + "hello");
//
//// String + Boolean = Concatenation
//console.log("hello" + false);
//
//// String + String = Concatenation
//console.log("hello" + "world");
//
//
//// Operator x - y
//console.log(5 - 3);
//console.log(10 - 20);
//console.log(-10 -10);
//
//
//// Operator x * y
//console.log(10 * 10);
//console.log(20 * -10);
//
//
//// Operator x / y
//console.log(10/10);
//console.log(20/10);
//console.log(20/0);
//console.log(0/20);
//
//
//// Operators x % y
//console.log(5 % 3);
//console.log(6 % 2);
//
//
//// Operator x++ or ++x
//var x = 3;
//// y = x++;
//y = ++x;
//console.log(x);
//console.log(y);
//
//
//// Operator x-- or --x
//var a = 3;
//// b = a--;
//b = --a;
//console.log(a);
//console.log(b);
//
//
//// Task 1
//var num1 = 59;
//var num2 = 89;
//sum = num1 + num2;
//console.log(sum);
//
//// Task 2
////var num3 = prompt("Assign first number");
////var num4 = prompt("assign second number");
////var sum = num3 + num4;
////console.log(sum);
//
//// Task 3
////var num5, num6, sum;
////num5 = prompt("Assign first number");
////num6 = prompt("Assign second number");
////
////num5 = parseInt(num5);
////num6 = parseInt(num6);
////
////sum = num5 + num6;
////console.log(num5 + " + " + num6 + " = " + sum);
//
//// Task 4
////var celcius = prompt("Assign celcius degree for converting");
////var fahrenheit = 1.8*celcius + 32;
////celcius = parseInt(celcius);
////console.log(celcius + " is: " + fahrenheit + "F");
//
//// Task 5
////var f = prompt("Assign fahrenheit degree for converting");
////var c = (f-32)/1.8;
////f = parseInt(f);
////console.log(f + " is: " + c + "C");
//
//
//// Task 6
////var miles, km;
////miles = prompt("Assign miles for converting");
////miles = parseInt(miles);
////km = 1.609344*miles;
////console.log(miles + " miles is: " + km + "km");
//
//
//// Task 7
//// console.log(3+5*4-6);
//
//// Task 8
////var a = 50;
////a = --a + a++ + a-- + a++;    // 49 + 49 + 50 + 49
////console.log(a);
//
////var a=50;
////
////console.log(--a);
////console.log(a++);
////console.log(a--);
////console.log(a++);
//
//
//// Task 9
////var a = 1;
////
////a = -a-- + a++ / -a-- * --a;  // -1 + 0 / -1 * -1
////// (-1+0) (-1+1) (0-1) (0-1)
////
////console.log(a);
//
//
//// Example
////var x = 1;
////x = -x--;
////console.log(x);
////
////y = x++ ;
////console.log(x);
////
////z = -x--;
////console.log(x);
//
//var a = 5;
//a = --a + a++ + a-- + a++;    // 49 + 49 + 50 + 49
//console.log(a);

console.log(-  -1-3*10/5-1);


// My example:
var a = 1;
console.log(a++);  // -> 1 => a++ affected to NEXT a
console.log(a);    // -> 2 
var b = 1;
console.log(++b);  // -> 2 => ++b affected to THIS b
console.log(b);    // -> 2
var c = 1;
console.log(c--);  // -> 1 => c-- affected to NEXT c
console.log(c);    // -> 0
var d = 1;
console.log(--d);  // -> 0 => --d affected to THIS d
console.log(d);    // -> 0
