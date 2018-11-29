// Loops 

//// i++
//for(var i=1; i<=10; i++){
//    console.log(i);
//}
//
////i--
//for(var i=10; i>=1; i--){
//    console.log(i);
//}



// Nested loop
//for(var i=1; i<=5; i++){
//    for(var p=1; p<=5; p++){
//        console.log(p);
//    }
//}


// Pattern 1
//for(var i=1;i<=5; i++){
//    var a ="";
//    for(var p=1; p<=5; p++){
//        a = a + p;
//        
//    }
//    console.log(a);
//    console.log("");
//}



// var a="";
//for(var i=1;i<=5;i++){
//   
//    for(var p=1; p<=i;p++){
//        a = a+p;
//    }
//    console.log(a);
//}

//// starting to 1 -> 12 -> 123 -> 1234 -> 12345
//for(var i=1;i<=5;i++){
//    var a="";
//    for(var p=1; p<=i;p++){
//        a = a+p;
//    }
//    console.log(a);
//}
//console.log("");
//
//
//
//// starting to 54321 -> 5432 -> 543 -> 54 -> 5
//for(var i=1;i<=5;i++){
//    var a="";
//    for(var p=5; p>=i;p--){
//        a = a+p;
//    }
//    console.log(a);
//}
//console.log("");
//
//
//// starting to 12345 -> 1234 -> 123 -> 12 -> 1
//for(var i=5;i>=1;i--){
//    var a="";
//    for(var p=1; p<=i;p++){
//        a = a+p;
//    }
//    console.log(a);
//}



//// concatination
//String + number -> String
//"1"    + 1      -> 11 
//"1"    + 1 + 2  -> 112
//1+2    + "1"    -> 31
//
//
//
//i    p    a       a+p                         console 
//---------------------------------------------------------
//1    1    ""      ""+1                          1
//2    1    ""      ""+1 -> 1
//2    2    1       1+2  -> 12                    12
//3    1    ""      ""+1
//3    2    1       1+2  -> 12
//3    3    12      12+3 -> 123                   123
//4    1    ""      ""+1
//4    2    1       1+2  -> 12
//4    3    12      12+3 -> 123
//4    4    123     123+4-> 1234                  1234
//5    1    ""      ""+1
//5    2    1       1+2  -> 12
//5    3    12      12+3 -> 123
//5    4    123     123+4-> 1234
//5    5    1234    1234+5->12345                 12345






//OBJECTS
var obj = {
    name: "Esra",
    lastname: "Kartal",
    birtyear: 1990,
    isMarried: true,
    family: ['Necati', 'Esra', 'Ali Ihsan'],
    object: {country: 'Turkey'},
    method: function(){
        console.log("hello");
    }
};


//console.log(obj.name);
//console.log(obj.lastname);
//console.log(obj.birtyear);
//console.log(obj.isMarried);
//console.log(obj.family);
//console.log(obj.object);
//console.log(obj.method);
//console.log(obj);    // -> Shows everything inside of object


//var obj1 = {};
//
//// Adding property
//obj1.name = "Mery";
//obj1.name2 = "Danish";
//obj1.year = 2019;
//console.log(obj1);
//
//// Changing value of a property
//obj1.year = 2018;
//console.log(obj1);
//
//// Deleting a property
//delete obj1.year;
//console.log(obj1);
//
//
//// Different way of the changing value
//obj1["year"] = 2020;
//console.log(obj1);


//// Creating an object with Constructor function 
//function practice(name, lastname, birthyear,method){
//    this.name = name;
//    this.lastname= lastname;
//    this.birthyear = birthyear;
//    this.method = function(){
//        return this.name;
//    }
//}
//
//var o1 = new practice("Esra", "Kartal",1990);
//console.log(o1);
//
//// calling a method
//console.log(o1.method());

//var o2 = new practice("Mery");
//console.log(o2);
//
//var o3 = new practice("Danish");
//console.log(o3);





// FUNCTIONS

//// I can call my function anywhere
//a();
//
//function a(){
//    console.log("Hello");
//}
//
////a();



//function b(number, string, boolean, array, object){
//    console.log(number);
//    console.log(string);
//    console.log(boolean);
//    console.log(array);
//    console.log(object);
//}
//
//
//b(1,"B",true,[1,2,3],{name:'esra'});


//// return 
//function c(number){
//    return number;
//}
//
//console.log(c(1));



//// Example of return 
//function area(width, height){
//    return width * height;
//}
//
//console.log(area(20,30));
//console.log(area(10,20));




//// MULTIARRAYS
//var arr = [1,2,3];
//var multiArray = [   [1,2,3]   ,    [4,5,6]    ];
//
////console.log(multiArray.length)   // -> 2
//
////console.log(multiArray[0].length);   // ->3
//
////console.log(multiArray[1][0]);     // ->4
//
//
//
////for(var i=0; i<multiArray.length; i++){
////    for(var p=0; p< multiArray[i].length;p++){
////        console.log(multiArray[i][p]);
////    }
////}
//
////
////multiArray[i]     multiArray[i][p]
////------------------------------------
////0 -> [1,2,3]       1 , 2 , 3
////1 -> [4,5,6]       4 , 5 , 6







//OOP in JAVA
//---------------
//1. Inheritance(JS)
//2. Encapsulation(JS)
//3. Polymorphism
//4. Abstraction
//
//
//
//1. Inheritance
//
//class Parent
//    |
//class child extand Parent 
//Single inheritance
//
//
//
//class Parent
//    |
//class child extand Parent
//    |
//class grandchild extand child
//Multilevel inheritance 
//
//
//
//                      class Parent
//                     |            |
//class child1 extand Parent       class child2 extand Parent
//                      |           |
//                    class grandchild
//
//Deadly Diamond of Death  -> for Java. Because Java doesn't have any multilevel inheritance
//
//
//
//
//
//
//                      class Parent
//                     |            |
//class child1 extand Parent       class child2 extand Parent
//
//Hierarchical Inheritance
//
//
//
//
//
//
//2. Encapsulation
//class Parent 
//    var a;    // -> Encapsulation
//
//class child extand Parent
//    setter(){
//        a = 1;
//    } 
//    
//    
//    getter(){
//        return a;   // -> 1
//    }
//
//
//
//
//3. Polymorphism 
//Runtime -> Overriding  -> Same name, same parameter, return                                 different value
//
//class A
//    function a(b){
//        return b;
//    }
//
//    function a(b){
//        return b+1;
//    }
//
//a(2) -> 3
//
//
//Compile -> Overloading -> Same name, different paramater
//
//class A
//    function a(b){
//        return b;
//    }
//
//    function a(c){
//        return 3;
//    }
//
//a(2) -> 3
//
//
//
//
//4. Abstraction 
//
//class abstract Animal
//   fly();
//   swim();
//
//
//class Dog extand Animal{
//    fly(){
//        console.log("no");
//    }
//}
//    
//    
//    
//class bird extand Animal
//    fly(){
//        console.log("yes");
//    }
//
//
//
//class fish extand Animal
//    swim(){
//        console.log("yes")
//    }
//
//








