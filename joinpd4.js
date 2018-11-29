// Task 1

//function firstLast6(array){
//    if(array[0]==6 || array[array.length-1] == 6){
//            console.log(true);
//    } else {
//        console.log(false);    }
//}
//
//firstLast6([1,2,6]);
//firstLast6([6,1,2,3]);
//firstLast6([13,6,1,2,3]);

// Ozzy's way:

//function firstLast6(array){
//    if(array.indexOf(6)==0 || array.indexOf(6) == array.length-1){
//        console.log(true);
//    } else {
//        console.log(false);    }
//}
//
//firstLast6([1,2,6]);
//firstLast6([6,1,2,3]);
//firstLast6([13,6,1,2,3]);

// Task 2

//function sameFirstLast(array){
//    if(array.length > 1){
//        if(array[0] == array[array.length-1]){
//            console.log(true);
//        } else {
//            console.log(false);
//        }
//    } else {
//        console.log("not a valid array")
//    }
//}
//
//
//sameFirstLast([1,2,3]);
//sameFirstLast([1,2,3,1]);
//sameFirstLast([1,2,1]);
//sameFirstLast([1]);



// Task 3

//function commonEnd(array1,array2){
//    if (array1.length> 1 && array2.length > 1 ){
//            if(array1[0] == array2[0] || array1[array1.length-1] == array2[array2.length-1]){
//                console.log("true");
//            } else {
//                console.log("false");
//            }
//    } else {
//        if (array1.length <= 1){
//            console.log("array1 is not valid array");
//        } else if(array2.length <= 1){
//            console.log("array2 is not valid array");
//        }
//         
//    } 
//        
//}
//
//commonEnd([1,2,3],[7,3]);
//commonEnd([1,2,3],[7,3,2]);
//commonEnd([1,2,3],[1,3]);
//commonEnd([1],[7,3]);
//commonEnd([1,2,3],[1]);


// Task 4

//function sum(array){
//    var total = 0;
//    for(var i=0; i<array.length; i++){
//        var a = array[i];
//        total = total + a++;
//    }
//    console.log(total);
//}
//
//sum([1, 2, 3]);
//sum([5, 11, 2]);
//sum([7, 0, 0]);
//sum([3, -2, 10,4]);


// Task 5

//function rotateLeft(array){
//    var a = array.shift();
//    var b = array.push(a);
//    console.log(array);
//   
//}
//
//rotateLeft([1, 2, 3]);
//rotateLeft([5, 11, 9]);
//rotateLeft([7, 0, 0]);
//rotateLeft([17, 12, 10, 8]);


// Second way:

//function rotateLeft(array){
//    var a = [];
//    for (var i=0; i<array.length; i++){
//        if(i == 0){
//            continue;
//        }
//        a.push(array[i]);
//    }
//    a.push(array[0]);
//    console.log(a);
//}
//
//rotateLeft([1, 2, 3]);
//rotateLeft([5, 11, 9]);
//rotateLeft([7, 0, 0]);
//rotateLeft([17, 12, 10, 8]);

// code For rotating upside down
//function rotateLeft(array){
//    var a = array.length -1;
//    var b = [];
//    for(var i=a; i>=0; i--){
//        b.push(array[i]);
//    }
//    console.log(b);
//}
//
//rotateLeft([1, 2, 3]);




// Task 6

//function maxEnd(array){
//    var newArray = [];
//    var max = array[0];
//    for(var i=0; i<array.length; i++){
//        if (array[i] > max){
//            max = array[i];
//            bool = true;
//        }
//    }
//    if (bool == true){
//        for(var i=0; i<array.length;i++){
//            newArray.push(max);
//        }
//        console.log(newArray);
//    }
//}
//
//
//maxEnd([1,2,3]);
//maxEnd([11,5,9]);
//maxEnd([2,11,17]);



// Task 7

//function makeEnds(array1,array2){
//    array2 = [array1[0],array1[array1.length -1]]
//    console.log(array2);
//}
//
//makeEnds([1,2,3],[]);
//makeEnds([1,2,3,4],[]);
//makeEnds([7,4,6,2],[]);



// Task 8

//function has23(array){
//    if(array.indexOf(2) != -1 || array.indexOf(3) != -1){
//        console.log(true);
//    } else{
//        console.log(false);
//    }
//}
//
//has23([2,5]);
//has23([4,3]);
//has23([4,5]);



// Task 9

//function makeLast(array){
//    var a = [];
//    a.length = 2*(array.length);
//    for(var i=0; i<a.length; i++){
//        a[i] = 0;
//        if(i == a.length-2){
//            break;
//        }
//    }
//    a[a.length-1] = array[array.length-1]
//    
//    console.log(a);
//}
//
//makeLast([4, 5, 6]);
//makeLast([1, 2]);
//makeLast([3]);



// Task 10

//function double23(array){
//    var bool = false;
//    var counter = 1;
//    if(array.indexOf(2) != -1 || array.indexOf(3) != -1){
//        
//        for(var i=0; i<array.length; i++){
//            if(array[i] == array[i+1] ){
//                bool = true;
//                counter ++;
//            } 
//            
//            if(counter == 3){
//                bool = false;
//            }
//        }
//        
//        if(bool == true){
//            console.log(true);
//        } else {
//            console.log(false);
//        }
//    } else {
//        console.log(false);
//    }
//}
//
//
//double23([2,2]);
//double23([3,3]);
//double23([2,3]); 
//double23([12,20,42]);
//double23([2,2,2]);

