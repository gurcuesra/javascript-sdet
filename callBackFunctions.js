//Functions are first class objects. Functions have the ability to:
//   1- Be assigned to variable
//   2- Have other functions in them 
//   3- Return other functions to be called later 
//
//A callback function is a function passed into another function as an argument.


//let x = function(){
//    console.log("I am called from inside a function");
//}
//
//
//let y = function(callback){
//    console.log("do smthg");      // -> do smthg
//    callback();                   // Calling some function. We can write other name instead of callback.
//                                  // -> I am called from inside a function
//} 
//
//y(x);



// OLD WAY:
//let calc = function(num1, num2, calcType){
//    if(calcType == "add"){
//        return num1 + num2;
//    } else if(calcType == "multiply"){
//        return num1*num2;
//    }
//}
//
//console.log(calc(2,3,"add"));


// CALLBACK WAY:
//let add = function(a,b){                 // Created library
//    return a+b;
//}
//
//let multiply = function(a,b){            // Created library 
//    return a*b;
//}
//
//let division = function(a,b){            // Created library 
//    return a/b;
//}
//
//let calc = function(num1,num2, callback){
//    if(typeof callback == "function"){   // Protection. it is checking the callback is function or not.
//        return callback(num1,num2);      // Calling the function
//    }
//    
//}
//
//console.log(calc(2,3,add));             // -> 5
//console.log(calc(2,3,multiply));        // -> 6
//console.log(calc(2,3,division));        // -> 0.66666666666
//
//
//console.log(calc(2,3,function(a,b){     // annoymous function
//    return a - b;
//}));                                    // -> -1




let students = [
    {name:"Mary",score:90,school:"East"},
    {name:"James",score:100,school:"east"},
    {name:"Steve",score:40,school:"East"},
    {name:"Gabe",score:90,school:"West"},
    {name:"Racheal",score:85,school:"East"},
    {name:"Smith",score:95,school:"West"}
];

let processStudents = function(data,callback){
    for(let i=0; i<data.length; i++){
        if(data[i].school.toLowerCase() == "east"){
            if(typeof callback == "function"){
                callback(data[i]);
            }
            
        }
    }
}

processStudents(students, function(x){
    if(x.score>60){
        console.log(x.name + " passed");
    }
});


// write a function that computes the total of the all the scores together for east and also account
// so how many students are in our east


let determineTotal = function(){
    let total=0;
    let count=0;
    
    processStudents(students,function(x){
        total = total+ x.score;
        count++;
    });
    console.log(`Total score: ${total} - Total count: ${count}`);
}

determineTotal();
