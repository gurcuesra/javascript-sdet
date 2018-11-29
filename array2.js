// shift() Method - removes FIRST element

//var myFish = ["angel", "clown", "mandarin", "surgean"];
//
//var shifted = myFish.shift();
//
//// console.log(shifted);
//for(var i=0; i<myFish.length; i++){
//    console.log(myFish[i]);
//}
//
//var x = Array(10);
//console.log(x.length);
//console.log(x[0]);


// Task

//var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
//while (names.length != 0){
//    console.log("Shifted: " + names.shift());
//    
//}console.log(names);

// Ozzy's way:

//while (i=names.shift() !== undefined){
//    console.log(i);
//}
//console.log(names);




// splice() Method

//var scores = [1,2,3,4,5];
//scores.splice(0,3);
//console.log(scores);



// Task

//var myFish = ["angel", "clown", "mandarin", "sturgeon"];
//
//// 1-
//myFish.splice(2,0,"drum");
//console.log(myFish);
//
//// 2-
//myFish.splice(3,1);
//console.log(myFish);
//
//
//// 3-
//myFish.splice(2,1,"trumpet");
//console.log(myFish);
//
//// 4-
//myFish.splice(0,2,"parrot", "anemone", "blue");
//console.log(myFish);
//
//// 5-
//myFish.splice(2,2);
//console.log(myFish);
//
//// 6-
//myFish.splice(1,1);
//console.log(myFish);




// slice()-Method

// Task

//var animals =["dog","cat", "monkey", "donkey", "dino", "elephant"];
//
//// 1-
//console.log(animals.slice(0));
//
//// 2- 
//console.log(animals.slice(1));
//
//// 3-
//console.log(animals.slice(5));
//
//// 4- 
//console.log(animals.slice(4));
//
//// 5- 
//console.log(animals.slice(0,1));
//
//// 6- 
//console.log(animals.slice(0,2));
//
//// 7-
//console.log(animals.slice(6));
//
//// 8-
//console.log(animals.slice(2,3));
//
//// 9-
//console.log(animals.slice(2,5));




// indexOf() and lastIndexOf() -


// indexOf()- first index at which given a element can be found in the array, or -1 if it is not present.

//var scores = [10,20,30,10,40,20];
//
//console.log(scores.indexOf(10));
//console.log(scores.indexOf(30));
//console.log(scores.indexOf(50));
//console.log(scores.indexOf(20));
//
//
//console.log(scores.indexOf(10,2));
//console.log(scores.indexOf(30,3));
//console.log(scores.indexOf(20,-1));
//console.log(scores.indexOf(20,-5));


// Task 

//var beasts = ["ant", "bison", "camel", "duck", "bison"];
//
//// 1-
//console.log(beasts.indexOf("bison"));
//
//// 2- 
//console.log(beasts.indexOf("bison", 2));
//
//// 3-
//console.log(beasts.indexOf("giraffe"));
//
//// 4- 
//console.log(beasts.indexOf("camel",-3));



// lastIndexOf() Method -> it start to the last index for checking the element

//var scores = [10,20,30,10,40,20];
//console.log(scores.lastIndexOf(10));  
//// what is the last index of 10 -> 3
//
//console.log(scores.lastIndexOf(20));
//console.log(scores.lastIndexOf(50));

//var numbers = [2,5,9,2];
//
//console.log(numbers.lastIndexOf(2)); // 3
//console.log(numbers.lastIndexOf(7));  // -1
//console.log(numbers.lastIndexOf(2,3));  // 3
//console.log(numbers.lastIndexOf(2,2));  // 0
//console.log(numbers.lastIndexOf(2,-2));  //0
//console.log(numbers.lastIndexOf(2,-1)); // 3




// sort() Method -> sort of the elements


//var months = ["March", "Jan", "Feb", "Dec"];
//months.sort();
//console.log(months);
//
//
//var array1 = [1,30,4,21];
//array1.sort();
//console.log(array1);
//
//var animals = ["Cat", "ant", "Bee", "elephant", "Ant"];
//animals.sort();
//console.log(animals);

//var mixArray = ["cat", "Ant", 3, "elephant", "Bee", 67];
//mixArray.sort();
//console.log(mixArray);
//
//
//
//console.log(mixArray.lastIndexOf(67,4));


// Task

//var indices = [];
//var array = ["a", "b", "a","c","a", "d"];
//var element = "a";
////for(var i=0; i<array.length; i++){
////    if(array[i] == element){
////        indices.push(i);
////    }
////    
////}console.log(indices);
//
//// Ozzy's way:
//
//var idx = array.indexOf(element);
//while(idx !=-1){
//    indices.push(idx);
//    idx = array.indexOf(element,idx+1);
//}
//console.log(indices);



// Kanat's mentoring -> sorting the numbers
//var points = [40,100,1,5,25,10];
//points.sort(function(a,b){return a-b});
//console.log(points);     // -> [1, 5, 10, 25, 40, 100]




// Multidimensional Array:

//var myArray = [];
//var myArray = ["Mike", "Smith", 20];
//
//myArray[0] = ["x", "y", "z"];
//myArray[1] = ["a", "b"];


//var activities = [
//    ["Work", 9],
//    ["Eat", 2],
//    ["Commute", 2],
//    ["Play Game", 2],
//    ["Sleep", 7]
//];


// Accesing an element of the multidimensional element
//console.log(activities[2][0]);


//var myArray = [];
//
//var myArray = [ 
//    ["x", "y", "z"],
//    ["a", "b","c"]
//];
//console.log(myArray[1][2]); // c
//console.log(myArray[0][1]); // y



// Iteration with Multidimensional Array

//var activities = [
//    ["Work", 9],
//    ["Eat", 2],
//    ["Commute", 2],
//    ["Play Game", 2],
//    ["Sleep", 7]
//];
//
//
//for(var i=0; i<activities.length; i++){
//    var innerArrayLength = activities[i].length;
//    for(var j=0; j<innerArrayLength; j++){
//        console.log("[" + i + "," + j + "]=" + activities[i][j]);
//    }
//}






















