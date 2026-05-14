
//  any --> any type of data 
let num : any = 12.34;

num = true;
num = "Arun";

console.log(num);

let lang : any[] =["Arun",100,true];
console.log(lang);

lang.push("Automaiton");


function add(a : number, b : number) : any{

    if(a>b){
    return a+b;
    }
    else{
        return 123
    }

}

console.log(add(2,10));


// void --> not return any value function or variable, allowed only undefined 

let num1 : void = 1000; // error 
let num2 : void = undefined;

//function not going to return any value 

function getinfo(msg : string):void{

    console.log(msg);
    return; ///blank return statment is acceptable in void method 
}
getinfo("Hi Hello");


// never --> not return anything 

var nothing : never;
