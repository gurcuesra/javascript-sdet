// Task 1
//var variable1, variable2, variable3;
//variable1 = prompt("Please enter your name!");
//variable2 = prompt("Please enter your last name!");
//variable3 = prompt("Please enter your age!");
//
//console.log("Hi, my name is " + variable1 + " " + variable2 + ", and my age is " + variable3 + ". Nice to meet you !");


// Task 2
//var Area, PI, r;
//r = prompt("Please enter a radius");
//r = parseInt(r);
//PI = 3.14;
//Area = PI * r * r;
//
//console.log("Your circle radius is " + r + " and the area of the circle is " + Area);


// Task 3
var user_1, user_2, amountOfHour_1, amountOfHour_2, earning_1, earning_2;
user_1 = parseInt(prompt("Please enter your hourly wage - User 1"));
amountOfHour_1 = parseInt(prompt("Please enter your amount of hour - User 1"));
earning_1 = user_1 * amountOfHour_1;

user_2 = parseInt(prompt("Please enter your hourly wage - User 2"));
amountOfHour_2 = parseInt(prompt("Please enter your amount of hour - User 2"));
earning_2 = user_2 * amountOfHour_2;

bool = earning_1 > earning_2;

console.log("user_1 earning is more than user_2: " + bool);
