//function Bicycle(cadence, speed, gear, tirePressure){
//    this.cadence = cadence;
//    this.speed = speed;
//    this.gear = gear;
//    this.tirePressure = tirePressure;
//    
//    this.inflateTires = function(){
//        this.tirePressure += 3;
//    }
//}
//
//var b1 = new Bicycle(50,20,4,25);
//b1.inflateTires();
//
//function Mechanic(name){
//    this.name = name;
//}
//
//var m1 = new Mechanic("Mike");
//console.log(m1);
// I want to give Mike access to inflateTires method
//
/////////////////////////////////////////////////////////////////////////////////////////
//
////Whenever you create a function, JS creates 2 objects. 
////    1- function name object
////    2- prototype objec†
////    
////function foo(){}
////function bar(){}
//
//function greet(){
//    console.log("Hello");
//}
//
//greet();                        // hello
//console.log(greet);             // function object
//console.log(greet.prototype);   // prototype object
//
//
//
//
//// When you create object, __proto__ is created by JS Engine
//
//function foo(){}
//var obj = new foo();
//console.log(obj);
//
//
//
//// Set a property to foo prototype and access it from obj 
//
//foo.prototype.test="this is object";    
//console.log(obj.__proto__.test);       // go to prototype, and find the test variable
//
//obj.__proto__.hello = "test";
//console.log(obj.hello);        // test
//
//obj.test = 10;     // it is coming from object -> NOT from prototype
//
//console.log(obj.test);
//
//
//
////function Employee(name){
////    this.name = name;
////}
////
////var emp1 = new Employee("Mike");
////var emp2 = new Employee("Smith");
////
////Employee.prototype.playPranks = function(){
////    console.log("Plank played");
////}
////
////emp1.playPranks();
////emp2.playPranks();
//
////                                                      |
////function Person(height){                               |
////    this.height = height;                               |
////}                                                        | 
////                                                          |
////var p1 = new Person(170);                                  |
////var p2 = new Person(180);                        >->------|-----> my coding
////                                                           | 
////Employee.prototype.h = p1.height;   // 170                |
////                                                         |
////console.log(emp1.__proto__.h);      // 170              |
////                                                       | 
////console.log(Employee);              // only name      |
//
//
//// In class modules, you have to define all method upfront
//// In prototype, you can put things at runtime
//// The minute you add that extra property, every object that was created from the employee as a constructor, even the ones that were created before you added that on the property would still work. Because the prototype loop up happens at runtime
//
//
//var simple ={name:"Esra"};
//var obj = new Object();
//
//console.log(simple.__proto__ === obj.__proto__);    // true   -> this prototype coming from object
//
//console.log(obj.__proto__ === Object.prototype);    // true
//
//console.log(simple.__proto__ === Object.prototype);    // true


// 
//
//function Employee(){}
//var emp = new Employee();
//
////emp.test;
//
//emp.prop = "Employee";
//emp.__proto__.parentProp = "Parent Employee";  // coming from function prototype;
//
//console.log(emp.__proto__.__proto__ === Object.prototype)   // true -> because coming from object prototype
//
//Object.prototype.grandParentProp = "Grand Parent";
//
//function foo(){}
//var tmp = new foo();
//console.log(tmp.grandParentProp);  //-> coming from object prototype
//
//
//
//console.log(emp.__proto__.__proto__.__proto__);  // null -> first proto coming from function.
//                                                 // null -> second proto coming from object.
//                                                 // null -> third proto not coming any where. That's why null



// INHERITANCE

function Employee(name){
    this.name = name;
}

// first way:
//Object.prototype.getName = function(){
//   return this.name;
//}
//
// second way:
Employee.prototype.getName = function(){
    return this.name;
}
//
//
//
var emp1 = new Employee("Mike");
console.log(emp1.getName());
////
////
////// you have employee object and some behavior, also you have manager object. Managers are also employee and have common properties but managers have their own special behavior as well.
////
function Manager(name,dept){
    this.name = name;
    this.dept = dept;
}
//
//// first way:
////Object.prototype.getDept = function(){
////   return this.dept;
////}
//
// second way:
Manager.prototype.getDept = function(){
    return this.dept;
}
//
var mgr = new Manager("Michael", "Sales");
//console.log(mgr.getDept());
//console.log(mgr.getName());  // -> it gives error because, getName() is in Employee's prototype

//
//// One way    -> to share is put all common properties in the Objects prototype. This way is not common, because you can put so many method inside of the Objects prototype. After a few time if you gave same name to your method it can give error.
//// Second way -> Manager's prototype __proto__ points to Employee's prototype not object's prototype
//
//
//// First way:
//// mgr.__proto__.__proto__ = Object.prototype;
//
// second way:
mgr.__proto__.__proto__ = Employee.prototype;// -> it is connecting the manager function with employee prototype
                                             // it doesn't matter how many object we create, if one of them in the employee prototype, other objects can access to prototype too
//console.log(mgr.getName()); //->now i can call getName
//
//
var str = new Manager("Esra","Developing");                              // -> when comment mgr line, it is: 
console.log(str.__proto__);                          // -> Manager       // -> Manager
console.log(str.__proto__.__proto__);                // -> Employee      // -> object
console.log(str.__proto__.__proto__.__proto__);      // -> Object        // -> null 
console.log(str.__proto__.__proto__.__proto__.__proto__); // -> Null     // -> error (cannot read)
















