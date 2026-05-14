// Enum is data types(string, number and heterogenious) : which holds set of constants

// enum declaration with data type of numbers 
enum browser{
    FireFox,
    Safari,
    Edge,
    Chrome = getversion('Chrome')
}




function getversion(browserName:string) : number{

    if(browserName==="Chrome"){
        return 115
    }
    return -1

}

console.log(browser); //print enum broser values 
console.log(browser.Safari); //print safari value 
console.log(browser.Chrome);
console.log(browser.Edge);

// enum data type as string 
enum environment {

    DEV = "dev",
    QA = "qa",
    STAGE ="stage",
    PROD ="prod"

}

console.log(environment); // lis all env names 
console.log(environment.DEV); // to access value of key DEV
console.log(environment.QA); // to access value of key DEV
console.log(environment.PROD); // to access value of key DEV


// enum data type as heterogenious
enum status1 {
    ACTIVE = "active",
    DEACTIVE = 1,
    PENDING

}

console.log(status1); /// access heterogenious enum data type 
console.log(status1.DEACTIVE)
console.log(status1.ACTIVE);
console.log(status1.PENDING);