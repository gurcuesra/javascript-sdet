// Answer 1

//var numbers = [];
//for(var i=1; i <= 1000;i++){
//    numbers.push(i);
//}
//
//
//for(var i=1; i<=numbers[99];i++){
//    var a="";
//    for(var p=1; p<=10; p++){
//        a= a + numbers[0]++ + " ";
//    }
//    console.log(a);
//}
//
//console.log("");





// Answer 2

//var array = [];
//for(var i=1; i<=10;i++){
//    array.push(i);
//    var multi = (array[0]++) * 19;
//    console.log(multi);
//}

//console.log("");



// Answer 3

//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//
//var bool = false;
//for(var i=0; i < arr.length; i++){
//    if(arr[i] == "B"){
//        console.log("B found");
//    }
//    
//    if (arr[i] == "E") {
//        bool = true;
//    } else {
//        bool = false;
//    }
//}
//
//if(bool == true) {
//    console.log("E found");
//} else {
//    console.log("E Not found")
//}
//
//
//console.log("");


// Second way:

//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//
//var ask = prompt("Please write a letter with capital!");
//var bool = false;
//for(var i=0; i < arr.length; i++){
//    
//    if (arr[i] == ask) {
//        bool = true;
//    }
//}
//
//if(bool == true) {
//    console.log(ask + " found");
//} else {
//    console.log(ask + " not found")
//}

// Answer 4

//var scores = [51,85,32,0,98,157,82,101,64,249];
//
//var counter_1,counter_2,counter_3;
//counter_1=0;
//counter_2=0;
//counter_3=0;
//for(var i=0; i<scores.length; i++){
//    if (scores[i] >= 50 && scores[i] < 100) {
//        counter_1++;
//    } else if (scores[i] >= 100 && scores[i] < 200) {
//        counter_2++;
//    } else if (scores[i] >= 200) {
//        counter_3++;
//    }
//    
//}
//
//console.log("Half-centuries: " + counter_1);
//console.log("Centuries: " + counter_2);
//console.log("Double-centuries: " + counter_3);

//
//
//console.log("");




// Answer 5

//var fibonacci = [];
//
//var ask = parseInt(prompt("Please enter a limit for Fibonacci numbers Array..."));
//
//var x = 0, y = 1, z;
//fibonacci.push(x);
//fibonacci.push(y);
//for (var i=2; i<ask ; i++) {
//    z = x + y;
//    x = y;
//    y = z;
//    fibonacci.push(z);
//}
//
//// First way for printing elements:
//console.log(fibonacci.toString());
//
//
//// For loop way for printing elements
//for(var p=0; p<fibonacci.length; p++){
//    console.log(fibonacci[p]);
//    console.log("");
//}
//
//// Third way:
//console.log(fibonacci);


var n=15;
var Fibonachi=Array(n);
Fibonachi[0]=0;
Fibonachi[1]=1;
for(var i=[2];i<Fibonachi.length;i++){
Fibonachi[i]=Fibonachi[i-1]+Fibonachi[i-2];
    
}
for(var p=0; p<Fibonachi.length; p++){
    console.log(Fibonachi[p]);
}


    





