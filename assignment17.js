var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018 . Weather is 70 F degrees."
//
//
//// Answer 1
//
//var sentences = strVar.split(". ")
//console.log(sentences.length);
//
//
//
//// Answer 2
//
//var words = strVar.split(" ");
//console.log(words.length);
//
//
//
//// Answer 3
//
//var today = strVar.split("Today is ");
//var dateT = today[1].split(".");
//console.log(dateT[0]);
//
//    
//// Answer 4
//
//var weather = strVar.split("Weather is ");
//var fah = weather[1].split(" F degrees.");
//var cel = (fah[0] -32) / 1.8
//console.log(cel);
//
//
//
//// Answer 5
//
//var a = strVar.split(" ");
//var b = "";
//for(var i=0; i<a.length; i++){
//    b = b + a[i];
//}
//
//var notNum = "";
//var num = "";
//for(var i=0;i<b.length;i++){
//    if(isNaN(b[i])){
//        notNum = notNum + b[i];
//    } else {
//        num = num + b[i];
//    }
//}
//
//console.log(notNum);
//console.log(num);
//
//
//
//// Answer 6
//
//var a = strVar.replace("2 to 3 hours", "3 to 4 hours");
//console.log(a);
//
//
//
//
//// Answer 7
//
//var splitSentences = strVar.split(". ");
//var upC = splitSentences[0].toUpperCase() + ". ";
//var lowC = "";
//for(var i=1; i<splitSentences.length; i++){
//    lowC = lowC + splitSentences[i] + ". ";
//}
//
//console.log(upC.concat(lowC));
//
//
//
//
//// Answer 8
//
//var removeSpace = strVar.split(" ");
//var withoutSpace = "";
//for(var i=0; i< removeSpace.length; i++){
//    withoutSpace = withoutSpace + removeSpace[i];
//}
//
//console.log(withoutSpace);
//
//
//
//
//
// Answer 9 

////Separeting words 
//var x = strVar.split(" ");
//
//// Transform from array to string and reversing order
//var a = "";
//var b = x.length-1;
//for(var i=b; i>=0; i--){
//    a = a + x[i] + " ";
//}
//
//// Replacing "." and "," 
//var y = a.split(".");
//var c = "";
//for(var i=0; i<y.length; i++){
//    c = c + y[i] + " ";
//}
//
//var z = c.split(",");
//var d = "";
//for(var i=0; i<z.length; i++){
//    d = d + z[i] + " ";
//}
//console.log(d);
////
////





var array = [1,35,9,2,4,25,85];
var a = [];
var b = [];
for (var i=0; i<array.length; i++){
    if(array[i] < array[i+1]){
        a.push(array[i]);
    } else {
        b.push(array[i]);
    }
}
for(var i=0; i<b.length; i++){
    a.push(b[i]);
}
console.log(a);
