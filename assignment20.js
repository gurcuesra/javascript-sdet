//// Answer 1
//
//
//// 1)
//var obj1 = {
//    name: "Mark",
//    mass: 85,     // as kg
//    height: 1.75   // as m
//}
//
//var obj2 = {
//    name: "John",
//    mass: 90,     // as kg
//    height: 1.80   // as m
//}
//
//
//
//// 2)
//obj1.BMI = function(){
//    var calcBMI = this.mass / (this.height * this.height);
//    return calcBMI;
//}
//
//obj2.BMI = function(){
//    var calcBMI = this.mass / (this.height * this.height);
//    return calcBMI;
//}
//
//
//
//// 3)
//if(obj1.BMI() > obj2.BMI()){
//    console.log(obj1.name + "'s BMI is greater than " + obj2.name + ". And " + obj1.name + "'s BMI is: " + obj1.BMI());
//} else if(obj2.BMI() > obj1.BMI()){
//    console.log(obj2.name + "'s BMI is greater than " + obj1.name + ". And " + obj2.name + "'s BMI is: " + obj2.BMI());
//} else {
//    console.log(obj1.name + " and " + obj2.name + " BMI is " + obj1.BMI());
//}
//
//
//
//
//
//
// Answer 2

// 1)
function Salary(firstName, lastName, gender, age, studyingHours){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.studyingHours = studyingHours;
    
// 2)
    var a = [];
    for(var i=1; i<=5; i++){
        var studyingHours = parseInt(prompt("Write weekly studying hours! (between 0 to 10)"));
        a.push(studyingHours);    
    }
    alert("!!!");
    
// 3)
    this.average = function(){
        var total = 0;
        for(var i=0; i< a.length; i++){
            total = total + a[i];
        }
        return total/5;
    };

// 4) 
    this.salaryCalc = function(baseSalary){
        if(this.average() >= 0 && this.average() <= 4) {
            console.log("Not eligible to go to market, and study more");
        } else if(this.average() > 4 && this.average() <= 6){
            console.log(this.firstName + " " + this.lastName + " Salary is $" + (baseSalary*0.10 + baseSalary));
            
        } else if(this.average() > 6 && this.average() <= 8){
            console.log(this.firstName + " " + this.lastName + " Salary is $" + (baseSalary*0.20 + baseSalary));
            
        } else if(this.average() > 8 && this.average() <= 10){
            console.log(this.firstName + " " + this.lastName + " Salary is $" + (baseSalary*0.50 + baseSalary));
        } else {
            console.log("Studying hours cannot be less than 0 and more than 10!!!");
        }
    };

}

var student1 = new Salary("Esra","Kartal","F","28");
var student2 = new Salary("Necati","Kartal","M","36");
// 5)
student1.salaryCalc(100000);
student2.salaryCalc(100000);







