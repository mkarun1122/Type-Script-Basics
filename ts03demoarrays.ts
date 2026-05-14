/*
arrays are collection of similar data types elements 

*/

// 1. array declaration 
let names : string[] = ["Kumar" , "Ravi" , "Babu"];
console.log(names[0]);
names.push("AddedArun");
console.log(names);


//2. array declaration using generics 

let empNames : Array<string> =["Arun","Kumar","Raghav"];
let empIds : Array<number> = [10,30,20,50];
let empInfo : Array<any> = ["Sailaja",100,true];

//3. first array declaration and init
let days : string[];
days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let daynames : string[] = ["Tuesday","Wednesday","Thursday","Friday"];

//4. multi type array
let values : (string | number)[] = [100.300,"Tuesday","Wednesday","Thursday","Friday"]; 
let val : (string | boolean)[] =  [true, false,"Tuesday","Wednesday","Thursday","Friday"];

// Iterate array elemnts 

//1. indexed based loop 
for(let i=0;i<values.length;i++){
    console.log(values[i]);
}

//2 for loop syntax 

for( let e in empIds){
    console.log(empIds[e]);
}