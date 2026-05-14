"use strict";
// switch case statement 
let day = "Saturday", day1 = "Saturday1";
let dayofweek;
if (day === "Sunday") {
    dayofweek = "Sunday";
}
else if (day === "Monday") {
    dayofweek = "Monday";
}
else if (day === "Tuesday") {
    dayofweek = "Tuesday";
}
else if (day === "Wednesday") {
    dayofweek = "Wednesday";
}
else if (day === "Thursday") {
    dayofweek = "Thursday";
}
else if (day === "Friday") {
    dayofweek = "Friday";
}
else if (day === "Saturday") {
    dayofweek = "Saturday";
}
else {
    dayofweek = "Invalid day!";
}
console.log("day of week : " + dayofweek);
// switch avoid checking all conditions, directly switch to matching condition - execute one statement 
switch (day1.toLowerCase()) {
    case "sunday":
        dayofweek = "Sunday";
        break;
    case "monday":
        dayofweek = "Monday";
        break;
    case "tuesday":
        dayofweek = "Tuesday";
        break;
    case "wednesday":
        dayofweek = "Wednesday";
        break;
    case "thursday":
        dayofweek = "Thursday";
        break;
    case "friday":
        dayofweek = "Friday";
        break;
    case "saturday":
        dayofweek = "Saturday";
        break;
    default:
        dayofweek = "Invalid Weeh day !!!!";
}
console.log(" switch case  --> day of week : " + dayofweek);
