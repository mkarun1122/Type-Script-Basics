// default and optional pameters to fucntions 

// optional params ? is used for make param optional  
function getinformation(Name:string,msg?:string):string{
    return msg+"    "+Name;
}
console.log(getinformation("Arun"));
console.log(getinformation("Arun","Hello!"));

//default valus for params 
function setdetails(name:string="Tom",msg:string="Welcome"):string{
    return msg+"    "+name;
}

console.log(setdetails());
console.log(setdetails("ArunKumar"));
console.log(setdetails("Kaarthika","Miss "));
