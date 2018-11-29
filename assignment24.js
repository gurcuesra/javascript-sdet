let level;
// 1)
function Game(){
    level =0;
}



// 3)
Game.prototype.play = function(){
    level++;
    return level;
}

let game1 = new Game();
for(var i=1; i<=10; i++){
    console.log(`Welcome to Level ${game1.play()}`);
}



// 4)
Game.prototype.unlock = function(){
    if(level == 10){
        this.deployLaser = function(){
            return `${this.name} blasting you with laser beams.`;
        }
        
    }
}

// 2)
function Robot(name,year,owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}

// 5)
let robot1 = new Robot("Roby",2018,"Esra");
let robot2 = new Robot("Rosie",2018,"Esra");
robot1.__proto__.__proto__ = Game.prototype;


robot1.unlock();
console.log(robot1.deployLaser());
robot2.unlock();
console.log(robot2.deployLaser());



// SECOND WAY: -> YASAR's WAY:
//// 1)
//function Game(){
//    this.level =0;
//}
//
//// 2)
//function Robot(name,year,owner){
//    this.name = name;
//    this.year = year;
//    this.owner = owner;
//}
// 
//// 3)
//Game.prototype.play = function(level){
//    level++;
//    console.log(`Welcome to level ${level}`);
//    this.unlock(level);
//    return level;
//}    
//    
//// 4)    
//Game.prototype.unlock = function(level){
//    if(level == 10){
//        Game.prototype.deployLaser = function(){
//            console.log(`${this.name} is blasting you with laser beams!`)
//        }
//    }
//}   
//
//// 5)
//let game = new Game();
//let robot1= new Robot("Robby",2018,"Terminator");
//let robot2= new Robot("Rosie",2018,"cyborg");
//robot1.__proto__.__proto__ = Game.prototype;
//var level = game.level;
//
//do{
//    level = game.play(level);
//}while(level<=10);
//
//
//robot1.deployLaser();
//robot2.deployLaser();

