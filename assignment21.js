//// Answer 1
//
//function sameStarChar(str){
//    var bool = false;
//    for (var i=0; i<str.length; i++){
//        var a = str.charAt(i);
//        if(a == "*" && (str.charAt(i-1) == str.charAt(i+1))){
//            bool = true;
//        }
//    }
//    
//    if(bool){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//sameStarChar("xy*yzz")   //→ true
//sameStarChar("xy*zzz")   //→ false
//sameStarChar("*xa*az")   //→ true
//
//
//
//
//
//// Answer 2
//
//function countTriple(str){
//    var count = 0;
//    for(var i=0; i< str.length; i++){
//        if(str.charAt(i) == str.charAt(i+1) && str.charAt(i) == str.charAt(i+2)){
//            count++;
//        }
//    }
//    console.log(count);
//}
//
//countTriple("abcXXXabc")     //→ 1
//countTriple("xxxabyyyycd")   //→ 3
//countTriple("a")             //→ 0
//
//
//
//
//// Answer 3
//
//function gHappy(str){
//    var bool = false;
//    var count =0;
//    for(var i=0; i<str.length; i++){
//        if((str.charAt(i) == "g" && str.charAt(i+1) == "g")){
//            bool =true;
//        } else if(str.charAt(i) == "g" && str.charAt(i+1) != "g" && str.charAt(i-1) != "g"){
//            bool = false;
//        }
//        
//    }
//    if(bool){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//gHappy("xxggxx")     //→ true
//gHappy("xxgxx")      //→ false
//gHappy("xxggyygxx")  //→ false
//
//
//
//
//// Answer 4
//
//function equalIsNot(str){
//    var countIs=0;
//    var countNot=0;
//    for(var i=0; i< str.length;i++){
//        if(str.charAt(i)=="i" && str.charAt(i+1) =="s"){
//            countIs++;
//        }
//        if(str.charAt(i) == "n" && str.charAt(i+1) == "o" && str.charAt(i+2) == "t"){
//            countNot++;
//        }
//    }
//    
//    if(countIs == countNot){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//equalIsNot("This is not")         //→ false
//equalIsNot("This is notnot")      //→ true
//equalIsNot("noisxxnotyynotxisi")  //→ true
//
//
//
//// Answer 5
//
//function getSandwich(str){
//    var count =0;
//    for(var i=0; i<str.length; i++){
//        if(str.substring(i, i+5) == "bread"){
//            count++;
//        }
//    }
//    if(count == 2){
//        var a = str.split("bread");
//        console.log(a[1]);
//    } else {
//        console.log("");
//    }
//}
//
//getSandwich("breadjambread")      //→ "jam"
//getSandwich("xxbreadjambreadyy")  //→ "jam"
//getSandwich("xxbreadyy")          //→ ""
//
//
//
//
//
//// Answer 6
//
//function endOther(str1,str2){
//    if(str2.toLowerCase().includes(str1.toLowerCase()) || str1.toLowerCase().includes(str2.toLowerCase())){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//endOther("Hiabc", "abc")    //→ true
//endOther("AbC", "HiaBc")    //→ true
//endOther("abc", "abXabc")   //→ true
//
//
//
//// Answer 7
//
//function seeColor(str){
//    var a = "red";
//    var b = "blue";
//    if(str.substring(0,3) == a){
//        console.log(a);
//    } else if(str.substring(0,4) == b){
//        console.log(b);
//    } else{
//        console.log("");
//    }
//}
//
//seeColor("redxx")        //→ "red"
//seeColor("xxred")        //→ ""
//seeColor("blueTimes")    //→ "blue"
