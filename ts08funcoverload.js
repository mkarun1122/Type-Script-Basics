"use strict";
//Type script provides the concpt of function overloading , but JS not supports 
// you can have multiple functions 
//1. one with same name 
//2. but different parameter type and return Type
//3. However numbr of the parameters should be same 
function add(a, b) {
    return a + b;
}
let s1 = add("Mr ", "Arun"); // string params 
let s2 = add(30, 40); // number  params 
let s3 = add(true, false); // boolean params 
console.log(s1);
console.log(s2);
console.log(s3);
