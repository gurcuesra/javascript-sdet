//// Answer 1
//function sum28(array){
//    var bool =false;
//    var sum=0;
//    for(var i=0; i<array.length; i++){
//        if(array[i] == 2){
//            sum = sum + array[i];
//        }
//        if(sum == 8){
//            bool = true;
//        } else {
//            bool = false;
//        }
//    }
//    if(bool == true){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//sum28([2, 3, 2, 2, 4, 2]);     // - >true
//sum28([2, 3, 2, 2, 4, 2, 2]);  // - >false
//sum28([1, 2, 3, 4]);           //- >false
//
//
//
//// Answer 2
//
//function more14(array){
//    var count1 =0;
//    var count4 =0;
//    for(var i=0; i<array.length;i++){
//        if(array[i] ==1){
//            count1++;
//        } if(array[i] ==4){
//            count4++;
//        }
//    }
//    if(count1 > count4){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//more14([1, 4, 1]);      // ->true
//more14([1, 4, 1, 4]);   // ->false
//more14([1, 1]);         // ->true
//
//
//
//// Answer 3
//
//function fizzArray(number){
//    var a = [];
//    for(var i=0;i<number;i++){
//        a.push(i);
//    }
//    console.log(a);
//}
//
//fizzArray(4)  //→ [0, 1, 2, 3]
//fizzArray(1)  //→ [0]
//fizzArray(10) //→ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//
//
//// Answer 4
//
//function isEveryWhere(array,number){
//    var bool =false;
//    for(var i=0; i<array.length; i++){
//        if(number == array[i] && number == array[i+2]){
//            bool = true;
//        }
//    }
//    if(bool == true){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//
//isEveryWhere([1, 2, 1, 3], 1);     //- >true
//isEveryWhere([1, 2, 1, 3], 2);     //- >false
//isEveryWhere([1, 2, 1, 3, 4], 1);  //- >true
//isEveryWhere([1, 2, 4, 3, 1], 1);  //- >false
//
//
//
//
//
//// Answer 5
//
//function matchUp(array1,array2){
//    var count = 0;
//    if(array1.length == array2.length){
//        for(var i=0; i<array1.length; i++){
//            
//            if(array1[i]> array2[i]){
//                var a = array1[i] - array2[i];
//                if(a<=2 && array1[i]!= array2[i]){
//                    count++;
//                }
//            } else {
//                var b = array2[i] - array1[i]; 
//                if(b<=2 && array1[i]!= array2[i]){
//                    count++;
//                }
//            } 
//        }
//        console.log(count);
//    }    
//}
//
//matchUp([1, 2, 3], [2, 3, 10]);  //->2
//matchUp([1, 2, 3], [2, 3, 5]);   //->3
//matchUp([1, 2, 3], [2, 3, 3]);   //->2
//
//
//
//// Answer 6
//
//function modThree(array){
//    var countEven = 0;
//    var countOdd = 0;
//    for(var i=0; i< array.length; i++){
//        if(array[i] % 2 == 0){
//            countEven++;
//        } else {
//            countOdd++;
//        }
//    }
//    
//    if(countEven == 3 || countOdd == 3){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//modThree([2, 1, 3, 5]);  //->true
//modThree([2, 1, 2, 5]);  //->false
//modThree([2, 4, 2, 5]);  //->true
//
//
//
//// Answer 7
//
//function tripleUp(array){
//    var bool = false;
//    for(var i=0; i< array.length; i++){
//        if(array[i]+1 == array[i+1] && array[i]+2 == array[i+2]){
//            bool = true;
//        }
//    }
//    
//    if(bool == true){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//    
//}
//
//tripleUp([1, 4, 5, 6, 2]);    // ->true
//tripleUp([1, 2, 3]);          // ->true
//tripleUp([1, 2, 4]);          // ->false
//tripleUp([1, 2, 4, 5, 8, 9]); // ->false
//
//
//
//// Answer 8
//
//function fizzArray3(startNum,endNum){
//    var a=[];
//    for(var i=startNum; i<endNum; i++){
//        a.push(i);
//    }
//    console.log(a);
//}
//
//fizzArray3(5, 10)   // → [5, 6, 7, 8, 9]
//fizzArray3(11, 18)  // → [11, 12, 13, 14, 15, 16, 17]
//fizzArray3(1, 3)    // → [1, 2]



// Answer 9

function tenRun(array){
    var a = []; 
    for(var i=0;i<array.length;i++){
        if(array[i] % 10 == 0){
            var b= array[i];
        } else if(array[i]%10 != 0 && array[i+1] ==10){
            b=array[i];
        }
        a.push(b);
    }
    console.log(a);
}

tenRun([2, 10, 3, 4, 20, 5])  //→ [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2])        //→ [10, 10, 20, 20]
tenRun([10, 1, 9, 20])        //→ [10, 10, 10, 20]


// Ozzy's way:
//
//function tenRun(array){
//    
//    for (var i=0; i< array.length; i++){
//        if(array[i] % 10 == 0){
//            for(var j=i+1; j<array.length && (array[j]%10!=0); j++){
//                array[j] = array[i];
//            }
//        }
//    }
//    console.log(array);
//}
//
//tenRun([2, 10, 3, 4, 20, 5])  //→ [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2])        //→ [10, 10, 20, 20]
//tenRun([10, 1, 9, 20])        //→ [10, 10, 10, 20]
//tenRun([1,2,3,4,5,6,7,10,12,13,4]);


// Answer 10

//function notAlone(array,number){
//    for(var i=0; i< array.length; i++){
//        if(number == array[i]){
//            if(array.indexOf(array[i-1])!=-1 && array.indexOf(array[i+1])!=-1){
//                if(number < array[i-1]){
//                    array[i] = array[i-1];
//                }
//            
//                if(number < array[i+1]){
//                    array[i] = array[i+1];
//                }
//            }
//            
//        }
//    }
//    console.log(array);
//}
//
//notAlone([1, 2, 3], 2);            // → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2);   // → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3);               // → [3, 4]
































