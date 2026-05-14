"use strict";
/*

1. what is tuple ?
2. What is difference between tuple Vs array?
3. add elements to tuple in dynamically
*/
let names = ["Arun", 100]; // declaration 
let users = ["AAAAA", 400, true]; // tuple with 3 data types  
console.log(names); //print elements
names.push("Kumar", 300); // add new tuple elements 
console.log(names);
console.log(users[0]); // accessing using index
console.log(users[1]); // accessing using index
users.push("FirstName", 500, false); //adding 1 more pair to tuple 
console.log(users[0][1]); // accessing using index
console.log(users); // accessing using index
