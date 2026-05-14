let userId : (string | number);

userId=100001;
userId="Arun";


function getUserInformation(customerId : (string | number)){
    if(typeof(customerId) === 'number'){
        return customerId+"_Arun";
    }
    else if(typeof(customerId) === 'string'){
        return customerId+"_Arun";
    }
}

console.log(getUserInformation(9001));
console.log(getUserInformation("Kumar"));
