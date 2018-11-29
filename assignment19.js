//// Answer 1
//
//function frontAgain(str){
//    if(str.substr(0,2) == str.substr(str.length-2,2)){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//frontAgain("edited");  //->true
//frontAgain("edit");    //->false
//frontAgain("ed");      //->true
//
//
//
//// Answer 2
//
//function countHi(str){
//    var count =0;
//    for(var i=0; i< str.length; i++){
//        if(str[i] == "h" && str[i+1] == "i"){
//           count++; 
//        }
//        
//    }
//    console.log(count);
//}
//
//countHi("abc hi ho")  //→ 1
//countHi("ABChi hi")   //→ 2
//countHi("hihi")       //→ 2



// Second way:

//function countHi(str){
//    var count =0;
//    for(var i=0; i< str.length; i++){
//        if(str.charAt(i) == "h" && str.charAt(i+1) == "i"){
//           count++; 
//        }
//        
//    }
//    console.log(count);
//}
//
//countHi("abc hi ho")  //→ 1
//countHi("ABChi hi")   //→ 2
//countHi("hihi")       //→ 2

//// Answer 3
//
//function catDog(str){
//    var countCat =0;
//    var countDog =0;
//    for(var i=0; i< str.length; i++){
//        if(str[i]=="c" && str[i+1] == "a" && str[i+2] == "t"){
//           countCat++; 
//        }
//        if(str[i]=="d" && str[i+1] == "o" && str[i+2] == "g"){
//           countDog++; 
//        }
//    }
//
//    if(countCat == countDog){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//catDog("catdog")         //→ true
//catDog("catcat")         //→ false
//catDog("1cat1cadodog")   //→ true
//
//
//
//
//// Answer 4
//
//function doubleChar(str){
//    var b = "";
//    for(var i=0; i<str.length; i++){
//        b= b + str[i].concat(str[i])
//    }
//    console.log(b);
//}
//
//doubleChar("The")      //→ "TThhee"
//doubleChar("AAbb")     //→ "AAAAbbbb"
//doubleChar("Hi-There") //→ "HHii--TThheerree"
//
//
//
//
//// Answer 5
//
//function endsLy(str){
//    if(str.substr(-2,2) == "ly"){
//        console.log(true);
//    }else {
//        console.log(false);
//    }
//}
//
//endsLy("oddly")    //→ true
//endsLy("y")        //→ false
//endsLy("oddy")     //→ false
//
//
//
//// Answer 6
//
//function withouEnd2(str){
//    console.log(str.substring(1,str.length-1));
//}
//
//
//withouEnd2("Hello")  //→ "ell"
//withouEnd2("abc")    //→ "b"
//withouEnd2("ab")     //→ ""
//
//
//
//// Answer 7
//
//function hasBad(str){
//    if(str.indexOf("bad") == 0 || str.indexOf("bad") == 1){
//        console.log(true);
//    } else {
//        console.log(false);
//    }  
//}
//
//
//hasBad("badxx")    //→ true
//hasBad("xbadxx")   //→ true
//hasBad("xxbadxx")  //→ false
//
//
//
//
//// Answer 8
//
//function atFirst(str){
//    if(str.length >= 2){
//        console.log(str.substr(0,2))
//    } else{
//        console.log(str.concat("@"));
//    }
//}
//
//atFirst("hello")  //→ "he"
//atFirst("hi")     //→ "hi"
//atFirst("h")      //→ "h@"


