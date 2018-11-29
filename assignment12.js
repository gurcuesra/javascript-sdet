//// Answer 1
//
//var newArray = [];
//
//var k=1;
//for(var i=1;i<=8;i++){
//    var a ="";
//    for(var p=1; p<=8;p++){
//        a = a + k++ + " ";
//        
//    }
//    newArray.push(a);
//}
//
//for(var j=0;j<newArray.length;j++){
//    console.log(newArray[j]);
//}
//
//// Ozzy's way:
//
// Creating array
//var myArray = Array(8);
//for (var i=0; i<myArray.length; i++){
//    myArray[i]=Array(8);
//}
//
////Assigning the values
//var ctr =1;
//for(var i=0; i<myArray.length;i++){
//    for(var j=0;j<myArray[i].length;j++){
//        myArray[i][j] =ctr++; 
//    }
//}
//
//// Printing the elements
//for(var i=0;i<myArray.length;i++){
//    var str="";
//    for(var j=0; j<myArray[i].length;j++){
//        str = str + myArray[i][j] + " ";
//    }
//    console.log(str);
//}
//
//
//// Answer 2
//
//var bwArray = [];
//for(var i=1; i<=8; i++){
//    var a = "";
//    for(var p=1; p<=4; p++){
//        if(i%2==1){
//            a = a + "W B ";    
//        } else {
//            a = a + "B W ";
//        }  
//    }
//    bwArray.push(a);
//}
//
//for(var j=0;j<bwArray.length;j++){
//    console.log(bwArray[j]);
//}
//
//
//
//// Ozzy's way:
//
//var myArray = Array(8);
//for (var i=0; i<myArray.length; i++){
//    myArray[i]=Array(8);
//}
//
//
//for(var i=0; i<myArray.length;i++){
//    for(var j=0;j<myArray[i].length;j++){
//        if((i+j)%2==0){
//            myArray[i][j] ="W"; 
//            
//        } else{
//            myArray[i][j] ="B"; 
//        }
//    }
//}
////
////for(var i=0;i<myArray.length;i++){
////    var str="";
////    for(var j=0; j<myArray[i].length;j++){
////        str = str + myArray[i][j] + " ";
////    }
////    console.log(str);
////}
//
//
//// Answer 3
//var numbers = [
//    [90, 10, 231],
//    [-20, 80, 100, 23, 54],
//    [45, 22],
//    [87, 98, -100, 49, 73, 35, 19]
//];
//
//
//var bool = false;
//var greatest = numbers[0][0];
//for(var i=0; i<numbers.length; i++){
//    for(var p=0; p<numbers[i].length; p++){
//        if(numbers[i][p] > greatest){
//            greatest = numbers[i][p];
//            bool=true;   
//        }    
//    }
//}
//
//if(bool == true){
//   console.log("Greatest number is: " + greatest); 
//}
//
//
//
//
//
//
//

