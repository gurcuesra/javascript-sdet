// Task 1 -> EXTRA SWEET LEVEL


//function work(string,number){
//    var a= "";
//    for(var i=1; i<= number; i++){
//        a = string.concat(a);
//    }
//    console.log(a);
//}
//
//work("Hi ",1);
//work("Hi ",2);
//work("Hi ",5);
//work("Hi ",8);


// Task 2 -> EXTRA SWEET LEVEL 

//var number = 6;
//function love6(num1,num2){
//    if(num1 == number || num2 == number || (num1 + num2) == number || (num1-num2) == number){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//love6(6,4);
//love6(4,5);
//love6(1,5);
//love6(12,6);



// Task 3 -> EXTRA SWEET

//function multi11(num){
//    if((num%11 == 0) || num%11 == 1){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//multi11(22);
//multi11(23);
//multi11(24);



// Task 4

//function deerPlay(temperature, isSummer){
//    if ((temperature >=60 && temperature <= 90 && isSummer==true) || (isSummer == false && temperature >=60 && temperature <= 100)){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//deerPlay(70,false);
//deerPlay(95,false);
//deerPlay(95,true);

// Ozzy's way:
//function deerPlay(temp,isSummer){
//    if(isSummer){
//        if(temp>60 && temp<100){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//    }else{
//        if(temp>60 && temp<90){
//            console.log("true");
//        }else{
//            console.log("false");
//        }
//        
//    }
//}
//
//deerPlay(70, false);
//deerPlay(95, false);
//deerPlay(95, true);


// Task 5

//function arrayCount9(array){
//    var counter=0;
//    for(var i=0; i<array.length; i++){
//        if(array[i]==9){
//            counter++;
//        }
//    }
//    console.log(counter);
//}
//
//arrayCount9([1,2,9]);
//arrayCount9([1,9,9]);
//arrayCount9([1,9,9,3,9]);
//arrayCount9([9,9,9,9,9,9,9,9,9,9]);




// Answer 7

function arrayX(array){
    var bool = false;
    var found;
    for(var i=0; i< array.length; i++){
        if(array.indexOf("x") == -1){
           found = "not found"; 
        } else if(array[i]== "x" && array[i+1]=="x"){
            bool = true;
        }
    }
    if(bool == true){
        console.log(true);
    } else {
        console.log(false);
    } 
    
    if(found == "not found"){
        console.log("not found");
    }
}


arrayX(["a","x","x","b","b"]);
arrayX(["a","x","a","x","a","x"]);
arrayX(["x","x","x","x","x"]);
arrayX(["a","a"]);







