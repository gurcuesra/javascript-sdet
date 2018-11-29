// Task 1

//var foodType;
//foodType = prompt("Enter your Fav food");
//
//switch (foodType) {
//    case "Turkish" :
//        console.log("You love kebab");
//        break;
//    case "Italian" :
//        console.log("you love pizza");
//        break;
//    case "Uyghur" :
//        console.log("You have laghman");
//        break;
//    default:
//        console.log("No more option");
//        break;
//}

// Task 2

//var laptops;
//laptops = prompt("Enter your laptop model (apple, dell, acer, etc.)");
//
//switch (laptops) {
//    case "apple" :
//        console.log("Apple - no virus");
//        break;
//    case "dell" :
//        console.log("Tough one");
//        break;
//    case "acer" :
//        console.log("Cheap one");
//        break;
//    default:
//        console.log("Do not buy that one!");
//        break;
//}


// Task 3
//var num = prompt("Enter your number");
//
//switch(num) {
//    case 1:
//    case 2:
//    case 3:
//        console.log("ok");
//        break;
//    case 4:
//        console.log("not ok");
//        break;
//    default:
//        console.log("enter smthlglese");
//        break;
//}


// Task 4

//var days = parseInt(prompt("Please enter day as number (1- Monday, etc.)"));
//
//switch (days) {
//    case 1:
//        console.log("Monday");
//        break;
//    case 2:
//        console.log("Tuesday");
//        break;
//    case 3:
//        console.log("Wednesday");
//        break;
//    case 4:
//        console.log("Thursday");
//        break;
//    case 5:
//        console.log("Friday");
//        break;
//    case 6:
//        console.log("Saturday");
//        break;
//    case 7:
//        console.log("Sunday");
//        break;
//    default:
//        console.log("Not valid day")
//}


// Question: As a user, I want to learn day of month. For ex. How many day take the May? So that, what should you do :) 

var month, year;

month = prompt("Please enter month! For ex. 5 is for May");

if (month <= 0 || month > 12){
    console.log("Invalid month...")
} else { 
    year = parseInt(prompt("Please enter year"));
    if (year <= 0) {
        console.log("Invalid year")
    }else {
        if (month == ""){
    console.log("Invalid month...")
    }
    if (month == "1") {
        console.log("January takes 31 days");
    } else if (month == "2") {
        if (year % 4 == true) {
            console.log("February takes 29 days");
        } else {
            console.log("February takes 28 days");
        }
    } else if (month == "3") {
        console.log("March takes 31 days");
    } else if (month == "4") {
        console.log("March takes 30 days");
    } else if (month == "5") {
        console.log("March takes 31 days");
    } else if (month == "6") {
        console.log("March takes 30 days");
    } else if (month == "7") {
        console.log("March takes 31 days");
    } else if (month == "8") {
        console.log("March takes 31 days");
    } else if (month == "9") {
        console.log("March takes 30 days");
    } else if (month == "10") {
        console.log("March takes 31 days");
    } else if (month == "11") {
        console.log("March takes 30 days");
    } else if (month == "12") {
        console.log("March takes 31 days");
    }


}






















