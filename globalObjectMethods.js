// String Methods:

//// isNaN() Method:
//
//var a = "apple";
//console.log(isNaN(a));  //->true -> it is not a number? (true because it is a string)
//
//var b = "23";
//console.log(isNaN(b));  //->false -> inside of the string is number. it is like -> "23" == 23 is true. But, "23" === 23 is false.
//
//var c = "abc23";
//console.log(isNaN(c));  //->true  -> it is not a number? (true because it is a string)
//
//var d = " ";
//console.log(isNaN(d));  //->false -> it is space. it reads to space as 0. that's why, false.
//
//var e = 23;
//console.log(isNaN(e));  //->false  -> it is not a number? (false because it is number.)
//
//
//// isFixed() Method:
//
//var a = 213.73145;
//console.log(a.toFixed());   //-> 214   (it rounds the number)
//
//var b = 213.73145;
//console.log(b.toFixed(3));  //-> 213.731 (it writes 3 digit after ".")
//
//var c = 213.73645;
//console.log(c.toFixed(2));  //-> 213.74 (it writes 2 digit after ".")
//
//var d = 2.13e+15;
//console.log(d.toFixed(2));  //-> 2130000000000000.00 (it writes 2 digit after ".")
//
//
//
//
//// toPrecision() Method:
//
//var a= 13.3714;
//console.log(a.toPrecision());      //-> 13.3714 (all number)
//console.log(a.toPrecision(2));     //-> 13 (just 2 digit)
//console.log(a.toPrecision(3));     //-> 13.4 (just 3 digit)
//console.log(a.toPrecision(10));    //-> 13.37140000 (it completes the 10 digit with 0 )
//
//var b = 0.001658853;
//console.log(b.toPrecision());      //-> 0.001658853 (all number)
//console.log(b.toPrecision(2));     //-> 0.0016 (it counts the digits after 0)
//console.log(b.toPrecision(3));     //-> 0.00165 (it counts the digits after 0)
//console.log(b.toPrecision(10));    //-> 0.001658853000 (it counts the digits after 0 and it completes the 10 digit with 0)
//
//
//
//
//// toExponential() Method:
//var c = 123456;
//console.log(c.toExponential());   //-> 1.23456e+5  (e+5 = 100000)
//
//var d = 123.45;
//console.log(d.toExponential());   //-> 1.2345e+2   (e+2 = 100)





// toString() Method:

//var num = 15;
//var str = num.toString();
//console.log(typeof(num));  // -> number
//console.log(typeof(str));  // -> string




// Task 1

//var S1 = "dfgsdA08awq #23423wefa^$#saaag5345sfs";
//
//var countNum = 0;
//var countNaN = 0;
//for (var i=0; i<S1.length; i++){
//    var a = S1.charAt(i);
//    if(isNaN(a)){
//        countNaN++;
//    }else {
//        countNum++;
//    }
//}
//
//console.log(countNaN);
//console.log(countNum);





































