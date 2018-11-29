// DATE OBJECT:
// Creating an instance a new Date:

// How to instantiate a date?

//var d = new Date();
//var d = new Date(value);
//var d = new Date(dateString);
//var d = new Date(year,month, day, hour, minute, second, millisecond);


// Examples:

//// Creates a new date object with the current date and time
//var a = new Date();
//console.log(a);      // Thu Aug 16 2018 07:18:45 GMT-0700 (Pacific Daylight Time)
//
//
//// Creates a new date object as zero time plus the number
//var b = new Date(100000000000);     // milliseconds
//console.log(b);      //Sat Mar 03 1973 01:46:40 GMT-0800 (Pacific Standard Time)
//
//
//// Creates a new date object from the specified date and time
//var c = new Date("October 13,2018 11:13:00");
//console.log(c);     // Sat Oct 13 2018 11:13:00 GMT-0700 (Pacific Daylight Time)
//
//
//// Creates a new date object from the specified date and time
//var d = new Date(99,5,24,11,33,30,0)
//console.log(d);     // Thu Jun 24 1999 11:33:30 GMT-0700 (Pacific Daylight Time)  (year,month,day,hour,minute,second, millisecond)

//
//// Months are zero index
//var d = new Date(2018,4,24,11,33,30,0);
//console.log(d);    // 4 -> is month. 
//
//
//
//// If at least two arguments are supplied, missing arguments are either set to 1(if day is missing) or 0 for all others
//var a = new Date(2018,3);
//console.log(a);   // Sun Apr 01 2018 00:00:00 GMT-0700 (Pacific Daylight Time)
//
//var c = new Date(98,5);
//console.log(c);   // Mon Jun 01 1998 00:00:00 GMT-0700 (Pacific Daylight Time)
//
//
//
//
//// If no arguments are provided, the constructor creates a JavaScript   Date Object for the curretn date and time according to system settings for timezone offset.
//
//var b = new Date();
//console.log(b);   // Current day



//// Date Formats:
//
//// ISO Date:
//var a = new Date("2015-03-25");
//console.log(a);
//
//
//// Short Date:
//var b = new Date("03/25/2015");
//console.log(b);
//
//
//
//// Long Date:
//var c = new Date("Mar 25 2015");   // "25 Mar 2015" -> other way
//console.log(c);
//
//
//// Full Date: 
//var d = new Date("Wednesday March 25 2015");
//console.log(d);



// GATE DATE METHODS:

//// getFullYear() Method: (yyyy)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getFullYear());   // 1969
//
//
//var today = new Date();
//var year = today.getFullYear();
//console.log(year);     // 2018
//
//
//
//// getMonth() Method: (0-11)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getMonth());   // 6
//
//
//var today = new Date();
//var month = today.getMonth();
//console.log(month);     // 7
//
//
//
//// getDate() Method: (1-31)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getDate());   // 20
//
//
//var today = new Date();
//var date = today.getDate();
//console.log(date);     // 16
//
//
//
//// getHours() Method: (0-23)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getHours());   // 8
//
//
//var today = new Date();
//var hours = today.getHours();
//console.log(hours);     // 7
//
//
//
//// getMinutes() Method: (0-59)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getMinutes());   // 20
//
//
//var today = new Date();
//var minutes = today.getMinutes();
//console.log(minutes);     // 15
//
//
//
//// getSeconds() Method: (0-59)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getSeconds());   // 18
//
//
//var today = new Date();
//var seconds = today.getSeconds();
//console.log(seconds);     // 59
//
//
//
//// getMilliseconds() Method: (0-999)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getMilliseconds());   // 0
//
//
//var today = new Date();
//var milliseconds = today.getMilliseconds();
//console.log(milliseconds);     // 967
//
//
//
//// getTime() Method: (milliseconds since January 1, 1970)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getTime());   // -14200782000
//
//
//var today = new Date();
//var time = today.getTime();
//console.log(time);     // 1534433109076
//
//
//
//// getDay() Method: (milliseconds since January 1, 1970)
//
//var moonLanding = new Date("July 20,69 08:20:18");
//console.log(moonLanding.getDay());   // 0
//
//
//var today = new Date();
//var day = today.getDay();
//console.log(day);     // 4




