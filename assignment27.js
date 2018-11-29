//class Town{
//    constructor(name,buildYear){
//        this.name = name;
//        this.buildYear = buildYear;
//    }
//    
//}
//
//class Park extends Town{
//    constructor(name,buildYear,numberOfTrees,parkArea){
//        super(name,buildYear);
//        this.numberOfTrees = numberOfTrees;
//        this.parkArea = parkArea;
//    }
//    
//    treeDensity(){
//        return this.numberOfTrees/this.parkArea;
//    }
//    
//        
//    more1000(){
//        if(this.numberOfTrees >= 1000){
//            return this.name + " Park";
//        } else {
//            return this.name + " Park NOT";
//        }
//    }
//}
//
//class Street extends Town{
//    constructor(name,buildYear,streetClass){
//        super(name,buildYear);
//        this.streetClass = streetClass;
//    }
//}
//
//
//let p1 = new Park("Olympic",1890,1200,20000);
//let p2 = new Park("Samamish",1902,500,10000);
//let p3 = new Park("National",1910,3000,50000);
//
//let parks = new Map();
//parks.set(p1);
//parks.set(p2);
//parks.set(p3);
//
//
//let s1 = new Street("Pike",1930,"tiny");
//let s2 = new Street("Harrigton",1925,"small");
//let s3 = new Street("Kirkland",1902,"big");
//let s4 = new Street("Royal Hill",1880, "huge");
//
//let streets = new Map();
//streets.set(s1);
//streets.set(s2);
//streets.set(s3);
//streets.set(s4);
//
//
//// 1) Tree density of each park in the town
//for(let [key,value] of parks.entries()){
//    console.log(`Tree density of the ${key.name} Park is: ${key.treeDensity()}`);
//}
//
//
//// 2) The name of the park that has more than 1000 trees
//for(let [key,value] of parks.entries()){
//    console.log(`${key.more1000()} has more than 1000 trees`);
//}
//
//
//// 3) Size classification of all streets
//for(let [key,value] of streets.entries()){
//    console.log(`Size classification of ${key.name} Street is: ${key.streetClass}`);
//}







//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
//It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (formula: number of trees / park area)
//3. The name of the park that has more than 1000 trees
//5. Size classification of all streets: tiny/small/normal/big/huge. 
//All the report data should be printed to the console.
//Hint: Use some of the ES6 features: classes, subclasses, template strings, maps, arrow functions, destructing, etc.



//TOWN
//3 park
//4 street
//name, build year
//
//
//1- Tree density->park (number of trees/park area)
//2- The name of the park that has more than 1000
//3- Classification of streets (tiny/small/normal/big/huge)




//class Town{
//    constructor(name,buildYear){
//        this.name = name;
//        this.buildYear = buildYear;
//    }
//    
//}
//
//
//class Park extends Town{
//    constructor(name,buildYear,numberOfTrees,parkArea){
//        super(name,buildYear);
//        this.numberOfTrees = numberOfTrees;
//        this.parkArea = parkArea;
//    }
//    
//    //1)
//    treeDensity(){
//        return this.numberOfTrees/this.parkArea;
//    }
//    
//    //2)
//    moreThan1000(){
//        if(this.numberOfTrees>1000){
//            return this.name;
//        }else{
//            return "NOT -> " + this.name;
//        }
//    }
//  
//}
//
//
//
//class Street extends Town{
//    constructor(name,buildYear,size){
//        super(name,buildYear);
//        this.size = size;
//    }
//    
//    //3)
//    sizeOfStreet(){
//        return this.size;
//    }
//}
//
//
//
//
//let p1 = new Park("Olympic",1982,2000,20000);
//let p2 = new Park("National",1992,3000,50000);
//let p3 = new Park("Samamish",2000,900,10000);
//
//
//let s1 = new Street("Berlin",1980,"huge");
//let s2 = new Street("Kirkland",1990,"normal");
//let s3 = new Street("Florance",2000,"small");
//let s4 = new Street("Hurricane",2005,"tiny");
//
//
//
//let parks = new Map();
//parks.set(p1);
//parks.set(p2);
//parks.set(p3);
//
//
//
//let streets = new Map();
//streets.set(s1);
//streets.set(s2);
//streets.set(s3);
//streets.set(s4);
//
//
//
//// 1) Tree Density
//for(let [key,value] of parks.entries()){
//    console.log(`Tree density of ${key.name} is: ${key.treeDensity()}`);
//}
//
//// 2) More than 1000
//for(let [key,value] of parks.entries()){
//    console.log(`Number of tree is more than 1000 : ${key.moreThan1000()}`);
//}
//
//
//// 3) Street classification
//for(let [key,value] of streets.entries()){
//    console.log(`Street class for ${key.name} is : ${key.sizeOfStreet()}`);
//}




//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
//It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (formula: number of trees / park area)
//2. The name of the park that has more than 1000 trees
//3. Size classification of all streets: tiny/small/normal/big/huge. 
//All the report data should be printed to the console.
//Hint: Use some of the ES6 features: classes, subclasses, template strings, maps, arrow functions, destructing, etc.



//TOWN
//3 parks
//4 streets
//name , build year
//
//Final report:
//1. Tree density of each park in the town (formula: number of trees / park area)
//2. The name of the park that has more than 1000 trees
//3. Size classification of all streets: tiny/small/normal/big/huge.


//class Town{
//    constructor(name,buildYear){
//        this.name = name;
//        this.buildYear = buildYear;
//    }
//}
//
//class Parks extends Town{
//    constructor(name,buildYear,numberOfTrees,parkArea){
//        super(name,buildYear);
//        this.numberOfTrees = numberOfTrees;
//        this.parkArea = parkArea;
//    }
//    
//    treeDensity(){
//        return this.numberOfTrees/this.parkArea;
//    }
//    
//    more1000(){
//        if(this.numberOfTrees > 1000){
//            return this.name;
//        }else{
//            return "NOT ->" + this.name;
//        }
//    }
//}
//
//
//class Streets extends Town{
//    constructor(name,buildYear,size){
//        super(name,buildYear);
//        this.size = size;
//    }
//    
//    streetSize(){
//        return this.size;
//    }
//}
//
//
//
//let p1 = new Parks("Olympic",1982,2000,20000);
//let p2 = new Parks("National",1992,3000,50000);
//let p3 = new Parks("Samamish",2000,900,10000);
//
//
//let s1 = new Streets("Berlin",1980,"huge");
//let s2 = new Streets("Kirkland",1990,"normal");
//let s3 = new Streets("Florance",2000,"small");
//let s4 = new Streets("Hurricane",2005,"tiny");
//
//
//let parks = new Map();
//parks.set(p1);
//parks.set(p2);
//parks.set(p3);
//
//
//let streets = new Map();
//streets.set(s1);
//streets.set(s2);
//streets.set(s3);
//streets.set(s4);
//
//
//
////1)Tree density of each park in the town
//for(let [key,value] of parks.entries()){
//    console.log(`Tree density of ${key.name} is: ${key.treeDensity()}`);
//}
//
//
////2)The name of the park that has more than 1000 trees
//for(let [key,value] of parks.entries()){
//    console.log(`Has more than 1000 trees: ${key.more1000()}`);
//}
//
//
//
////3)Size classification of all streets
//for(let [key,value] of streets.entries()){
//    console.log(`Class of ${key.name} street is: ${key.streetSize()}`);
//}

















