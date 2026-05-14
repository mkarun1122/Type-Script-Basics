"use strict";
/*
arrays are collection of similar data types elements

*/
// 1. array declaration 
let names = ["Kumar", "Ravi", "Babu"];
console.log(names[0]);
names.push("AddedArun");
console.log(names);
//2. array declaration using generics 
let empNames = ["Arun", "Kumar", "Raghav"];
let empIds = [10, 30, 20, 50];
let empInfo = ["Sailaja", 100, true];
//3. first array declaration and init
let days;
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let daynames = ["Tuesday", "Wednesday", "Thursday", "Friday"];
//4. multi type array
let values = [100.300, "Tuesday", "Wednesday", "Thursday", "Friday"];
let val = [true, false, "Tuesday", "Wednesday", "Thursday", "Friday"];
// Iterate array elemnts 
//1. indexed based loop 
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}
//2 for loop syntax 
for (let e in empIds) {
    console.log(empIds[e]);
}
