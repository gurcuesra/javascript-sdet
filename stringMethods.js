// length method

//var string = "Java String";
//var x = "";
//
//console.log(string.length);
//console.log(x.length);




// Task 1
//var name = "Esra";
//var lastName = "Kartal";
//
//console.log(name.length);
//console.log(lastName.length);
//console.log(name.length + lastName.length);



// charAt() Method:

//var string = "Java Script";
//console.log(string.charAt(2));   // -> inside of the () number
//console.log(string.charAt(4));   // -> but, it gives string
//console.log(string.charAt(9));   // -> as a result


// Task 1
//var name = "Esra";
//var lastName = "Kartal";
//
//console.log(name.charAt(1));
//console.log(lastName.charAt(3));



// Task 2
//var x = "Java Script";
//
//for(var i=0; i<x.length; i++){
//    console.log(x.charAt(i));
//}
//
//
//// Without space
//
//var x = "Java Script";
//
//for(var i=0; i<x.length; i++){
//    
//    if(x[i] != " "){
//        console.log(x.charAt(i));
//    }
//}



// concat() Method

//var s1 = "Hello ";
//var s2 = "World";
//var s3 = " !!!";
//var s4 = s1.concat(s2 + s3);
//console.log(s4);



// Task 1
//
//var a = "";
//var string1="";
//var string2="";
//
//function passwordCreate(string1, string2){
//    string1 = prompt("First string");
//    string2 = prompt("Second string");
//    
//    for(var i=0; i < string1.length; i++){
//        a = a.concat(string1.charAt(i));
//        if(i==2){
//            break;
//        }
//    }
//    
//    return a.concat(string2.length);
//}
//
//var password = passwordCreate(string1,string2);
//console.log(password);



// includes() Method

//var str = "Hello Mike, welcome to Amazon world.";
//var n = str.includes("Mike");
//console.log(n);



// Task 1

//function checkedString(str1,str2){
//    if (str1.includes(str2)){
//        console.log(str2.length);
//    } else {
//        console.log("not found");
//    }
//}
//
//checkedString("Your order confirmation number is XYZ", "confirmation");
//checkedString("What are you doing", "?");
//checkedString("How is your mother?", "How");



// indexOf() Method

//var str = "Hello Mike, welcome to Amazon world.";
//var n = str.indexOf("Amazon");
//console.log(n);



// Task 1

//function checkedString(str1,str2){
//    if (str1.includes(str2)){
//        console.log(str1.indexOf(str2));
//    } else {
//        console.log("not found");
//    }
//}
//
//checkedString("Your order confirmation number is XYZ", "confirmation");



// replace() method:

//var str = "Ebay is a very good website";
//var replaced = str.replace("Ebay", "Bestbuy");
//console.log(replaced);  // It copy the first string,then replace                         // with new string
//console.log(str);  // It don't change!!!!



// Task 1

//var s1 = "Orcun";
//var s2 = "Canlilar";
//console.log(s2.replace("ar","Or"));
//
//
//// Second way:
//var first = s1.charAt(0)+s1.charAt(1);
//var second = s2.charAt(6) + s2.charAt(7);
//console.log(s2.replace(second, first));
//
//// Third way: 
//var first = s1.charAt(0)+s1.charAt(1);
//var second = s2.charAt(s2.length-2) + s2.charAt(s2.length-1);
//console.log(s2.replace(second, first));
//
//
//// Forth way:
//console.log(s2.replace((s2[s2.length-2]+s2[s2.length-1]),(s1[0]+s1[1])));



// search() method:

//var str = "I want to be number 1 test automation developer.";
//console.log(str.search("automation"));
//console.log(str.search("1"));

// Task 

//var str = "In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
//
//if(str.search("automation") != -1){
//    console.log("Found");
//} else {
//    console.log("not found");
//}
//
//
//// Ozzy's way: 
//
//var x = str.search("automation");
//
//if(x>=0){
//    console.log("found it");
//} else {
//    console.log("not found it");
//}



// slice() method: 

//var str = "The morning is upon us.";
//
//console.log(str.slice(2,5));


//var str = "Welcome to JavaScript";
//console.log(str.length);       // 21
//
//console.log(str.slice(2));     // lcome to JavaScript
//console.log(str.slice(10));    //  JavaScript
//console.log(str.slice(2,9));   // lcome t
//console.log(str.slice(6,14));  // e to Jav
//
//console.log(str.slice(4,-3));  // ome to JavaScr
//console.log(str.slice(4,18));  // ome to JavaScr
//
//console.log(str.slice(5,-12)); // me t
//console.log(str.slice(5,9));   // me t
//
//console.log(str.slice(2,-12)); // lcome t


// Task 

//var str = "In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
//
//str.indexOf("automation");  // 27
//
//if(str.slice(27, 37) == "automation"){
//    console.log("found");
//} else {
//    console.log("not found");
//}


