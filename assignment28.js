//let dadHappy = function(isHappy){
//    return new Promise((resolve,reject) =>{
//        if(isHappy){
//            resolve("1.Dad happy"); 
//        } else {
//            reject("Dad NOT Happy");
//        }
//        
//    })
//}
//
//let showNewCar = function(){
//    return new Promise((resolve,reject)=>{
//        resolve("3.Show your new car")
//    })
//}
//
//let newCar = function(happy){
//    return new Promise((resolve,reject)=>{
//        dadHappy(happy).then(a=>{
//           showNewCar(a).then(b=>{
//               resolve(a + " 2.Got new car " + b);
//           })
//        }).catch(c=>{
//            reject(c);
//        })
//        
//    })
//}
//
//
//
//// If dad is happy   // -> 1.Dad happy 2.Got new car 3.Show your new car
//newCar(true).then(result=>{
//    console.log(result);
//}).catch(r => {
//    console.log(r);
//})
//
//
//// If dad is NOT happy  // -> Dad NOT Happy
//newCar(false).then(resultFalse=>{
//    console.log(resultFalse);
//}).catch(rFalse => {
//    console.log(rFalse);
//})
         




//function myDadHappy(isHappy){
//    return new Promise((resolve,reject)=>{
//        if(isHappy){
//            resolve("1.My dad is happy");
//        }else{
//            reject("1.My dad is NOT happy");
//        }
//    })
//}
//
//function newCar(happy){
//    return new Promise((resolve,reject)=>{
//        if(happy){
//           resolve("\n2.I got my new car"); 
//        }else{
//            reject("\n2.I did NOT get my new car")
//        }
//                           
//    })
//}
//
//function showCar(){
//    return new Promise((resolve,reject)=>{
//       
//        resolve("\n3.I can show my new car");
//    })
//}
//
//
//myDadHappy(true).then(function(a){
//    return newCar().then(function(b){
//        return showCar().then(function(c){
//            console.log(a+b+c);
//        })
//    })
//})
//
//
//myDadHappy(false).catch(function(a){
//    console.log(a);
//})



//function myDadHappy(isHappy){
//    return new Promise((resolve,reject)=>{
//        if(isHappy){
//            resolve("1.My dad is happy");
//        }else{
//            reject("1.My dad is NOT happy");
//        }
//    })
//}
//
//function newCar(getCar){
//    return new Promise((resolve,reject)=>{
//        if(getCar){
//            resolve("\n2.I got my new car");
//        }else{
//            reject("\n2.I did NOT get mey new car");
//        }
//            
//        
//                           
//    })
//}
//
//function showCar(showed){
//    return new Promise((resolve,reject)=>{
//       if(showed){
//          resolve("\n3.I can show my new car"); 
//       }else{
//           reject("\n3.I can NOT show my new car");
//       }
//        
//    })
//}
//
//
//myDadHappy(true).then(function(a){
//    return newCar(true).then(function(b){
//        return showCar(true).then(function(c){
//            console.log(a+b+c);
//        })
//    }) 
//})
//
//
//myDadHappy(false).catch(function(a){
//    return newCar(false).catch(function(b){
//        return showCar().catch(function(c){
//            console.log(a+b+c);
//        }) 
//    })
//})


function myDadHappy(isHappy){
    return new Promise((resolve,reject)=>{
        if(isHappy){
            resolve("1.My dad is happy");
        }else{
            reject("1.My dad is NOT happy");
        }
    })
}

function newCar(gotCar){
    return new Promise((resolve,reject)=>{
        if(gotCar){
            resolve("\n2.I got my new car");
        }else{
            reject("\n2.I did NOT get my new car")
        }
                              
    })
}

function showCar(showedCar){
    return new Promise((resolve,reject)=>{
        if(showedCar){
           resolve("\n3.I can show my new car"); 
        }else{
            reject("\n3.I can NOT show my new car")
        }
        
    })
}


myDadHappy(true).then(function(a){
    return newCar(true).then(function(b){
        return showCar(true).then(function(c){
            console.log(a+b+c);
        })
    })
})

myDadHappy(false).catch(function(d){
    return newCar(false).catch(function(e){
        return showCar(false).catch(function(f){
            console.log(d+e+f);
        })
    })
})


myDadHappy(true).then(function(g){
    return newCar(false).catch(function(h){
        return showCar(false).catch(function(i){
            console.log(g+h+i);
        })
    })
})





























