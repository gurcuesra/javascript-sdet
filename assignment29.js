//You are in the market to buy a car and visited a dealer
//
//1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.
//
//2- create a function that checks if the car state is VA
//
//3- print all the cars where the year is more than 2010 that belongs to va 
//
//4- print total mileage of the cars that belongs to va 
//
// 
//
//Hint: Use callbacks



// 1)
//let dealer = [
//    {make: "Toyota", model: "Corolla", year:2009, mileage: 130000, state: "WA"},
//    {make: "Toyota", model: "Prius", year:2015, mileage: 100000, state: "WA"},
//    {make: "Subaru", model: "Ascent", year:2019, mileage: 0, state: "VA"},
//    {make: "Honda", model: "Pilot", year:2008, mileage: 200000, state: "VA"},
//]
//
//
//let arrayCallback = function(data,callback){
//    for(let i=0; i<data.length;i++){
//        if(typeof callback == "function"){
//            callback(data[i]);
//        }
//    }
//}
//
//
//// 2)
//let checkVA = function(a){
//    if(a.state == "VA"){
//        console.log(`${a.make} ${a.model}'s state is: ${a.state}`); 
//    } else{
//        console.log(`${a.make} ${a.model}'s state is NOT VA. It is: ${a.state}`);
//    }
//}

//arrayCallback(dealer,checkVA);    
//    
//
//
//// 3)
//let yearState = function(b){
//    if(b.state == "VA" && b.year > 2010){
//        console.log(`${b.make} ${b.model} year is: ${b.year} ,and state is: ${b.state}`);
//    } else if(b.state == "VA" && b.year < 2010){
//        console.log(`${b.make} ${b.model} state is: ${b.state}. But, year is NOT more than 2010. Its year is: ${b.year}`);
//    } else if(b.state != "VA" && b.year > 2010){
//        console.log(`${b.make} ${b.model} year is: ${b.year}. But, state is NOT VA. Its state is: ${b.state}`);
//    } else {
//        console.log(`${b.make} ${b.model} year is NOT more than 2010. Its year is: ${b.year}. And, state is NOT VA. Its state is: ${b.state}`);
//    }
//}
//
//
//arrayCallback(dealer,yearState);
//
//
//
//// 4)
//let total=0;
//let mileageState = function(c){
//    if(c.state == "VA"){
//        total += c.mileage;
//        console.log(`${c.make} ${c.model} state is VA, and mileage is: ${c.mileage}`);
//    } else {
//        console.log(`${c.make} ${c.model} state is NOT VA, its state is: ${c.state} and mileage is: ${c.mileage}`);
//    }
//}
//
//arrayCallback(dealer,mileageState);
//
//console.log(`Total mileage is: ${total}. It belongs VA.`);





/*
You are in the market to buy a car and visited a dealer

1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.

2- create a function that checks if the car state is VA

3- print all the cars where the year is more than 2010 that belongs to va 

4- print total mileage of the cars that belongs to va 

 

Hint: Use callbacks
*/


//1) 

let dealer = [
    {make: "Toyota", model: "Corolla", year:2009, mileage: 130000, state: "WA"},
    {make: "Toyota", model: "Prius", year:2015, mileage: 100000, state: "WA"},
    {make: "Subaru", model: "Ascent", year:2019, mileage: 0, state: "VA"},
    {make: "Honda", model: "Pilot", year:2008, mileage: 200000, state: "VA"}
]

let arrayF = function(data,callback){
    for(var i=0; i<data.length;i++){
        if(typeof callback == "function"){
            callback(data[i]);
        }
    }
}

//2)
let checkVA = function(objectName){
   if(objectName.state == "VA"){
       console.log(`${objectName.make} ${objectName.model}'s state is VA`);
   } 
}
arrayF(dealer,checkVA);


//3)
let checkYear = function(objectName){
    if(objectName.year >2010 && objectName.state == "VA"){
        console.log(`${objectName.make} ${objectName.model}'s year is: ${objectName.year} and its belongs to VA`);
    }
}

arrayF(dealer,checkYear);


//4)
let total=0;
let totalMileage = function(objectName){
    if(objectName.state == "VA"){
      return total+= objectName.mileage;
    }
   
}

arrayF(dealer,totalMileage);
console.log(`Total mileage of VA cars is: ${total}`);

















