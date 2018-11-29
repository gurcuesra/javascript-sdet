// Declaring a Function

//function sayHello(){
//    console.log("Hello");
//}

// for(var i=0; i<100; i++){
//    sayHello();
// }



// Task 1

//function calculates(){
//    var num1,num2,num3;
//    num1 = 1;
//    num2 = 2;
//    num3 = 3;
//    var sum= num1 + num2 + num3;
//    console.log(sum);
//}
//
//calculates();


// Task 2

//function convertKM(){
//    var miles = parseInt(prompt("Please enter your mile"));
//    var km = miles * 1.609344;
//    console.log(km);
//}
//
//convertKM();




// Task 3

//function comparing(){
//    var ask_1 = parseInt(prompt("Please enter your first number"));
//    var ask_2 = parseInt(prompt("Please enter your second number"));
//    
//    if(ask_1 > ask_2){
//        console.log(ask_1 + " is greater than " +ask_2);
//    } else {
//        console.log(ask_2 + " is greater than " +ask_1);
//    }
//}
//
//comparing();



// Declaring Functions That Need Information:

//calculateArea(30,50);
//
//var x = 5;
//var y = 10;
//function calculateArea(width,height){
//    var area = width * height;
//    console.log(area);
//    console.log(width);
//    console.log(height);
//}

//calculateArea(3,5);
//calculateArea(30,50);
//calculateArea(x,y);


// Task 

//function payHours(hours,hourlyPay){
//    var pay = hours * hourlyPay;
//    console.log("Your hour is: " + hours + ". Your hourly pay is: " + hourlyPay + ". Your pay is: " + pay);
//}
//
//payHours(12,20);


//var hours, rate;
//
//function earning(hours,rate){
//    hours=parseInt(prompt("How many hours do you work in a week?"));
//    rate=parseInt(prompt("What is you hourly rate?"));
//
//	total=hours*rate;
//	console.log(total+"$");
//}
//earning(hours,rate);
//earning(hours,rate);



// Friday Tasks: 

// Task 1

//function calculator(num1,num2,operator){
//    if(operator=="+"){
//        console.log(num1+num2);
//    }else if(operator=="-"){
//        console.log(num1-num2);
//    }else if(operator=="*"){
//        console.log(num1*num2);
//    }else if(operator=="/"){
//        console.log(num1/num2);
//    }
//}
//
//calculator(5,10,"+");
//calculator(50,10,"*");
//calculator(15,10,"-");
//calculator(25,5,"/");




// Task 2
//
//function calculateAge(year){
//    var year=2018-year;
//    console.log(year);
//} 
//calculateAge(2003);
//calculateAge(1995);



// Task 3

//function calculateGreatest(n1,n2,n3){
//    if(n1>n2 && n1>n3){
//        console.log(n1+" is the greatest");
//    }else if(n2>n1 && n2>n3){
//        console.log(n2+" is the greatest");
//    }else if(n3>n2 && n3>n1){
//        console.log(n3+" is the greatest");
//    }
//}
//calculateGreatest(5,2,3);
//calculateGreatest(8,12,4);




// Task 4

//function calculateCelcius(fahrenheit) {
//    var celcius = (fahrenheit - 32) * 5/9;
//    console.log(fahrenheit + " fahrenheit = " + celcius + " celcius");
//}
//calculateCelcius(70);





// Task 5

//function calculateGrades(g1,g2,g3){
//    var average=(g1+g2+g3)/3;
//    if(average>=90 && average<=100){
//        console.log("A");
//    }else if(average>=80 && average<=89){
//        console.log("B");
//    }else if(average>=70 && average<=79){
//        console.log("C");
//    }else if(average>=60 && average<=69){
//        console.log("D");
//    }else if(average>=0 && average<=59){
//        console.log("F");
//    }
//    
//}
//calculateGrades(75,85,90);
//calculateGrades(7,15,90);


// Task 6

//var yourArray = [1,2,3,4,5,"apple","banana"];
//
//function findElement(myArray, element){
//    
//    for (var i=0; i< myArray.length; i++){
//        if (element == myArray[i]) {
//            console.log("found it");
//            break;
//        } else if (i == myArray.length-1){
//            myArray.push(element);
//            break;
//        }
//    }
//    console.log(myArray);
//}
//
//
//findElement(yourArray,1200);



// Pass-By-Value: 

//var age = 7;
//
//function addOne(x){
//    x = x + 1;
//    console.log(x);
//}
//
//addOne(age);
//console.log(age);



// Second example:

//function makeTea(cups,tea){
//    console.log("Brewing " + cups + " cup of " + tea);
//}
//
//makeTea(3);      // -> 3 , undefined
//makeTea(3, "Early Grey", " hey ma!", 42);   // -> 3, Early Grey (doesn't read others!!!)



// RETURN STATEMENT" 

function calculateArea(width, height){
    var area = width * height;
    return area;
}

var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(8,5);

console.log(wallOne);
console.log(wallTwo);






























