//synchronous
//function first(){
//    console.log("first one");
//}
//
//function second(){
//    console.log("second one");
//}
//
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();


// asynchronous
//function first(){
//    setTimeout(function(){            // Normally, it should write firstly this function. But setTimeout is 
//        console.log("first one");
//    },1000);
//}
//
//function second(){
//    console.log("second one");
//}
//
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();



// callbacks    -> How to handle delaying time
//function first(callback){
//    setTimeout(function(){             
//        console.log("first one");       // read this as first
//        callback(third);                //-> second(third) -> go to second one
//    },3000);
//}
//
//function second(callback){
//    console.log("second one");          // read this as second
//    callback();                         //-> third() -> go to third one
//}
//
//function third(){
//    console.log("third one");           // read this as third
//}
//
//first(second);    // calling first function



//const async = function(number,callback){
//    const result = number + 2;
//    callback(result);
//}
//
//// we can put as much as function inside of the calling function as callback
//async(2,function(a){
//    console.log(a);                 // -> 4
//    async(a+20,function(b){
//        console.log(b);             // -> 4+ 20 + 2  = 26
//        async(b,function(result){
//            console.log(result);    // -> 8
//        })
//    })
//})    


//function prepareTea(){
//    setTimeout(function(){
//        console.log("1.Find Vessel");
//        
//        setTimeout(function(){
//            console.log("2.Put water,sugar and tea");
//            
//            setTimeout(function(){
//                console.log("3.Bring the mixture to a boil");
//                
//                setTimeout(function(){
//                    console.log("4.Filter the tea");
//                    
//                    setTimeout(function(){
//                        console.log("5.Serve the tea");
//                    },2000)
//                },2000)
//            },2000)
//        },2000)
//    },2000);
//}
//
//
//prepareTea();




/////////////////////////////////////////////////////////////////////////////////

// PROMISES

//let promiseToCleanTheRoom = new Promise(function(resolve, reject){
//    
//    // clean the room 
//    let isClean = true;
//    
//    if(isClean){
//        resolve("Clean");
//    } else{
//        reject("Not clean");
//    }
//})
//
//
//promiseToCleanTheRoom.then(function(fromResolve){
//    console.log("the room is: " + fromResolve);         // -> Clean -> If resolve is returning use then() method.
//}).catch(function(fromReject){
//    console.log("the room is: " + fromReject);          // -> Not clean -> If isClean is false.
//})




// Now we have dependencies 

//let cleanRoom = function(){
//    return new Promise(function(resolve,reject){
//        resolve(" Cleaned the room");
//    })
//}
//
//let removeGarbage = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg + " Removed Garbage");
//    })
//}
//
//let winIceCream = function(msg){
//    return new Promise(function(resolve, reject){
//        resolve(msg + " Won icecream")
//    })
//}


//cleanRoom().then(function(result){
//    return removeGarbage(result);     // new Promise object from removeGarbage
//}).then(function(result){
//    return winIceCream(result);       // new Promise object from winIceCream();
//}).then(function(result){
//    console.log(result + " finished");
//})


//cleanRoom().then(function(a){
//    return removeGarbage(a);
//}).then(function(b){
//    return winIceCream(b);
//}).then(function(c){
//    console.log(c + " finished");
//})









// with resolve
//const async = () => {
//    return new Promise((resolve,reject) => {
//        resolve("Everything is good");     // it reads all then() methods. Because, parameter is resolve
//    })
//};
//
//async()
//    .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=> {
//        console.log(data);
//        return 2;
//    })
//    .then((data)=>{
//        console.log(data);
//    })


// with reject
//const async = () => {
//    return new Promise((resolve,reject) => {
//        reject("Everything is good");       // it reads catch() methods. Because, parameter is reject
//    })
//};
//
//async()
//    .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=> {
//        console.log(data);
//        return 2;
//    })
//    .then((data)=>{
//        console.log(data);
//    })
//    .catch((data)=>{
//        console.log(data);       // going here because, parameter is reject
//    })


// with if-else
//const async = (number) => {
//    return new Promise((resolve,reject) => {
//        if(number == 4){
//            resolve("Everything is good");        // if number is 4 it reads only then() methods
//        } else {
//            reject("Everything is NOT good");     // else it reads only catch() method
//        }
//        
//    })
//};
//
//async(4)
//    .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=> {
//        console.log(data);
//        return 2;
//    })
//    .then((data)=>{
//        console.log(data);
//    })
//    .catch((data)=>{
//        console.log(data);
//    })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async / await    => ES7

//function doubleAfter2Seconds(x){
//    return new Promise((resolve,reject) => {
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}
//
//
////// without this:
////doubleAfter2Seconds(10).then((r)=>{
////    console.log(r);
////})
////
////
////let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30);
////console.log(sum);   // -> [object Promise][object Promise][object Promise]
//
//
//// PROMISE CHAIN
//function addPromise(x){
//    return new Promise(resolve => {
//        doubleAfter2Seconds(10).then((a)=> {                //  2 seconds
//            doubleAfter2Seconds(20).then((b) => {           // +2 seconds
//                doubleAfter2Seconds(30).then((c) =>{        // +2 seconds
//                    resolve(x+a+b+c);                       // After 6 seconds it gives the resolve
//                })
//            })
//        })
//    })
//}


//addPromise(10).then((sum)=>{
//    console.log(sum);
//})


// ES7 WAY:

//function doubleAfter2Seconds(x){
//    return new Promise((resolve,reject) => {
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}
//
//async function addAsync(x){
//    const a = await doubleAfter2Seconds(10);
//    const b = await doubleAfter2Seconds(20);
//    const c = await doubleAfter2Seconds(30);
//    return x+a+b+c;
//}
//
//addAsync(10).then((sum)=>{
//    console.log(sum);         // -> 130
//})



























