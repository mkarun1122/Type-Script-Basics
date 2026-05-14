/* 

statistically typed language 

what is type ? 
Type interfrance ? and
at compile time type inferance is applied --> based on the assign value. 
Type annotations in typescript.

what is null and undefined ?

*/


let fName: string;
fName = "Arun";

let num : number; // Type annotations
num=50;

let n: number =55;

//type inferance example 
let n1: "typescript"; // data type is String 

//null and undefined data types 
let city : null = null;
let country:undefined =undefined;

//any data type -> no error accepts any type of values  this can be used is data typ unpridictable 
let value : any = 80;
value = "Arunkumar";
value = true;

//void used with function and does not return any values 
function printHello():void 
{
    console.log("hello ");
}

function getnumber(): number {
    return 123;
}

function getanyval(): any{
    return "Arun";
}