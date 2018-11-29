// Arrays

//var x = Array.from("JavaScript");
//console.log(x);         // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


// ES5
//var ages = [12,17,8,21,14,11];
//var full = ages.map(function(cur){
//    return cur >=18;
//})
//
//console.log(full);  //-> [false,false,false,true,false,false]
//
//console.log(full.indexOf(true));   //->3
//
//console.log(ages[full.indexOf(true)]);   // age[3] -> 21


// ES6
//findIndex() = returns the index of the first element in the array that satisfies the provided texting function.

//find() = returns the value of the first element in the array that satisfies the provided testing function.

//let ages = [12,17,8,21,14,11];
//console.log(ages.findIndex(cur => cur >= 18));   // ->3
//console.log(ages.find(cur => cur >= 18));        // ->21


// for ... of

//let myArray = [10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x);         // 11,21,31
//}

// Multidimensional array 
//let myMulti = [[1,2,3],[4,5,6]];
//for(let x of myMulti){
//    for(let y of x){
//        console.log(y);
//    }
//}



// Object
//let myObj = {
//    x:1,
//    y:2,
//    z:3
//}
//
//for(let a in myObj){
//    console.log(a);            // x,y,z -> property names
//    console.log(myObj[a]);     // 1,2,3 -> property values
//}

//let list = [4,5,6];
//for(let i in list){
//    console.log(i);           // -> index number of elements
//    console.log(list[i]);     // -> elements
//}
//
//
//for(let i of list){
//    console.log(i);  //-> elements 
//}



// Spread Operator

//let mid = [3,4];
//let arr = [1,2,mid,5,6];
//console.log(arr);        // -> [1,2,[3,4],5,6]
//
//let arr2 = [1,2,...mid,5,6];
//console.log(arr2);       // -> [1,2,3,4,5,6]  -> it spread it.

// ES5
//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//
//let sum1 = addFourAges(10,20,30,40);
//console.log(sum1);  // -> 100


// if i have those ages in an array, how can i pass it to function?

//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//
//let ages = [10,20,30,40];                        
//let sum = addFourAges(ages);  
//let sumSpread = addFourAges(...ages);
//console.log(sum);         // 10,20,30,40undefinedundefinedundefined
//console.log(sumSpread);   // 100


// Other way:
//let ages = [10,20,30,40];
//let sum = (a,b,c,d) => a+b+c+d;
//console.log(sum(...ages));   // ->100


// Rest Operator 

//function sumAll(...args){
//    let sum =0;
//    for(let arg of args){
//        sum+=arg;
//    }
//    
//    return sum;
//}
//
//console.log(sumAll(1));       // 1
//console.log(sumAll(1,2));     // 3
//console.log(sumAll(1,2,3));   // 6

//the big difference between spread and rest operator is the place in which we use each of them 
//
//Spread operator is used in function call. While the rest operator is used in the function declaration to exact an arbitrary number of parameters.

// Task

//function multiply(multiplier, ...theArgs){
//    return theArgs.map(function(element){
//        return multiplier * element;
//    });
//}
//
//var arr = multiply(2,1,2,3);
//console.log(arr);   // [2,4,6]


// ES6 -> arrow function way
//let multiply = (multiplier, ...theArgs) => theArgs.map(element => multiplier * element);
//
//let arr = multiply(2,1,2,3);
//console.log(arr);     // [2,4,6]




// MAP
//
// The map object hold the key-value pairs.Any value(both objects and primitive values) may be used as either a key or a value

//var myMap = new Map();
//
//myMap.set("keyString","value associated with a string");
//myMap.set("keyObj","value associated with keyObj");
//myMap.set("keyFunc","value associated with keyFunc");
//
//console.log(myMap.size);                  //->3
//console.log(myMap.get("keyString"));      //->value associated with a string
//console.log(myMap.get("keyObj"));         //->value associated with keyObj
//console.log(myMap.get("keyFunc"));        //->value associated with keyFunc



let question = new Map();
question.set("question", "what is the official name of the latest major JS version");
question.set(1,"ES5");
question.set(2,"ES6");
question.set(3,"ES2015");
question.set("correct",3);
question.set(true,"Correct answer is D");
question.set(false,"Wrong, try again");

console.log(question.get("question"));
console.log(question.size);

for(let [key,value] of question.entries()){
    console.log(`This is ${key}, and it is set to ${value}`);
}

//Result of the all consoles: 
//-----
//what is the official name of the latest major JS version
//7
//This is question, and it is set to what is the official name of the latest major JS version
//This is 1, and it is set to ES5
//This is 2, and it is set to ES6
//This is 3, and it is set to ES2015
//This is correct, and it is set to 3
//This is true, and it is set to Correct answer is D
//This is false, and it is set to Wrong, try again


//entries() method returns new iterator object that contains the [key,value] pairs of each element in the Map object in insertion order.






