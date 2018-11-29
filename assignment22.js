//// Car Gas Price Calculator
//
//// 1)
//var askMin = parseInt(prompt("Please enter minimum mileage"));
//var askMax = parseInt(prompt("Please enter maximum mileage"));
//
//var arrayM =[];
//for(var i=1; i<=4; i++){
//    var random = Math.round(Math.random()*(askMax - askMin)+askMin);
//    arrayM.push(random);
//}
//
//
//// 2)
//var regular = parseInt(prompt("Please enter regular gas price"));
//var premium = parseInt(prompt("Please enter premium gas price"));
//var supper = parseInt(prompt("Please enter supper gas price"));
//
//var gasPrice = {
//    regularP: regular,
//    premiumP: premium,
//    supperP: supper
//};
//
//
//
//// 3)
//function Car(make,model,year,mileage,level,tank){
//    this.make = make;
//    this.model = model;
//    this.year = year;
//    this.mileage = mileage;
//    this.level = level;
//    this.tank = tank;
//    
//    // 4)
//    this.averageM = function(){
//        var total = 0;
//        for(var i=0; i<arrayM.length; i++){
//            total = total + arrayM[i];
//        }
//        return total/4;
//    }
//    
//    // 5)
//    this.gasComsume = function(){
//        if(this.averageM() >= 0 && this.averageM() < 500){
//            return this.tank + this.tank*0.10;
//            
//        } else if(this.averageM() >= 500 && this.averageM() < 1000){
//            return this.tank + this.tank*0.20; 
//            
//        } else if(this.averageM() >= 1000 && this.averageM() < 5000){
//            return this.tank + this.tank*0.30;
//            
//        } else if(this.averageM() >= 5000 && this.averageM() < 10000){
//            return this.tank + this.tank*0.40;
//            
//        } else {
//            return this.tank + this.tank*0.50;
//        }
//    }
//    
//    // 6)
//    this.costGas = function(){
//        if(this.year == 2018){
//            return gasPrice.supperP * this.tank;
//        } else if(this.year >= 2010 && this.year < 2018){
//            return gasPrice.premiumP * this.tank;
//        } else if(this.year >= 2000 && this.year <2010){
//            return gasPrice.regularP * this.tank;
//        }
//    }
//}
//
//
//// 7)
//var car1 = new Car("Toyota", "Corolla", 2010, arrayM, "premium", 13);
//var car2 = new Car("Toyota", "Prius", 2015, arrayM, "supper", 13);
//
//
//console.log("Cost of the gas for the " + car1.make + " " + car1.model + " is $" + car1.costGas());
//
//console.log("Cost of the gas for the " + car2.make + " " + car2.model + " is $" + car2.costGas());
//
//
//
//
//



