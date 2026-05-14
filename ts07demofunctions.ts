// functions are block of code used to for writing business logic , activities / tasks 
// fucntions delcard as void return and parameters 

// 1. delcare function --> name function
function getinfo(){
    console.log("Hello function .....!");
}

//calling fucntions 
getinfo()

// adding 2 number fucntions using parameterized 
function add(a:number,b:number){ 
    console.log(a+b);
}

// calling a function
add(10,20); // function args 


//3. funtion with return data type 

function callNumbers(a:number,b:number, c:number):number{
   let total:number=a+b+c;

    return total;
}

let result1:number = callNumbers(20,30,40); /// calling with args 
console.log(result1);


//4. Anonymous fuynctions 

let greet = function () {
    console.log("Hello");
};

greet();

//5. Anonymous fucntion with parameters 
let add2nums = function(a:number,b:number):number{
    return a+b;
}

console.log(add2nums(30,40));

//5. Anonymous arrow functions 
let multiply = (x: number, y: number): number => {
    return x * y;
};

console.log(multiply(5, 4));

//6. Anonymous short arrow function
let square = (n: number): number => n * n;

console.log(square(6));

