"use strict";
let username = "Negar";
console.log(username);
//for working with 1 file, command: tsc main.ts -w
//which is tsc + file name  + -w (watch mode)
//for working with different folders we use tsc config file with the command: tsc --init and then tsc -w to
//look for all the files in the root directory.
let a = 12;
// let b: string = '6'; 
let b = 6;
let c = 2;
console.log(a / b); //JS uses dynamic types and it coerced the data ('6') to the type that it wants (6)
console.log(c * b);
