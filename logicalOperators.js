// And && 
//var x = 5;
//var y = 2;
//console.log(x<10 && y>1);
//
//console.log(5<2 && 2>=3);
//
//// Or ||
//console.log(x==1 || y==2);
//
//// Not !
//console.log(!(x==y));


// Logical AND 
console.log(true && true);
console.log(true && false);
console.log(true && (3==4));


// Logical OR
console.log(true || true);
console.log(false || true);
console.log(false || (3==4));


// Task 1
var ApplesCount=20;
var OrangesCount=30;
var PearsCount=30;

var comp = ApplesCount < OrangesCount || OrangesCount >= PearsCount;
console.log(comp);


// Task 2
var OutsideWeather;
var Degree;
OutsideWeather = "Shinny";
Degree = 70;
var comp2 = (!(OutsideWeather == "Raining" || Degree == 70));
console.log(comp2);


// Task 3
var b = 2;
var res = ++b == 2 || --b == 2 && --b == 2;
console.log(res);


// Task 4 
var x= true, z=true;
var y = 20;
x = (y!=10) || (z=false);
console.log(x);

