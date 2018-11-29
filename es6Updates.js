// Variable Declarations with let and const

// ES5
//var name5 = "Mike Smith";   // Assigning
//var age5 = 23;
//name5 = "Mike Miller";      // Reassigning
//console.log(name5);


// ES6
//const name6 = "Mike Smith";   // Constant variable -> we CANNOT change 
//let age6 = 23;                // Let variable -> we can change
////name6 = "Mike Miller";
//age6 = 24;
//
//console.log(name6);
//console.log(age6);


// 2 important difference
//
// 1) difference
//const: if value is not changing
//let:   if value is changing
//
// 2) difference
//Variables declared with var in ES5 is function scoped(if i declared variable in function), and the variables declared with let and const in ES6 are block-scoped.  


// ES5

//function driverLicence5(passedTest){
//    if(passedTest){
//        var firstName = "Mike";
//        var yearOfBirth =1970;
////        console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");
//    }
//    
//    console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");
//    
//}
//
//// If i wrote the console outside of the function ->Giving error, because, var is only available in function scope.
//// console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");  
//
//driverLicence5(true);



// ES6 

function driverLicence6(passedTest){
    let firstName;
    const yearOfBirth =1970;
    if(passedTest){
        //let firstName;
        //const yearOfBirth =1970;
        firstName = "Mike";
        // yearOfBirth = 1980     //-> CANNOT reassign. Because, it is constant variable. 
          
         //Giving error-> because let declared outside of the if(so, outside of the {})
       //console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");
    }
    //if i declared the let and const inside of the if statements it gives error.
    console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");
}

// It gives error. Because of block-scope.
//console.log(firstName + ", born in " + yearOfBirth + " is now offically allowed to drive a car");

driverLicence6(true);


// if you declare variable with var you can read every portion. BUT, if you call the variable outside of the curly braces which is declared with const and let, it will give an error. Because let and const is block-scope. this mean, let and const only readable or active inside their block. So, let and const is local, var is global.


////////////////////////////////////////////////////////////

// ES5
//var i=23;
//for(var i=0;i<5;i++){     // i is redeclared
//    console.log(i);       // 0,1,2,3,4
//}
//
//console.log(i);           // 5


// ES6
//let i=23;
//for(let i=0;i<5;i++){     // declaring new i
//    console.log(i);       // 0,1,2,3,4
//}
//
//console.log(i);           // 23



// 
//let i=23;
//let sum =0;
//for(let i=0;i<5;i++){     // declaring new i
//    console.log(i);       // 0,1,2,3,4
//    sum = sum +i;         // 0+1+2+3+4      // let can calculate
//}
//
//console.log(i);           // 23
//console.log(sum);         // 10             // let can only calling its place



//let i=23;
//
//for(let i=0;i<5;i++){     // declaring new i
//    let sum =0;
//    console.log(i);       // 0,1,2,3,4
//    sum = sum +i;         // 
//    console.log(sum);     // 0,1,2,3,4
//}
//
//console.log(i);           // 23




/////////////////////////////////////////////////////////////////////

//// Strings
//
//var a = 10;
//var b = 10;
//
//// console.log("JavaScript first appeared " + (a+b) + " years ago.");
//
//
//// Template String -> on ES6, if we want to do concatination we should use
//
//console.log(`JavaScript first appeared ${a+b} years ago.`);



// Task 1

//let firstName = "Mike";
//let lastName = "Smith";
//const yearOfBirth = 1970;
//function calcAge(year){
//    return 2018 - year;
//}
//
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



// New String Methods coming with ES6

// endsWith() and startsWith()
//let fName = "Mike";
//let lName = "Smith";
//
//const n = `${fName} ${lName}`;
//
//console.log(n.startsWith("m"));   // -> false, because n starts with capital M.
//console.log(n.endsWith("Sm"));    // -> false, because n ends with th.
//console.log(n.endsWith("th"));    // -> true
//console.log(n.includes(" "));     // -> true
//console.log(n.includes("ik"));    // -> true
//
// repeat()
//console.log(fName.repeat(5));
//console.log(`${fName} `.repeat(5));     // -> it writes fName 5 times. 





// Arrow function:

//ES5

//var x = function(a){  // -> expression way
//    return a;
//}

// ES6

//let x = a => a;
//console.log(x(2));    // ->2


// if we do not have any parameters

// ES5
//var y = function(){
//    console.log("Hello");
//}


// ES6
//let y = () => {console.log("Hello");}
//
//y();


// If we have multiple parameters

// ES5
//var z = function(a,b,c){
//    return a+b+c;
//}
//console.log(z(1,2,4));   // -> 7


// ES6
//let k = (a,b,c) => a + b + c;
//
//console.log(k(1,2,4));   // -> 7


///////////////////////////////////////////////////////////

// map() Method
//
//var array1 = [1,4,9,16];
//
//                     // function
//const map1 = array1.map(x => x*2); // it is like for loop. it reads each element inside of the array and creates new
//                                   // array with function
//
//console.log(map1);   // -> Array [2,8,18,32]
//
//
// // Task 
//var materials = [
//    "Hydrogen",
//    "Helium",
//    "Lithium",
//    "Beryllium"
//];
//
//const mapMaterials = materials.map(x => x.length);
//
//console.log(mapMaterials);     // -> [8,6,7,9]
//
//
// Arrow functions CANNOT be used as a contructor and will throw an error when used with new
//
// var Foo = () => {};
// var foo = new Foo();  // Gives error -> "Foo is not constructor"
//
//
//Arrow functions do not have a prototype property
//var Foo = () => {};
//console.log(Foo.prototype);   // -> undefined




////////////////////////////////////////////////////////////

// Destructuring
// Destructuring is a JS expression that makes it possible to unpack values from array, or properties from objects, into distinct variables.

// ES5

//var john = ["John",26];
//var name = john[0];
//var age = john[1];


// ES6

//let [name,age] = ["john",26];      // -> there is no variable name. This method is DESTRUCTURING method.
//console.log(name);   // -> "john"
//console.log(age);    // -> 26
//
//const obj = {
//    firstName : "Mike",
//    lastName : "Smith"
//}
//
//const {firstName, lastName} = obj;  //-> obj coming from object name which is obj. This method is DESTRUCTURING.
//// this is same as: const firstName = obj.firstName;
//// this is same as: const lastName = obj.lastName;
//
//
//console.log(firstName);    // -> "Mike"
//console.log(lastName);     // -> "Smith"



// Destructuring method with funtion
//function calcAgeRetirement(year){
//    const age = new Date().getFullYear() - year;
//    return [age, 65-age];
//}
//
//const [age2,retirement] = calcAgeRetirement(1990);
//console.log(age2);          // 28
//console.log(retirement);    // 37
 


// Task -Agaly's mentoring

//
//var randomNum = Math.round(Math.random()*8+1);
//var array =Array(randomNum);
//
//for(var i=0; i< array.length; i++){
//    array[i] = Array(randomNum);
//}
//
//for(var i=0; i<array.length;i++){
//    for(var j=0; j<array[i].length;j++){
//        array[i][j] = Math.round(Math.random()*8+1);
//    }
//}
//
//console.log(array);
//
//
//function sum(arrayP){
//    var lt,lb,rt,rb;
//    var length = randomNum;
//
//    lt = arrayP[0][0];
//    lb = arrayP[length-1][0];
//    rt = arrayP[0][arrayP[0].length - 1];
//    rb = arrayP[length-1][arrayP[length-1].length - 1];
//    
//    return lt+lb+rt+rb;
//}
//
//console.log(sum(array));









