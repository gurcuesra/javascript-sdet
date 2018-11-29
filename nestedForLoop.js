//for (var i=0; i<3; i++) {
//    console.log("Outer Loop at state: " + i + "\n");
//    for (var p=0;p<2;p++) {
//        console.log("Inner Loop at this state: " + p);
//        if(p==1) {
//            console.log("\n");
//        }
//    }
//}


// Task 1

var num = 5;
for (var i=1; i<=num ; i++) { 
    var a = "";
    for (var p=0; p<i ; p++) {
        a = a + "*";      
    }
    console.log(a);
}

