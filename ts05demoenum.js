"use strict";
// Enum is data types(string, number and heterogenious) : which holds set of constants
// enum declaration with data type of numbers 
var browser;
(function (browser) {
    browser[browser["FireFox"] = 0] = "FireFox";
    browser[browser["Safari"] = 1] = "Safari";
    browser[browser["Edge"] = 2] = "Edge";
    browser[browser["Chrome"] = getversion('Chrome')] = "Chrome";
})(browser || (browser = {}));
function getversion(browserName) {
    if (browserName === "Chrome") {
        return 115;
    }
    return -1;
}
console.log(browser); //print enum broser values 
console.log(browser.Safari); //print safari value 
console.log(browser.Chrome);
console.log(browser.Edge);
// enum data type as string 
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment); // lis all env names 
console.log(environment.DEV); // to access value of key DEV
console.log(environment.QA); // to access value of key DEV
console.log(environment.PROD); // to access value of key DEV
// enum data type as heterogenious
var status1;
(function (status1) {
    status1["ACTIVE"] = "active";
    status1[status1["DEACTIVE"] = 1] = "DEACTIVE";
    status1[status1["PENDING"] = 2] = "PENDING";
})(status1 || (status1 = {}));
console.log(status1); /// access heterogenious enum data type 
console.log(status1.DEACTIVE);
console.log(status1.ACTIVE);
console.log(status1.PENDING);
