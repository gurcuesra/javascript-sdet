// CLOSURES

//function calculateRectangleArea(length,width){
//    return length*width;
//}
//
//var room = calculateRectangleArea(10,10);



//function youSayGoodBye(){
//    console.log("Good Bye");
//    
//    function andISayHello(){      // There is no closure because, second function is SELF-CONTAINED.
//        console.log("Hello");
//    }
//    
//    return andISayHello;
//}
//
//var something = youSayGoodBye();
//something();


//Closure get involed when the return inner function is NOT SELF-CONTAINED.

//function stopWatch(){
//    var startTime = Date.now();
//    
//    function getDelay(){
//        var elepsedTime = Date.now() - startTime;
//        console.log(elepsedTime);
//    }
//    return getDelay;
//}
//
//var timer = stopWatch();
//timer();


//JS runtime keeps track of all of your variables, memory usage, references, and so. When it detects an inner function relies on variables stored by an outer function, it ensures those variables are available even if the outer function goes away.


// My example for closure:
//function x(name,age){
//    let a = new Date().getFullYear();
//    function y(birthYear){
//        birthYear = a - age;
//        console.log(birthYear);
//    }
//    return y;
//}
//
//let b = x("Esra", 28);
//b();




