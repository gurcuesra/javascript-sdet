// Answer 1


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


// Answer 2 

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



// Answer 3

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



// Answer 4
//
//function dateFashion(yourStyle, dateStyle){
//    if (yourStyle >= 8 || dateStyle >= 8){
//        console.log(2);
//    } else if (yourStyle <= 2 || dateStyle <= 2){
//        console.log(0);
//    } else {
//        console.log(1);
//    }
//}
//
//dateFashion(5, 10);   // → 2
//dateFashion(5, 2);    // → 0
//dateFashion(5, 5);    // → 1


// Answer 5

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



// Answer 6
//
//function cigarParty(numberCigar, isWeekend){
//    
//    if(isWeekend){
//        if(numberCigar >= 40){
//            console.log(true);
//        } else{
//            console.log(false);
//        }
//    } else {
//        if(numberCigar>=40 && numberCigar <=60){
//            console.log(true);
//        } else {
//            console.log(false);
//        }
//    }
//}
//
//
//cigarParty(30, false);  //→ false
//cigarParty(50, false);  //→ true
//cigarParty(70, true);   //→ true


// Answer 7

//function arrayX(array){
//    var bool = false;
//    var found;
//    for(var i=0; i< array.length; i++){
//        if(array.indexOf("x") == -1){
//           found = "not found"; 
//        } else if(array[i]== "x" && array[i+1]=="x"){
//            bool = true;
//        }
//    }
//    if(bool == true){
//        console.log(true);
//    } else {
//        console.log(false);
//    } 
//    
//    if(found == "not found"){
//        console.log("not found");
//    }
//}
//
//
//arrayX(["a","x","x","b","b"]);
//arrayX(["a","x","a","x","a","x"]);
//arrayX(["x","x","x","x","x"]);
//arrayX(["a","a"]);



// Answer 8

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



// Answer 9
//
//function caughtSpeeding(speed, isBirthday){
//    
//    if(isBirthday){
//        if (speed <= 65){
//            console.log(0);
//        } else if (speed >= 66 && speed <= 85){
//            console.log(1);
//        } else if (speed >= 86){
//            console.log(2);
//        } 
//    } else {
//        if (speed <= 60){
//            console.log(0);
//        } else if (speed >= 61 && speed <= 80){
//            console.log(1);
//        } else if (speed >= 81){
//            console.log(2);
//        }    
//    }  
//}
//
//caughtSpeeding(60, false);  //→ 0
//caughtSpeeding(65, false);  //→ 1
//caughtSpeeding(65, true);   //→ 0


// Answer 10

//var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//
//function alarmClock(indexOfDay, isVacation){
//    if(isVacation){
//        if(indexOfDay >= 1 && indexOfDay <= 5){
//            console.log("10:00");
//        } else {
//            console.log("off");
//        }
//            
//    } else {
//         if(indexOfDay >= 1 && indexOfDay <= 5){
//            console.log("7:00");
//        } else {
//            console.log("10:00");
//        } 
//    }
//    
//}
//
//alarmClock(1, false);
//alarmClock(5, false); 
//alarmClock(0, false);
//alarmClock(2,true);
//alarmClock(7,true);




