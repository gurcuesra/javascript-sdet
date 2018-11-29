//// Manual way:
//
//var plan1Name ="Basic";
//var plan1Price =3.99;
//var plan1Space = 100;
//var plan1Data = 1000;
//var plan1Pages = 10;
//
//
//var plan2Name ="Professional";
//var plan2Price = 5.99;
//var plan2Space = 500;
//var plan2Data = 5000;
//var plan2Pages = 50;
//
//var plan3Name ="Ultimate";
//var plan3Price = 9.99;
//var plan3Space = 2000;
//var plan3Data = 20000;
//var plan3Pages = 500;
//
//
//console.log("The cost of the " + plan1Name + " package is $ " + plan1Price + " per month.");
//
//
//// Object way:
//
//var plan1 ={
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    data: 1000,
//    pages: 10
//};
//
//
//var plan2 = {
//    name: "Professional",
//    price: 5.99,
//    space: 500,
//    data: 5000,
//    pages: 50
//};
//
//var plan3 = {
//    name: "Ultimate",
//    price: 9.99,
//    space: 2000,
//    data: 20000,
//    pages: 500
//}
//
//console.log(plan1);
//console.log("The cost of the " + plan1.name + " package is $ " + plan1.price + " per month.");
//console.log(plan2);
//console.log("The cost of the " + plan2.name + " package is $ " + plan2.price + " per month.");
//console.log(plan3);
//console.log("The cost of the " + plan3.name + " package is $ " + plan3.price + " per month.");



//var hotel = {
//    name: "Quay",
//    rooms: 40,
//    booked: 25
//}
//
//console.log(hotel);


// Task 1

//var car = {
//    make: "Fiat",
//    model: 500,
//    year: 1957,
//    color: "Medium Blue",
//    passengers: 2,
//    convertible: false,
//    mileage: 8800
//};
//
//if(car.mileage < 5000 && car.make == "Fiat"){
//    console.log("Buy it");
//} else {
//    console.log("do not buy it");
//}



// Updating an Object


// How to add a property?
// If the current month is July, August or December. The customer gets a 20 percent discount on the hosting plan.

//var plan1 ={
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    data: 1000,
//    pages: 10
//};
//
//
//plan1.discountMonths = [7, 8, 12];   // Add new property
//
////console.log(plan1);
//
//plan1.price = 4.99;    // Change the data value
//
//delete plan1.data;    // Delete a property
//
//console.log(plan1);
//
//console.log("name" in plan1); // This property name existing "in" object -> true or false



// Task 1

//var salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
//};
//
//if("John" in salaries && salaries.John <= 100){
//    salaries.John = 120;
//    console.log("New Salary of the John"+ salaries.John);
//}
//
//if("Adam" in salaries){
//    console.log(salaries.Adam);
//} else {
//    salaries.Adam = 180;
//    console.log(salaries.Adam);
//}
//
//console.log(salaries);




// Task 2

//var myHonda = {
//    color: "red",
//    wheels: 4,
//    engine: {
//        cylinders: 4,
//        size: 2.2
//    },
//    hp: [300,500,100]
//};
//
//
//console.log("My Honda Engine size is " + myHonda.engine.size + " and hp is " + myHonda.hp[1]);


// Adding behavior to object

//var car = {
//    make: "Honda",
//    model: "Civic",
//    year: 2000,
//    color: "Red",
//    mileage: 75000,
//    
//    drive: function(){
//        console.log("I am driving honda");
//    }
//};
//
//car.drive();


// Task

//var plan1 ={
//    name: "Basic",
//    price: 3.99,
//    space: 100,
//    data: 1000,
//    pages: 10,
//    discountMonths: [7, 8, 12],
//    calcAnnual: function(percentDisc){
//        var bestPrice = plan1.price;
//        for(var i=0; i< plan1.discountMonths.length; i++){
//            if(plan1.discountMonths[i] == 7 || plan1.discountMonths[i] == 8){
//                bestPrice = plan1.price - (plan1.price * percentDisc);
//            }
//        }
//        return bestPrice*12;
//    }
//};
//
//
// 
//
//var annualPrice = plan1.calcAnnual(0.20);
//console.log(annualPrice);


// How "this" works?

//var car = {
//    make: "Honda",
//    model: "Civic",
//    year: 2000,
//    color: "Red",
//    mileage: 75000,
//    started: false,
//    
//    start: function(){
//        this.started = true;
//    },
//    
//    stop: function(){
//        this.started = false;
//    },
//    
//    drive: function(){
//        if(this.started){
//            console.log("it is running");
//        } else {
//            console.log("you need to start the engine first.")
//        }
//    }
//};
//
//car.drive();  // -> you need to start the engine first.
//car.start();
//car.drive();  // -> it is running
//car.stop();
//car.drive();  // -> you need to start the engine first.



// Task 1

//var song = {
//    name: "Walk This Way",
//    artist: "Run-D.M.C",
//    minutes: 4,
//    seconds: 3,
//    genre: "80s",
//    playing: false,
//    play: function(){
//        if(!this.playing){
//            this.playing = true;
//            console.log("Playing " + song.name + " by " + song.artist);
//        }
//    },
//    pause: function(){
//        if(this.playing){
//            this.playing=false;
//        }
//    }
//};
//
//song.play();
//song.pause();



// Task 2

//var aboutMe = {
//    name: "Esra",
//    lastName: "Kartal",
//    yearOfBirth: 1990,
//    job: "JavaScript Developer",
//    isMarried: true,
//    family: ["Necati", "Ali ihsan"],
//    calculateAge: function(){
//        var age = 2018 - this.yearOfBirth;
//        return age;
//    }
//};
//
//console.log(aboutMe.calculateAge());



// for ... in Statement

//var car = {
//    make: "Ford",
//    model: "Mustang",
//    year: 1955,
//    color: "black",
//    mileage: 281341
//}
//
//for (var x in car){
//    console.log(x + ": " + car[x]);
//}


// Task

//var object1 = {
//    a:1, b:2, c:3
//};
//var a="";
//for(var x in object1){
//    a = a+  + object1[x];
//}
//console.log(a);




















