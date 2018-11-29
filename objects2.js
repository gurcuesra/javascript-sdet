// Review object class yesterday(08.13.2018)
//var car = {
//    make: "Honda",
//    model: "Civic",
//    year: 2000,
//    mileage: [35000,20000,10000],
//    started: false,
//    
//    start: function(){
//        // "this" keyword
//        this.started = true;
//    },
//    
//    //Adding method inside of the object
//    drive: function(){
//        // "this" keyword
//        if(this.started){
//            console.log("I am driving")
//        }else {
//            console.log("I am not driving")  
//        }
//    }
//};
//
//// Accesing property
//console.log(car.make);
//console.log(car.mileage[2]);
//
//// Updating property
//car.year = 2018;
//console.log(car);
//
//// Adding new property
//car.color = "Red";
//console.log(car);
//
//// Deleting a property
//delete car.color;
//console.log(car);
//
//// "this" keyword
//car.start();
//
//// Calling method
//car.drive();


//// Empty object
//var car = {};
//
//// How to boot/create object
//car.make = "Honda";
//car.model = "Civic";
//car.mileage = 20000;
//car.color = "red";
//
//car.drive = function(){
//    console.log("Driving");
//}
//
//console.log(car);
//
//
//// for in method - writing each property's values
//for(var pr in car){
//    console.log(car[pr]);
//}


// New Topic Start (08.14.2018)
// Another method for creating object
//var car = new Object();  // it is same as -> var car = {};
//car.make = "Honda";
//car.model = "Civic";
//car.mileage = 20000;
//car.color = "red";
//
//car.drive = function(){
//    console.log("Driving");
//}
//
//console.log(car);



// Object Constructor Function
//function Hotel(name, rooms, booked){
//    this.name = name;
//    this.rooms = rooms;
//    this.booked = booked;
//}
//
//var quayHotel = new Hotel("Quay", 40, 25);
//var parkHotel = new Hotel("Park", 120, 77);
//console.log(quayHotel);
//console.log(parkHotel);



// Task 1

//function inform(name, lastName, age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age = age;
//}
//
//var obj1 = new inform("John","Mike",20);
//console.log(obj1);
//
//var obj2 = new inform("Mike","John",25);
//console.log(obj2);
//
//var obj3 = new inform("Kevin","Eric",30);
//console.log(obj3);
//
//var obj4 = new inform("Eric","Kevin",32);
//console.log(obj4);
//
//// Accesing property's value
//console.log(obj1.name + " " + obj1.lastName);
//console.log(obj2.name);
//console.log(obj3.name);
//console.log(obj4.name);




// Adding a property and method to a Constructor
// Adding property



// Task
//function Rectangle(width, height){
//    this.width = width;
//    this.height = height;
//    this.area = function(){
//        console.log( this.width * this.height);
//    }
//}
//
//var r1 = new Rectangle(5,4);
//r1.area();
//
//var r2 = new Rectangle(6,5);
//r2.area();


// second way:

//function Rectangle(width, height){
//    this.width = width;
//    this.height = height;
//    this.area = function(){
//        return this.width * this.height;
//    }
//}
//
//var r1 = new Rectangle(5,4);
//console.log(r1.area());
//
//var r2 = new Rectangle(6,5);
//console.log(r2.area());



// Task 2

//function Hosting(price, space, data, pages,discount){
//    this.price = price;
//    this.space = space;
//    this.data = data;
//    this.pages = pages;
//    this.discount = discount;
//    this.calDisc = function(){
//        if((this.discount.indexOf("July")!=-1 && this.discount.indexOf("August")!=-1) || this.discount.indexOf("Dec")!=-1){
//           var a = this.price - (this.price * 0.20);
//            return a*12 
//        }
//        
//    }
//        
//}
//
//var Basic = new Hosting(3.99,100,1000,10,["July","August"]);
//console.log(Basic.calDisc());
//
//var Professional = new Hosting(5.99,500,5000,50,["July","August","Dec"]);
//console.log(Professional.calDisc());
//
//var Ultimate = new Hosting(9.99,2000,20000,500,["July","August"]);
//console.log(Ultimate.calDisc());



// Second way: 
//function Hosting(name,price, space, data, pages,discount){
//    this.name = name;
//    this.price = price;
//    this.space = space;
//    this.data = data;
//    this.pages = pages;
//    this.discount = discount;
//    
//    this.calDisc = function(percentD){
//        var bestPrice = this.price;
//        for(var i=0; i<this.discount.length; i++){
//            if((this.discount[i] == 7 || this.discount[i] == 8) || this.discount[i]==12){
//                bestPrice = this.price * percentD;
//                break; 
//            }    
//        }
//        return bestPrice*12;
//        
//    }
//        
//}
//
//var p1 = new Hosting("Basic",3.99,100,1000,10,[7,8]);
//console.log(p1.calDisc(0.80));
//
//var p2 = new Hosting("Professional",5.99,500,5000,50,[7,8,12]);
//console.log(p2.calDisc(0.80));
//
//var p3 = new Hosting("Ultimate",9.99,2000,20000,500,[7,8]);
//console.log(p3.calDisc(0.80));






























