// for loop
// for .. of loop
// for .. in loop
// while loop
// do-while 

//1. For loop 
for(let i=1;i<=10;i++){
    console.log(i);
    // break;
}

// 2. for .. of 
let n1 =[10,20,30,40,50,60,70,80,90];
for(let n of n1){
    console.log(n);
}


console.log("================//3.for..in================")
//3.for..in
for( let i in n1){
    console.log("num["+i+"] = "+n1[i]);
}


//for loop
let info="Hello World";
for(let p of info){
    console.log(p);
}

//while loop
console.log("-------- While loop-----------")
let q=1;
while(q<=10){
    console.log(q);
    q=q+1;
}

console.log("------ do .. while ----------------");

let k=1;
do{
console.log(k);
k=k+1;
}while(k<10);