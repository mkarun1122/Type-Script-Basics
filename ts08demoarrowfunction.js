"use strict";
// arroow function are anonymous fucntions  fucntion which has no name 
let info = () => {
    console.log("Hi Ts");
};
info();
let printinfo = () => console.log("Hllo World...!");
printinfo();
let addnum1 = (x, y) => x + y;
console.log(addnum1(30, 40));
/// class 
class Person {
    firstName1;
    age1;
    constructor(firstname1, age1) {
        this.firstName1 = firstname1;
        this.age1 = age1;
    }
    display = () => console.log(this.firstName1 + "    " + this.age1);
}
let p = new Person("Arun", 50);
p.display();
