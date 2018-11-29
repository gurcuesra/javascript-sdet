// Pass-By-Value: 

//var age = 7;
//
//function addOne(x){
//    x = x + 1;
//    console.log(x);
//}
//
//addOne(age);
//console.log(age);



// Second example:

//function makeTea(cups,tea){
//    console.log("Brewing " + cups + " cup of " + tea);
//}
//
//makeTea(3);      // -> 3 , undefined
//makeTea(3, "Early Grey", " hey ma!", 42);   // -> 3, Early Grey (doesn't read others!!!)



// RETURN STATEMENT 

//function calculateArea(width, height){
//    var area = width * height;
//    return area;
//}
//
//var wallOne = calculateArea(3,5);
//var wallTwo = calculateArea(8,5);
//
//console.log(wallOne);
//console.log(wallTwo);



// Second example:

//function calculateArea(width, height){
//    var area = width * height;
//    return area;
//}
//
//
//function isChecked(){
//    if(calculateArea(5,8) > 15){
//        console.log("valid");
//    } else {
//        console.log("no valid");
//    }
//}
//
//isChecked();




// Second way: 

//function calculateArea(width, height){
//    var area = width * height;
//    return area;
//}
//
//var x = calculateArea(5,8);
//
//
//function isChecked(){
//    if(x > 15){
//        console.log("valid");
//    } else {
//        console.log("no valid");
//    }
//}
//
//isChecked();


// Other thing: 

//function calculateArea(width, height){
//    var area = calculateSomeNumber(3,4);
//    return area;
//}
//
//var x = calculateArea(5,8);
//
//function calculateSomeNumber(num1,num2){
//    return num1 + num2;
//}
//
//console.log(x);
//
//function isChecked(){
//    if(x > 15){
//        console.log("valid");
//    } else {
//        console.log("no valid");
//    }
//}
//
//isChecked();




// How to return a value from function?:

//function calculateArea(r){
//    var area;
//    if(r<=0){
//        return 0;
//    } else {
//        area = Math.PI*r*r;
//        return area;
//    }
//}
//
//var radius = 5.2;
//var theArea = calculateArea(radius);



// Task 1

//function values(val1, val2){
//    var x = val1 + val2;
//    return x;
//}
//
//var a = values(8,4);
//var b = values(5,9);
//
//console.log(a);
//console.log(b);



// Multiple return:


//function calculateAge(yearBirth){
//    var x = 2018 - yearBirth;
//    return x;
//}
//
//function yearsUntilRetirement(name,year){
//    var retire = 65 - calculateAge(year);
//    console.log(name + " retires in " + retire + " years.");
//}
//
//yearsUntilRetirement("Esra", 1990);


// JavaScript function overloading:

//function addTen(a){
//    return a + 10;
//}
//
//function addTen(a,b){
//    return a + b + 10;
//}
//
//var result = addTen(100);
//console.log(result);   // -> Result is NaN. Because of a+b


// Second way: 

//function addTen(a,b){
//    return a + b + 10;
//}
//
//function addTen(a){
//    return a + 10;
//}
//
//var result = addTen(100);
//console.log(result);


// How to return multiple values from function? :

//function getSize(width, height, depth){
//    var area = width * height;
//    var volume = width * height * depth;
//    var sizes = [area, volume];
//    return sizes;
//}
//
//var areaOne = getSize(3,2,3)[0];
//var volumeOne = getSize(3,2,3)[1];
//
//console.log(areaOne);
//console.log(volumeOne);




// Global Variable or Global Scope:

//var avatar;       // If it declared to outside of the function
//var levelThreshold = 1000; //  it would be GLOBAL VARIABLE.
//
//function getScore(points){
//    var score;
//    var i=0;
//    while(i<levelThreshold){
//        // code here.
//        i = i+1;
//    }
//    return score;
//}


// Function Statements vs EXPRESSION:

//// Function:                       
//function add(a,b) {
//    return a + b;
//}
//
//
//// Expression:
//var add = function(a,b){
//    return a + b;
//}
//
//
//var result = add(10,20);
//console.log(result);


// Task

var area = function(width, height){
    return width * height;
}

var x = area(5, 8);
console.log(x);








