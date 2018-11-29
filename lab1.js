// 1- Create 5 variables for 5 vegetables and print them on the console
var v1, v2, v3, v4, v5;
v1 = "Cucumber";
v2 = "Tomatoes";
v3 = "Onion";
v4 = "Pepper";
v5 = "Carrot";

console.log("List of vegetables:");
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);


// 2- Create a program that asks user to enter amount for each vegetables and make sure results are number
var amount_v1, amount_v2, amount_v3, amount_v4, amount_v5;
amount_v1 = prompt("Amount of the " + v1);
amount_v2 = prompt("Amount of the " + v2);
amount_v3 = prompt("Amount of the " + v3);
amount_v4 = prompt("Amount of the " + v4);
amount_v5 = prompt("Amount of the " + v5);

amount_v1 = parseInt(amount_v1);
amount_v2 = parseInt(amount_v2);
amount_v3 = parseInt(amount_v3);
amount_v4 = parseInt(amount_v4);
amount_v5 = parseInt(amount_v5);

console.log("Amount of " + v1 + " is: " + amount_v1);
console.log("Amount of " + v2 + " is: " + amount_v2);
console.log("Amount of " + v3 + " is: " + amount_v3);
console.log("Amount of " + v4 + " is: " + amount_v4);
console.log("Amount of " + v5 + " is: " + amount_v5);


// 3- create price for each product

var p_price_v1, p_price_v2, p_price_v3, p_price_v4, p_price_v5;
p_price_v1 = 2.5;
p_price_v2 = 3;
p_price_v3 = 1.5;
p_price_v4 = 2;
p_price_v5 = 4;

console.log("Product price of " + v1 + " is: " + p_price_v1);
console.log("Product price of " + v2 + " is: " + p_price_v2);
console.log("Product price of " + v3 + " is: " + p_price_v3);
console.log("Product price of " + v4 + " is: " + p_price_v4);
console.log("Product price of " + v5 + " is: " + p_price_v5);

// 4 - Calculate and show price of each vegetables with following format

var price_v1, price_v2, price_v3, price_v4, price_v5;
price_v1 = amount_v1 * p_price_v1 ;
price_v2 = amount_v2 * p_price_v2;
price_v3 = amount_v3 * p_price_v3;
price_v4 = amount_v4 * p_price_v4;
price_v5 = amount_v5 * p_price_v5;

console.log("Price of the " + v1 + " is: " + price_v1);
console.log("Price of the " + v2 + " is: " + price_v2);
console.log("Price of the " + v3 + " is: " + price_v3);
console.log("Price of the " + v4 + " is: " + price_v4);
console.log("Price of the " + v5 + " is: " + price_v5);