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


//var arrayLength = 3;
//
//var multiArray = Array(arrayLength);
//
//for(var i=0; i<multiArray.length; i++){
//    multiArray[i] = Array(arrayLength);
//    //multiArray[0] = Array(arrayLength);
//    //multiArray[1] = Array(arrayLength);
//    //multiArray[2] = Array(arrayLength);
//}

//// first
//multiArray[0][0] = "apple";
//multiArray[0][1] = "banana";
//multiArray[0][2] = "cherry";
//
//// second
//multiArray[1][0] = 5;
//multiArray[1][1] = 10;
//multiArray[1][2] = 15;
//
//// third
//multiArray[2][0] = [
//    "Esra", 
//    "Kartal" 
//];
//multiArray[2][1] = [
//    "Necati", 
//    "Kartal"
//];
//multiArray[2][2] = [
//    "Ali Ihsan", 
//    "Kartal"
//];

//console.log(multiArray);
//console.log(multiArray[2]);
//console.log(multiArray[2][2]);
//console.log(multiArray[2][2][0]);


//multiArray = [
//    ["apple","banana","cherry"],
//    [5,10,15],
//    [
//        ["Esra", "Kartal"],
//        ["Necati", "Kartal"],
//        ["Ali Ihsan", "Kartal"]
//    ]
//];
//
//for(var i=0; i<multiArray.length; i++){
//    var innerLength = multiArray[i].length;
//    for(var j=0; j<innerLength; j++){
//        console.log(multiArray[i][j])
//    }
//    
//}



var arrayLength=3
var multiArray=Array(arrayLength);


//multiArray[0]=Array(arrayLength);
//multiArray[1]=Array(arrayLength);
//multiArray[2]=Array(arrayLength);


for (var i=0;i<multiArray.length;i++){

	multiArray[i]=Array(arrayLength);
		
}
//first
multiArray[0][0]="apple";
multiArray[0][1]="banana";
multiArray[0][2]="cherry";

//second
multiArray[1][0]=2;
multiArray[1][1]=65;
multiArray[1][2]=12;

//third
multiArray[2][0]=["cat","mouse"];
multiArray[2][1]=["dog","bird"];
multiArray[2][2]=["lion","deer"];


//console.log(multiArray[2][2][1]);


multiArray=[
	["apple","banana","cherry"]
	[2,65,12]
	[["cat","mouse"],["dog","bird"],["lion","deer"]]
];

for(var i=0;i<multiArray.length;i++){
	
	for (var j=0;j<multiArray[i].length;j++){
		
		console.log(multiArray[i][j])
	}
	
}



















