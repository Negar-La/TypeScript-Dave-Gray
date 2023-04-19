"use strict";
// interface postId = stringorNumber;   Aliases do not work with interface
//----------------------------Literal types
let myName;
// myName = 'John';  error
let userName;
userName = "John";
// userName = "Anna"  error
//----------------------------Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(12, 13));
//using 'function' keyword to create a function
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { 
//     (a: number, b: number): number 
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 21));
//----------------------------Optional parameter
//Remember: optional parameter has to be the last one in the list.
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') { //adding a type guard
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 1));
logMsg(addAll(1, 1, 1));
//----------------------------Default parameters value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 1)); // I have to explicitly say undefined for 'a'.
//----------------------------Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//rest operator should come at the end.
const total2 = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total2(10, 1, 2));
//----------------------------never type
//for functions that explicitly throw errors.
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const func = (msg, code) => {
    throw { message: msg, errorCode: code };
};
func("An error occured", 500);
//for endless loops
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; //this line prevents the infinite loop!
    }
};
//----------------------------Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//----------------------------Using never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string'; //type guard
    if (isNumber(value))
        return 'number'; //Custom type guard
    return createError('This should never happen!'); //using never type
};
