// CALL-APPLY-BIND

// CALL : Calls the function, return result

var obj = {
    num:2
}

var obj2 ={
    num:10
}

var addToThis = function(a){
    return this.num + a;
}

var x = addToThis.call(obj,3);
console.log(x);  // -> 5

var y = addToThis.call(obj2,3);
console.log(y);  // -> 13

var obj3 = {
    num:10
}


var addToThis2 = function(a,b,c){
    return this.num + a + b + c;
}

var z = addToThis2.call(obj3,1,2,3);  // functionName.call(objectName,functionArguments)
console.log(z);  //-> 10+1+2+3 = 16






// APPLY: Applying the array,return result

var obj4 = {
    num:10
}

var arr = [1,2,3];
var w = addToThis2.apply(obj4,arr);      // apply with array
console.log(w);    // ->16



// BIND: calls function, return as function

var obj5 = {
    num:5
}

var addToThis3 = function(a,b,c){
    return this.num + a + b + c;
}


var arr2 = [1,2,3];

var k = addToThis3.bind(obj);
console.log(k(1,2,3));   // 5+1+2+3= 11
console.log(k(...arr2)); // 11

