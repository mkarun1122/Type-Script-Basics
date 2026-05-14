"use strict";
//  any --> any type of data 
let num = 12.34;
num = true;
num = "Arun";
console.log(num);
let lang = ["Arun", 100, true];
console.log(lang);
lang.push("Automaiton");
function add(a, b) {
    if (a > b) {
        return a + b;
    }
    else {
        return 123;
    }
}
console.log(add(2, 10));
// void --> not return any value function or variable, allowed only undefined 
let num1 = 1000; // error 
let num2 = undefined;
//function not going to return any value 
function getinfo(msg) {
    console.log(msg);
    return; ///blank return statment is acceptable in void method 
}
getinfo("Hi Hello");
// never --> not return anything 
var nothing;
