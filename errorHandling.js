//// try .. catch block:
//try{
//    console.log("Hello");
//    console.log(sayHello());
//    console.log("This is an error.")
//}
//
//catch(e){
//    //console.log("I see your error.");
//    
//    console.log("Description: " + e.description);
//    console.log("Message: " + e.message);
//    console.log("Stack trace: " + e.stack);
//}
//
//
////console.log("Ready to go");
//
//
//
//// finally:
//finally{
//    console.log("This line is guaranteed to execute");
//}




//// throw
//function divide(){
//    var num1 = parseInt(prompt("Enter num1"));
//    var num2 = parseInt(prompt("Enter num2"));
//    
//    try{
//        if(num2 == 0){
//            throw{
//                error: "Divide by zero error",
//                message:"Number cannot be zero"
//            }
//        }else{
//            console.log(`Result= ${num1/num2}`);
//        }
//    }
//    
//    catch(e){
//        console.log(e.error);
//        console.log(e.message);
//    }
//    
//    
//}
//
//
//divide(); 
////->Divide by zero error
////->Number cannot be zero
//// Those are coming from throw



// INTERVIEW QUESTION   
//function f(){
//
//    try{
//        console.log(0);         //-> 0
//        console.log(name2);     //-> name2 is undefined
//    }catch(e){
//        console.log(1);         //-> 1   
//        return true;            //-> when it comes return catch job is done
//        console.log(2);         //-> That's why,this is not print
//    }finally{
//        console.log(3);         //-> 3
//        return false;           //-> finally is working regardless. That's why,
//        console.log(4);         //-> when is see return function is and gives false
//    }
//    
//    console.log(5);             //->
//}
//
//console.log(f());               //->0,1,3,false



//// PRACTICE
//function mixString(a,b){
//    var arr=[];
//    for(var i=0;i<a.length;i++){
//        arr.push(a.charAt(i)); 
//    }
//    
//    var arr1=[];
//    for(var p=0; p<b.length;p++){
//        arr1.push(b.charAt(p));
//    }
//    
//    var str="";
//    if(arr.length==arr1.length){
//        for(var j=0; j<arr.length;j++){
//            str+= arr[j]+arr1[j];
//        }
//        return str;
//             
//    }else if(arr.length>arr1.length){
//        for(var z=0; z<arr1.length;z++){
//            str+= arr[z]+arr1[z];
//        }
//        for(var k=arr1.length;k<arr.length;k++){
//            str+=arr[k];
//        }
//        return str;
//    }else{
//        for(var j=0; j<arr.length;j++){
//            str+= arr[j]+arr1[j];
//        }
//        for(var i=arr.length;i<arr1.length;i++){
//            str+= arr1[i];
//        }
//        return str;
//    }
//           
//}
//
//console.log(mixString("abc","xyz"));
//console.log(mixString("Hi", "There"));// → “HTihere”
//console.log(mixString("xxxx", "There"));// → “xTxhxexre”
//console.log(mixString("xxx","X"));
//console.log(mixString("2/","27 around"));
//console.log(mixString("", "Hello"));  
//console.log(mixString("Abc", ""));   
//console.log(mixString("", ""));   
//console.log(mixString("a", "b"));   
//console.log(mixString("ax", "b")); 
//console.log(mixString("a", "bx"));   
//console.log(mixString("So", "Long"));    
//console.log(mixString("Long", "So"));













