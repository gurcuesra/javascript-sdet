// CALLBACK
//function a(){
//    console.log("Hello");
//}
//
//function c(callback){
//    console.log("World");
//    callback(); 
//}
//
//c(a);


//function breakfast(washDish){
//    console.log("Breakfast");
//    washDish();
//}
//
//
//function makeTea(breakfast){
//    console.log("make tea");
//    breakfast(washDish); 
//}
//
//
//function washDish(){
//    console.log("wash dishes");
//}
//
//makeTea(breakfast);   //-> breakfast(washDish);
//
////console -> make tea 
////make tea has parameter -> breakfast()
////
////console -> breakfast
////breakfast has parameter -> b()-> washdish 
////
////console -> wash dishes




//function a(callb){
//    console.log(1);
//    callb(c);         // -> b(c);
//}
//
//
//function b(callc){
//    console.log(2);
//    callc(d);         // -> c(d);
//}
//
//
//function c(calld){
//    console.log(3);
//    calld();          // -> d();
//}
//
//
//function d(){
//    console.log(4);
//}
//
//
//a(b);

// Callback -> if you want to connect functions each other. 



// Handling setTimeout/ Asynchronous
function example(call){
    setTimeout(function(){
        console.log(12);
        call();
    },2000); 
}
example(ex2);



function ex2(){
    console.log(13);
}







