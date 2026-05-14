// determine type of valu / functions .... typecast in other languges 
// 2 typs of typ assertions 
// 1. using <>
// 2. using as keyword 

let bill : any = 123;
let finalbill = <number>bill+200;
console.log(finalbill);

let something : any = "This is automation practise of javascript fsdfsdfsdf";
let len = (something as string).length;
console.log(len);