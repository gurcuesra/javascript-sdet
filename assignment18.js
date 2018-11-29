// Answer 1

function helloName(name){
    var a = "";
    console.log(a.concat("Hello ").concat(name).concat("!"));
}

helloName("Bob")    //→ "Hello Bob!"
helloName("Alice")  //→ "Hello Alice!"
helloName("X")      //→ "Hello X!"



// Answer 2

function makeAbba(str1, str2){
    var a = "";
    console.log(a.concat("").concat(str1).concat(str2).concat(str2).concat(str1));
}

makeAbba("Hi", "Bye")   //→ "HiByeByeHi"
makeAbba("Yo", "Alice") //→ "YoAliceAliceYo"
makeAbba("What", "Up")  //→ "WhatUpUpWhat"


// Answer 3

function extraEnd(str){
    var a = "";
    var b = str.substr(str.length-2,2);
    console.log(a.concat(b).concat(b).concat(b));
}

extraEnd("Hello")  //→ "lololo"
extraEnd("ab")     //→ "ababab"
extraEnd("Hi")     //→ "HiHiHi"


// Answer 4

function firstTwo(str){
    if(str.length >= 2){
        console.log(str.substring(0,2));
    } else if(str.length < 2 && str.length > 0){
        console.log(str);
    } else {
        console.log("yields the empty string")
    }
}

firstTwo("Hello")    //→ "He"
firstTwo("abcdefg")  //→ "ab"
firstTwo("ab")       //→ "ab"
firstTwo("")         //→ "yields the empty string"
firstTwo("a")        //→ "a"



// Answer 5

function firstHalf(str){
    console.log(str.substring(0, (str.length/2)));
}

firstHalf("WooHoo")      //→"Woo"
firstHalf("HelloThere")  //→ "Hello"
firstHalf("abcdef")      //→ "abc"


// Answer 6

function withoutEnd(str){
    if(str.length >= 2){
        console.log(str.substring(1, (str.length-1)));
    }
}

withoutEnd("Hello")   //→ "ell"
withoutEnd("java")    //→ "av"
withoutEnd("coding")  //→ "odin"



// Answer 7

function comboString(str1,str2){
    if(str1.length < str2.length){
        console.log(str1.concat(str2).concat(str1));
    } else {
        console.log(str2.concat(str1).concat(str2));
    }
}

comboString("Hello", "hi")  //→ "hiHellohi"
comboString("hi", "Hello")  //→ "hiHellohi"
comboString("aaa", "b")     //→ "baaab"


// Answer 8

function nonStart(str1,str2){
    var c = "";
    var a = str1.substring(1);
    var b = str2.substring(1);
    console.log(c.concat(a).concat(b));
}

nonStart("Hello", "There")  //→ "ellohere"
nonStart("java", "code")    //→ "avaode"
nonStart("shotl", "java")   //→ "hotlava"



// Answer 9

function left2(str){
    if(str.length>2){
        var c = "";
        var a = str.substr(0,2);
        var b = str.substring(2);
        console.log(c.concat(b).concat(a));
    } else {
        console.log(str);
    }
    
}


left2("Hello")  //→ "lloHe"
left2("java")   //→ "vaja"
left2("Hi")     //→ "Hi"



// Answer 10

function right2(str){
    if(str.length > 2) {
        var c = "";
        var a = str.substr(str.length-2,2);
        var b = str.substring(0, str.length-2);
        console.log(c.concat(a).concat(b));
    } else {
        console.log(str);
    }
}

right2("Hello") //→ "loHel"
right2("java")  //→ "vaja"
right2("Hi")    //→ "Hi"









