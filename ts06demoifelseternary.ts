// if .. else and ternary operators and branch statmemnts 

let flag : boolean = false;
if(flag){
    console.log("PASS")
}
else{
    console.log("fail");
}

let x : number = 10, y=20;
if(x>y){
    console.log("X is greater than y ");
}
else{
    console.log("y is greater than x ");
}
// find greatest among 3 numbers 

let num1:number=700, num2=600, num3=400;


if( num1 > num2 && num1>num3)
{
    console.log("num1 Max value : "+num1);
}
else if(num2 > num3){
    console.log(" num2 Max value : "+num2);
}
else{
    console.log("num3 Max value : "+num3);
}


// ternary oprator 
let a : number = 300, b=200;
 (a>b)?console.log("Max (a): "+a):console.log("Max (b) : "+b);


 let browser : string = "Edge";

 (browser === "Chrome")?console.log("Launch Chrome"):(browser === "Firefox")?console.log("Launch Firfox"):console.log("Launch correct browser");