//var str="In order to be a good test automation developer, I need to practice at least 2 to 3 hours a day.";
//var x=str.slice(0);
//if(x.includes("4")){
//    console.log("Found it");
//}else{
//    console.log("Not found it");
//}





// split() method:

//var a = "About 2,400,000,000 results (0.94 seconds)";
//
//var b = a.split(",");
//console.log(b);


// Task 1

//var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";
//
//
//// for how many words
//var array = str.split(" ");
//console.log(array.length);
//
//
////Last word
//console.log(array[array.length-1]);
//
//
//
//// for how many sentences 
//var sentence = str.split(".");
//console.log(array.length);
//
//
//
//// Includes or not
//if (array.includes("Netscape")){
//    console.log("found");
//}
//
//
//// How many times
//var counter =0;
//for(var i=0; i<array.length;i++){
//    if(array[i] == "Netscape"){
//        counter++;
//    }
//}
//console.log(counter);
//
//
//// founding with for loop
//for (var i=0; i<array.length; i++){
//    if(array[i] == "88"){
//        console.log("found it");
//        break;
//    } else if(i == array.length){
//        console.log("not found")
//    }
//}


// substr() method:

//var str = "JavaScript";
//console.log(str.substr(0,1));   // J    -> 0th index, 1 character.
//
//console.log(str.substr(1,0));   // " "  -> 1st index, 0 character. NOTHING
//
//console.log(str.substr(-1,1));  // t    -> -1st index, 1 character. start from end
//
//console.log(str.substr(1,-1));  // " "  -> 1st index, -1 character. NOTHING
//
//console.log(str.substr(-3));    // ipt  -> -3rd index. start from end. reads left to right.
//
//console.log(str.substr(1));     // avaScript -> 1st index. reads left to right.
//
//console.log(str.substr(-20,2)); // Ja   -> don't have -20th index. It starts beginning and reads 2 character.
//
//console.log(str.substr(20,2));  // " "  -> don't have 20th index. NOTHING
//
//console.log(str.substr(-7,3));  // aSc  -> -7th index = a, 3 character = aSc. start from end. Reads left to right. 
////
//// looking -20 index and reading from beginning to end:
//for (i=-20;i<str.length;i++){
//    console.log(" " + i + ".) " + str.substr(i,2));
//    
//}




// substring() method:

//var str = "Hello world!";
//
//console.log(str.substring(0,1));     //H            -> starts 0th index. reads until 1st index. But, 1th is not included. 
//
//console.log(str.substring(1,0));     //H            -> 1 > 0 = swap it. starts 0th index. reads until 1st index. But, 1th is not included.
//
//console.log(str.substring(0,6));     //Hello        -> starts 0th index. reads until 6th index. But, 6th is not included.
//
//console.log(str.substring(4));       //o world!     -> starts 4th index. reads until end.
//
//console.log(str.substring(4,7));     //o w          -> starts 4th index. reads until 7th index. But, 7th is not included.
//
//console.log(str.substring(7,4));     //o w          -> 7 > 4 = swap it. starts 4th index. reads until 7th index. But, 7th is not included.
//
//console.log(str.substring(0,7));     //Hello w      -> starts 0th index. reads until 7th index. But, 7th is not included.
//
//console.log(str.substring(0,10));    //Hello worl   -> starts 0th index. reads until 10th index. But, 10th is not included.
//


// Task

//var str = "JavaScript";
//
//console.log(str.substring(str.length-4,2));  // -> vaSc
//console.log(str.substring(2,3));             // -> v
//console.log(str.substring(str.length,2));    // -> vaScript
//console.log(str.substring(12,25));           // -> " "  




// toLowerCase() method:

//var str = "JavaScript";
//console.log(str.toLowerCase());   // -> javascript



// toUpperCase() method:

//var str = "JavaScript";
//console.log(str.toUpperCase());   // -> JAVASCRIPT


// Task

//var str = "Javascript";
//
//for(var i=0; i<str.length; i++){
//    if(i == 2){
//        var a = str[i].toUpperCase();
//    }
//    if(i == 5){
//        var b = str[i].toUpperCase();
//    }
//}
//
//var newStr = str.substr(0,2) + a + str.substr(3,2) + b + str.substr(6)
//console.log(newStr);   // -> JaVasCript
//console.log(str);      // ->Javascript



// trim() method:

//var str = " JavaScript";
//console.log(str.trim());              //-> Delete first space
//
//var str1= "JavaScript ";              
//console.log(str1.trim());             //-> Delete last space
//
//var str2 = "     JavaScript   ";
//console.log(str2.trim());             //-> Delete first and last space
//
//var str3 = "   Jav aS  cri pt   ";
//console.log(str3.trim());             //-> Delete just first and last space



// Task

var str= "  342  ";
var a = str.trim();
var b = a.concat("|");
console.log("|" + b);



