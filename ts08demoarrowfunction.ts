// arroow function are anonymous fucntions  fucntion which has no name 
let info = ()=>{
    console.log("Hi Ts");
}

info();

let printinfo =()=> console.log("Hllo World...!");

printinfo();

let addnum1 = (x:number,y:number):number => x+y;
console.log(addnum1(30,40));


/// class 

class Person{

    firstName1 : string;
    age1 : number;

    constructor(firstname1:string,age1:number){
        this.firstName1=firstname1;
        this.age1=age1;
    }

    display = () => console.log(this.firstName1+"    "+this.age1);

}

let p= new Person("Arun",50);
p.display();