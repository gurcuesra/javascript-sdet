// ES5
//
//var Person5 = function(name,yearOfBirth,job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calculateAge = function(){                         // manual way to put inside prototype
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//
//var mike5 = new Person5("mike",1980,"tester");     // we can write the directly on console. just write obj name
//mike5.calculateAge();     // 38

// ES6

//class Person6{
//    constructor(name,yearOfBirth,job){
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calculateAge(){                                                  // automatic way to put inside prototype
//        var age = new Date().getFullYear() - this.yearOfBirth;
//        console.log(age);
//    }
//}
//
//let mike6 = new Person6("mike",1980,"tester");     // we can write the directly on console. just write obj name
//mike6.calculateAge();    // 38






// Static methods : that are simply attached to the classes.


//class Person6{
//    constructor(name,yearOfBirth,job){
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calculateAge(){                                                  // automatic way to put inside prototype
//        var age = new Date().getFullYear() - this.yearOfBirth;
//        console.log(age);
//    }
//    
//    static greeting(){
//        console.log("Hello");
//    }
//}
//
//let mike6 = new Person6("mike",1980,"tester");     // we can write the directly on console. just write obj name
//mike6.calculateAge();    // 38
//
//Person6.greeting();     // calling static method



// When to use static methods?
// *) If you are writing utility classes(if some class coming from somewhere and it can't change) and they are not supposed to be changed
// *) If there is some code that can easily be shared by all the instance methods, extract that code into a static code.
// *) If you are sure that the definition of the method will never be changed or overridden. As static methods can not be overridden. 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task -> Converting to classes from function contructor

//function Bicycle5(cadence,speed,gear,tirePressure){
//    this.cadence = cadence;
//    this.speed = speed;
//    this.gear = gear;
//    this.tirePressure = tirePressure;
//    
//    this.inflateTire = function(){
//        return this.tirePressure += 3;
//    }
//}
//
//var b15 = new Bicycle5(50,20,4,25);
//
//
//
//class Bicycle6{
//    constructor(cadence,speed,gear,tirePressure){
//       this.cadence = cadence;
//        this.speed = speed;
//        this.gear = gear;
//        this.tirePressure = tirePressure; 
//    }
//    
//    inflateTire(){
//        return this.tirePressure += 3;
//    }
//    
//}
//
//
//let b16 = new Bicycle6(50,20,4,25);
//console.log(b16.inflateTire());




//////////////////////////////////////////////////////////////////////////////////////////////////////


// INHERITANCE


// Inheriting constructor
//class Animal{
//    constructor(name){
//        this.name = name;
//    }
//}
//
//class Dog extends Animal{      // inherit with "extends" keyword
//    constructor(name){
//       super(name); 
//    }
//    
//}
//
//let d1 = new Dog("abc");
//console.log(d1.name);    // abc -> it is coming from "super" class
 

// Example
//class Person{
//    constructor(name,age,weight){
//        this.name = name;
//        this.age = age;
//        this.weight = weight;
//    }
//    
//    displayName(){
//        console.log(this.name);
//    }
//    
//    displayAge(){
//        console.log(this.age);
//    }
//    
//    displayWeight(){
//        console.log(this.weight);
//    }
//}
//
//
//class Programmer extends Person{
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language = language
//    }
//    
//    displayLanguage(){
//        console.log(this.language);
//    }
//}
//
//let mike = new Person("mike",25,120);
//mike.displayName();     // mike
//mike.displayAge();      // 25
//mike.displayWeight();   // 120
//
//console.log("............");
//
//let john = new Programmer("john",30,150,"js");
//john.displayName();      // john
//john.displayAge();       // 30
//john.displayWeight();    // 150
//john.displayLanguage();  // js



//class Vehicle{
//    start(){
//        console.log("starting the vehicle");
//    }
//}
//
//class Car extends Vehicle{
//    start(){                                     // Overridding 
//        super.start();                           // For calling the super class's start method
//        console.log("starting the car");
//    }
//}
//
//let honda = new Car();
//honda.start();





///////////////////////////////////////////////////////////////////////////////////////////////////////

// Getter and Setter

//class GetThings{
//    constructor(size){
//        this.length = size;
//    }
//    
//    // Overloading -> same name method, but different parameter type
//    get Length(){
//        return this.length;
//    }
//    
//    set Length(value){
//        this.length = value;
//        console.log("The value has been set");
//    }
//}
//
//var thing = new GetThings(9);
//console.log(thing.Length);    // coming from GET method. -> 9
//thing.Length= 10;             // coming from SET method. -> the value has been set
//console.log(thing.Length);    // coming from GET method. -> 10


// Task

//class EncapTest{
//    constructor(name,age,idNum){
//        this.name = name;         // if i wrote the: this._name = name; it makes the property private.
//        this.idNum = idNum;       // if i wrote the: this._name = name; it makes the property private.
//        this.age = age;           // if i wrote the: this._name = name; it makes the property private.
//    }
//    
//    get Age(){
//        return this.age;
//    }
//    
//    get Name(){
//        return this.name;
//    }
//    
//    get IdNum(){
//        return this.idNum;
//    }
//    
//    set Age(newAge){
//        this.age = newAge;
//    }
//    
//    set Name(newName){
//        this.name = newName;
//    }
//    
//    set IdNum(newIdNum){
//        this.idNum = newIdNum;
//    }
//}
//
//let encap = new EncapTest();
//encap.Name = "Mike";
//encap.Age = 20;
//encap.IdNum = "MS30";
//
//console.log(`Name: ${encap.Name} Age: ${encap.Age} ID: ${encap.IdNum}`);   // Name: Mike Age: 20 ID: MS30
//
//
//let encap2 = new EncapTest("Mike",20,"MS30");
//console.log(`Name: ${encap2.Name} Age: ${encap2.Age} ID: ${encap2.IdNum}`);   // Name: Mike Age: 20 ID: MS30
//// encap2's console.log is coming from getter method. there is no setter method. 
////If i did private with _ it didn't give anything -> Name: undefined Age: undefined ID: undefined





