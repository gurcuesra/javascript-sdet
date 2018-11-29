// Equality
console.log(1==1);
console.log("1"==1);
console.log(0==false);

// Inequality
console.log(1!=2);
console.log(1!="1");
console.log(1!=false);

// Strict Equality
console.log(3===3);
console.log(3==="3");

// Non-strict Equality
console.log(3!=="3");
console.log(4!==4);

// Greater than
console.log(4>3);
console.log(3>4);

// Greater than or equal
console.log(4>=3);
console.log(4>=4);

// Less than
console.log(3<4);
console.log(4<3);
console.log("1"<"2");

// Less than or equal
console.log(3<=4);
console.log(4<=4);


// Task 1
var num1, num2;
num1 = prompt("Assign first number");
num2 = prompt("Assign second number");

num1 = parseInt(num1);
num2 = parseInt(num2);

//if (num1 > num2) {
//    console.log("First number " + num1 + " is greater than " + num2);
//} else {
//    console.log("First number " + num1 + " is not greater than " + num2);
//}

var bool = num1>num2;

console.log("First number " + num1 + " is greater than " + num2 + " - " + bool);


