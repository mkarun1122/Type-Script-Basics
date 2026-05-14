"use strict";
/*

statistically typed language

what is type ?
Type interfrance ? and
at compile time type inferance is applied --> based on the assign value.
Type annotations in typescript.

what is null and undefined ?

*/
let fName;
fName = "Arun";
let num; // Type annotations
num = 50;
let n = 55;
//type inferance example 
let n1; // data type is String 
//null and undefined data types 
let city = null;
let country = undefined;
//any data type -> no error accepts any type of values  this can be used is data typ unpridictable 
let value = 80;
value = "Arunkumar";
value = true;
//void used with function and does not return any values 
function printHello() {
    console.log("hello ");
}
function getnumber() {
    return 123;
}
function getanyval() {
    return "Arun";
}
