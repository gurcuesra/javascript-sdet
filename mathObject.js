// MATH OBJECT:

// Math.round() Method:

//var a = Math.round(2.60);
//console.log(a);           // 3
//
//var b = Math.round(2.50);
//console.log(b);           // 3 
//
//var c = Math.round(2.49);
//console.log(c);           // 2
//
//var d = Math.round(-2.60);
//console.log(d);           // -3
//
//var e = Math.round(-2.50);
//console.log(e);           // -2
//
//var f = Math.round(-2.49);
//console.log(f);           // -2



// Math.sqrt() Method: -> sqrt like square root(karekok)

//var a = Math.sqrt(0);
//console.log(a);        // 0 * 0 = 0 -> 0^2 = 0
//
//var b = Math.sqrt(1);
//console.log(b);        // 1 * 1 = 1 -> 1^2 = 1
//
//var c = Math.sqrt(9);
//console.log(c);        // 3 * 3 = 9 -> 3^2 = 9
//
//var d = Math.sqrt(64);
//console.log(d);        // 8 * 8 = 64 -> 8^2 = 64
//
//var e = Math.sqrt(-9);
//console.log(e);        // NaN




// Math.floor() Method:

//var a = Math.floor(0.60);
//console.log(a);          // nearest down integer(tam sayi) is 0
//
//var b = Math.floor(0.40);
//console.log(b);          // nearest down integer(tam sayi) is 0
//
//var c = Math.floor(5);
//console.log(c);          // nearest down integer(tam sayi) is 5
//
//var d = Math.floor(5.1);
//console.log(d);          // nearest down integer(tam sayi) is 5
//
//var e = Math.floor(-5.1);
//console.log(e);          // nearest down integer(tam sayi) is -6
//
//var f = Math.floor(-5.9);
//console.log(f);          // nearest down integer(tam sayi) is -6



// Math.ceil() Method:

//var a = Math.ceil(0.60);
//console.log(a);          // nearest down integer(tam sayi) is 1
//
//var b = Math.ceil(0.40);
//console.log(b);          // nearest down integer(tam sayi) is 1
//
//var c = Math.ceil(5);
//console.log(c);          // nearest down integer(tam sayi) is 5
//
//var d = Math.ceil(5.1);
//console.log(d);          // nearest down integer(tam sayi) is 6
//
//var e = Math.ceil(-5.1);
//console.log(e);          // nearest down integer(tam sayi) is -5
//
//var f = Math.ceil(-5.9);
//console.log(f);          // nearest down integer(tam sayi) is -5



// Math.random() Method:

//// Return a random number between 0 and 1
//var a = Math.random();
//console.log(a);
//
//
//// Return a random number between 1 and 10
//var b = Math.random()*10+1;
//console.log(b);
//
//
//// Return a random number between 1 and 100
//var c = Math.random()*100+1;     // +1 mean start 1. if I want 10-100 
//console.log(c);                  // I should write *100+10
//
//
//// Return a random number between 0 and 1
//var d = Math.random()*13+6;
//console.log(d);




// Task 

//var a = Math.random()*200;
//if(a > 100){
//    var b = Math.round(a);
//    console.log(b + " is greater than 100")
//} else {
//    var c = Math.round(a);
//    console.log(c + " is NOT greater than 100")
//}


//var number=Math.floor(Math.random()*200+100);
//
////if(number>100){
//    console.log("random number "+number+ " is greater than 100.");
//////}else{
////    console.log("random number "+number+ " is not greater than 100.");
////}
//
//var a = Math.round(Math.random() * (200-100) + 100);
//console.log("random number "+a+ " is greater than 100.");