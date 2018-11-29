function Questions(question,answers,correctAnswer){
    this.question = question;
    this.answer = answers;
    this.correctAnswer = correctAnswer;
}

var q1 = new Questions("Is JS the coolest programming language in the world?", ["Yes","No"], 0);

var q2 = new Questions("Which one is NOT a datatype for JS?", ["String", "Number", "Integer", "Boolean"], 2);

var q3 = new Questions("Which one is NOT a correct variable name?", ["name1", "name_1", "name$", "name&"], 3);

var q4 = new Questions("Which keyword shows data type of a variable?", ["dataTypeOf", "typeof", "number", 12], 1);

var q5 = new Questions("Which one is NOT an arithmetic operator?", ["++", "+=", "&&", "--"], 2);

var array = [];
array.push(q1);
array.push(q2);
array.push(q3);
array.push(q4);
array.push(q5);


this.randomQ = function(){
    var a = Math.floor(Math.random()*array.length);
    console.log(array[a].question);
    for(var i=0; i<array[a].answer.length; i++){
        console.log(i + ") " +array[a].answer[i]);
    }
    
    this.ask = function(){
        var askUser = parseInt(prompt("Please enter a number!"));
    
        if(askUser == array[a].correctAnswer){
            console.log("Correct!!! ->" + array[a].correctAnswer);
        } else {
            console.log("NOT Correct!!! Correct answer is: " + array[a].correctAnswer);
        }
    
    }

    this.ask();
    
}

this.randomQ();





