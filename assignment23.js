// 12) ES6 way:

// 1)
let workHA = [];
for(let i=0; i<4; i++){
    workHA[i] = parseInt(prompt(`Please enter your work hour for ${i+1}th week!`));
    
}

// 2)
let askWage = parseInt(prompt(`Please enter your wage!`));


// 3)
function employee(fName,lName,birthYear){
    this.fName = fName;
    this.lName = lName;
    this.birthYear = birthYear;
    
    // 4)
    this.employeeID = () => {
        const today = new Date();
        let age = today.getFullYear() - this.birthYear;
        return this.fName.charAt(0) + this.lName.charAt(0) + age;
    }
}

// 8)
employee.prototype.calcOT = () =>{
    let totalOT = 0;
    for(let i=0; i< workHA.length;i++){
        if(workHA[i] > 40){
           totalOT += workHA[i] - 40; 
        }
        
    }
    return totalOT;
        
}

// 5)
function Payroll(hours, insurance){
    this.hours = hours;
    this.insurance = insurance;
    
    // 6)
    this.totalHours = () =>{
        let totalH =0;
        for(let i=0; i<this.hours.length;i++){
            totalH += this.hours[i];
        }
        return totalH;
    }
    
    // 7)
    this.calEarning = () => {
        let earning =  askWage * this.totalHours();
        
        if(this.insurance){
            return earning + 600;
        } else {
            return earning;
        }
    }
    
    // 9)
    this.earningOT = () =>{
        let eOT = this.calEarning() + (askWage * this.calcOT() * 1.5);
        return eOT;
    }
        
}




// 10)
let emp = new employee("mike","smith",1980);
let pay = new Payroll(workHA,true);

// 11)
pay.__proto__.__proto__= employee.prototype;

console.log(`Employer ID: ${emp.employeeID()}'s overtime hours for month is:${emp.calcOT()} and earning is: $ ${pay.earningOT()}`);
