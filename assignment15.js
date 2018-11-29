//// Answer 1
//
//function fix23(array){
//    for(var i=0; i< array.length; i++){
//        if (array[i] == 2 && array[i+1] == 3){
//            array[i+1] = 0;
//        }
//    }
//    console.log(array);
//}
//
//fix23([1,2,3]);
//fix23([2,0,5]);
//fix23([1,2,1]);
//fix23([11,2,13,3,2]);
//
//
//// Answer 2
//
//function start1 (array1, array2){
//    var counter =0;
//    if(array1[0] == 1){
//        counter++;
//        if(array2[0] == 1){
//            counter++;
//        }
//    } else if(array2[0] == 1){
//        counter++;
//    }
//    console.log(counter);
//    
//}
//start1([1,2,3],[1,3]);
//start1([7,2,3],[1]);
//start1([1,2],[]);
//start1([3,2,4],[4,3,4]);


// Ozzy's way:

//function start1 (array1, array2){
//    var counter =0;
//    if(array1[0] == 1){
//        counter++;
//    }
//    
//    if(array2[0] == 1){
//        counter++;
//    }
//    console.log(counter);
//    
//}
//start1([1,2,3],[1,3]);
//start1([7,2,3],[1]);
//start1([1,2],[]);
//start1([3,2,4],[4,3,4]);

//// Answer 3
//
//function biggerTwo(array1, array2){
//    var a = 0;
//    for(var i=0; i<array1.length; i++){
//        a = a + array1[i];
//    }
//    
//    var b =0;
//    for(var i=0; i<array2.length; i++){
//        b = b + array2[i];
//    }
//    
//    if (a == b){
//        console.log("equal");
//    } else if (a > b){
//        console.log(array1);
//    } else if (b > a){
//        console.log(array2);
//    }
//}
//
//biggerTwo([1, 2], [3, 4]); // - >[3,4]
//biggerTwo([5, 6], [3, 8]); // - >equal
//biggerTwo([1, 1], [1, 0]); // - >[1,1]
//
//
//// Answer 4
//
//function plusTwo (array1, array2){
//    var a = [];
//    for(var i=0; i< array1.length; i++){
//        a.push(array1[i]);
//    }
//    
//    for(var i=0; i< array2.length; i++){
//        a.push(array2[i]);
//    }
//    
//    console.log(a);
//    
//}
//
//plusTwo([1, 2], [3, 4]); //- >[1,2,3,4]
//plusTwo([4, 4], [2, 2]); //- >[4,4,2,2]
//plusTwo([9, 2], [3, 4]); //- >[9,2,3,4]
//
//
//
//// Answer 5
//
//function swapEnds(array){
//    var a =[];
//    a.push(array[array.length-1]);
//    for (var i=0; i<array.length; i++){
//        if(i >= 1 && i < array.length-1){
//            a.push(array[i]);
//        }
//    }
//    a.push(array[0]);
//    console.log(a);
//}
//
//swapEnds([1, 2, 3, 4]);    // -> [4,2,3,1];
//swapEnds([1, 2, 3]);       // -> [3,2,1]
//swapEnds([8, 6, 7, 9, 5]); // -> [5,6,7,9,8]
//
//
//
//// Answer 6
//
//function countEvens(array){
//    var counter = 0;
//    for(var i=0; i< array.length; i++){
//        if(array[i] % 2 == 0){
//            counter++;
//        }
//    }
//    console.log(counter);
//}
//
//countEvens([2, 1, 2, 3, 4]); //->3
//countEvens([2, 2, 0]);       // ->3
//countEvens([1, 3, 5]);       // ->0
//
//
//
//// Answer 7
//
//function bigDiff(array){
//    var largest = array[0];
//    var smallest = array[0];
//    for(var i=0; i<array.length; i++){
//        if(array[i] > largest){
//            largest = array[i];
//        } else if(array[i] < smallest){
//            smallest = array[i];
//        } 
//    }
//    
//    console.log(largest - smallest);
//    
//}
//
//bigDiff([10, 3, 5, 6]); //→ 7
//bigDiff([7, 2, 10, 9]); //→ 8
//bigDiff([2, 10, 7, 2]); //→ 8
//
//
//
//// Answer 8
//
//function sum13(array){
//    var a = 0;
//    for(var i=0; i< array.length; i++){
//        if(array[i] != 13){
//            a = a + array[i];
//        }
//        
//        if(array[i] == 13){
//            break;
//        }
//    }
//    console.log(a);
//}
//
//sum13([1, 2, 2, 1]);       // ->6
//sum13([1, 1]);             // ->2
//sum13([1, 2, 2, 1, 13]);   // ->6
//sum13([1, 2, 2, 1, 13,3]); // ->6
//
//
//
//
//// Answer 9
//
//function sum67(array){
//    var sum=0;
//        
//    if(array.includes(6) == false && array.includes(7) == false){
//        for(var i=0;i<array.length; i++){
//            sum = sum + array[i];
//        }
//        console.log(sum);
//    } 
//    
//    if(array.includes(7)){
//        var copy = array.slice(array.indexOf(7)+1);
//        array.splice(array.indexOf(6),(array.indexOf(7)));
//        
//        for(var z=0;z<copy.length;z++){
//            array.push(copy[z]);
//        }
//        
//        var b=0;
//        for(var j=0; j<array.length;j++){
//            b = b + array[j];
//        }
//        console.log(b);
//    }
//        
//    if(array.includes(6)){
//        array.splice(array.indexOf(6));
//        var a=0;
//        for(var p=0;p<array.length; p++){
//            a = a + array[p];
//        }
//        console.log(a);
//    }
//    
//}
//
//sum67([1, 2, 2]);                   //->5
//sum67([1, 2, 2, 6, 99, 99, 7]);     //->5
//sum67([1, 1, 6, 7, 2]);             //->4
//sum67([1, 1, 6, 2]);                //->2
//sum67([1, 2, 2, 6, 99, 99, 7,3,4]); //->12
//
//
//// Answer 10
//
//function has22(array){
//    var bool = false;
//    for(var i=0; i< array.length; i++){
//        if(array[i] == 2 && array[i+1] == 2){
//            bool = true;
//        }
//    }
//    
//    if (bool == true){
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}
//
//
//has22([1, 2, 2]);    // ->true
//has22([1, 2, 1, 2]); // ->false
//has22([2, 1, 2]);    // ->false
//has22([2,2, 1, 2]);  // ->true



