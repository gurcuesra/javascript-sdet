// Question 2

//var obj = {
//    name: "Donald",
//    lastName: "Trump",
//    info: "CRAZY"
//};
//
//console.log(obj.info);





// Question 3

//var obj = {
//    name: "Mike",
//    lastName: "Smith"
//};
//
//obj.age = 30;
//console.log(obj);



// Question 4

//var obj = {
//    name: "Mike",
//    lastName: "Smith",
//    age: 30
//}; 
//
//obj.age = 28;
//console.log(obj);





// Question 5

//var obj = {
//    name: "Mike",
//    lastName: "Smith",
//    age: 30,
//    password: 123456
//}; 
//
//delete obj.password;
//console.log(obj);





// Question 6

//var obj= {
//    name: "Mike",
//    lastName: "Smith",
//    age: 30,
//    birthYear: function(){
//        return 2018 - this.age;
//    }
//};
//
//console.log(obj.birthYear());





// Question 7

//var obj= {
//    name: "Mike",
//    lastName: "Smith",
//    age: 30
//};
//
//for (var x in obj){
//    console.log(obj[x]);
//}




// Question 8

//function info(name,lastName,age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age = age;
//}
//
//var obj = new info("Mike", "Smith", 30);
//
//console.log(obj.age);




// Question 9

//function info(name,lastName,age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age = age;
//    this.birthYear = function(){
//        return 2018 - this.age;
//    }
//}
//
//var obj = new info("Mike", "Smith", 30);
//
//console.log(obj.birthYear());







// Question 10

function cars(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = function(mAge){
        if(mAge <= 1000 && this.year >= 2018){
            console.log("Your car is new!!!")
        } else if(mAge <= 1000 && this.year < 2018){
            console.log("You are a good user!!!")
        } else if(mAge > 1000 && this.year >= 2018){
            console.log("I think, you are an UBER driver")
        } else {
            console.log(mAge);
        }
    };
    
}

var carUser1 = new cars("Toyota", "Prius", 2018);

carUser1.mileage(2000);


