// Answer 1
for (var i =1; i<=7 ; i++){
    var a=1;
    var b = "";
    for(var p=2; p<=i; p++){
        b = b + p + " ";
    }
    console.log(a + " " +b);   
}

for (var i=6; i>=1 ; i--){
    var b = "";
    for(var p=1; p<=i; p++){
        b = b + p + " ";  
    }
    console.log(b);
    
}

console.log("");

//  Answer 2

for (var i=7; i>=1 ; i--){
    var a=1;
    var b = "";
    for(var p=2; p<=i; p++){
        b = b + p + " ";  
    }
    console.log(a + " " + b);
    
}
for (var i =2; i<=7 ; i++){
    var a=1;
    var b = "";
    for(var p=2; p<=i; p++){
        b = b + p + " ";
    }
    console.log(a + " " +b);   
}    

console.log("");


// Answer 3
for (var i=1; i<=7 ; i++) { 
    var a = "";
    for (var p=7; p>=i ; p--) {
        a = p + " " + a; 
    }

    for (var j=1; j<=p; j++){
            a = " " + a;
    }
    console.log(a);
}

for (var i=6; i>=1 ; i--) { 
    var a = "";
    for (var p=7; p>=i ; p--) {
        a = p + " " + a; 
    }  
    for (var j=1; j<=p; j++){
            a = " " + a;
    }
    console.log(a);
}

console.log("");

// Answer 4

for (var i =1; i<=7 ; i++){
    var b = "";
    for(var p=1; p<=i; p++){
        if (p%2==0){
            b = b + "0";
        } else{
            b = b + "1";
        }
    }
    console.log(b); 
}


// Answer 5

for (var i=1; i<=7 ; i++) {
    var a = "";
    for (var p=6; p>=i ; p--) {
        a = 1+ a; 
    }
    for (var p=0; p<i ; p++) {
        a = a + i; 
    }  
    console.log(a);
}


// Answer 6

var j;
for(i=1; i<=5; i++){
    j=i;
    var a="";
    for(p=1; p<=i; p++){
        a = a + j + " ";
        j = j + 5-p;    
    }
    console.log(a);
}
    