// SET DATE METHODS:

//// setFullYear() Method:
//
//var event = new Date("August 19,1975 23:15:30");
//event.setFullYear(2016);
//console.log(event.getFullYear()); //2016->coming from setFullYear()
//console.log(event);  // Fri Aug 19 2016 23:15:30 GMT-0700 (Pacific Daylight Time)
//
//
//var theBigDay = new Date(1962,6,7);  // 1962-07-07
//theBigDay.setFullYear(2018,11,3);
//console.log(theBigDay); // Mon Dec 03 2018 00:00:00 GMT-0800
//
//
//
//// setMonth() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setMonth(3); 
//console.log(event); // Sat Apr 19 1975 23:15:30 GMT-0700
//
//
//var bigDay = new Date();
//bigDay.setMonth(10);
//console.log(bigDay); // Fri Nov 16 2018 09:18:44 GMT-0800
//
//
//
//// setDate() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setDate(24);
//console.log(event.getDate());  // 24 -> coming from setDate
//console.log(event);  // Sun Aug 24 1975 23:15:30 GMT-0700 (Pacific Daylight Time)
//
//
//var theBigDay = new Date(1962,6,7);  // 1962-07-07
//theBigDay.setDate(24);
//console.log(theBigDay);   // 1962-07-24
//theBigDay.setDate(32); 
//console.log(theBigDay);   // 1962-08-01 (because there is no 32. day. That's why, it increases to month too.)
//theBigDay.setDate(42);
//console.log(theBigDay);   // 1962-09-11 (because there is no 42. day. That's why, it increases to month too.)
//theBigDay.setDate(-42);
//console.log(theBigDay);   // 1962-07-20 (it goes back of 42 days.)
//
//
//
//
//// setHours() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setHours(20); 
//console.log(event); // Tue Aug 19 1975 20:15:30 GMT-0700
//
//event.setHours(20,21,22);
//console.log(event); // Tue Aug 19 1975 20:21:22 GMT-0700
//
//
//var bigDay = new Date();
//bigDay.setHours(7);
//console.log(bigDay); // Thu Aug 16 2018 07:54:11 GMT-0700
//
//
//
//
//// setMinutes() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setMinutes(45); 
//console.log(event); // Tue Aug 19 1975 23:45:30 GMT-0700
//
//
//var bigDay = new Date();
//bigDay.setMinutes(7);
//console.log(bigDay); // Thu Aug 16 2018 08:07:01 GMT-0700
//
//
//
//
//// setSeconds() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setSeconds(00); 
//console.log(event); // Tue Aug 19 1975 23:15:00 GMT-0700
//
//
//var bigDay = new Date();
//bigDay.setSeconds(10);
//console.log(bigDay); // Thu Aug 16 2018 09:03:10 GMT-0700
//
//
//
//
//// setMilliseconds() Method: 
//
//var event = new Date("August 19,1975 23:15:30");
//event.setMilliseconds(999); 
//console.log(event); // Tue Aug 19 1975 23:15:30 GMT-0700
//
//
//var bigDay = new Date();
//bigDay.setMilliseconds(90);
//console.log(bigDay); // Thu Aug 16 2018 09:05:11 GMT-0700
//
//
//
//
//// setTime() Method: 
//
//var event1 = new Date("July 1,1999");
//var event2 = new Date(); 
//event2.setTime(event1.getTime());
//
//console.log(event1); // Thu Jul 01 1999 00:00:00 GMT-0700
//console.log(event2); // Thu Jul 01 1999 00:00:00 GMT-0700





// Task 
// write a program to calculate your age
// Note: if your birthday not happened yet, do not include that year.


var currentYear = new Date();
var a = currentYear.getFullYear();

var birthday = new Date("09/18/1990");
var b = birthday.getFullYear();

if(currentYear < birthday){
    var calculate = a - b;
    console.log(calculate);
} else {
    birthday.setFullYear(1991);
    var getNewYear = birthday.getFullYear();
    var calculate = a - getNewYear;
    console.log(calculate);
}















