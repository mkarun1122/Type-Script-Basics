//Type script provides the concpt of function overloading , but JS not supports 
// you can have multiple functions 
//1. one with same name 
//2. but different parameter type and return Type
//3. However numbr of the parameters should be same 

//define function without body 
function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:boolean,b:boolean):boolean;

function add(a:any,b:any):any{
    return a+b;
}

let s1 = add("Mr ","Arun") // string params 
let s2 = add(30,40) // number  params 
let s3 = add(true,false) // boolean params 

console.log(s1);
console.log(s2);
console.log(s3);

