//----------------------------Type Aliases
// we are representing our TS types with a different name!
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
};

type userId = stringOrNumber;

// interface postId = stringorNumber;   Aliases do not work with interface

//----------------------------Literal types
let myName: "Negar";
// myName = 'John';  error

let userName: "Negar" | "John" | "Amy";
userName = "John"
// userName = "Anna"  error


//----------------------------Functions
const add = (a: number, b: number): number => {
    return a + b
};

const logMsg = (message: any): void => { //this function does not have a return
    console.log(message);
}

logMsg('Hello!')
logMsg(add(12,13))

//using 'function' keyword to create a function
let subtract = function (c: number, d: number): number {
    return c -d;
} 

type mathFunction = (a: number, b: number) => number //this is our definition (alias) for our mathFunction type
// interface mathFunction { 
//     (a: number, b: number): number 
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 21));


//----------------------------Optional parameter
//Remember: optional parameter has to be the last one in the list.
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {  //adding a type guard
        return a + b + c;
    } 
    return a + b;
}

logMsg(addAll(1, 1));
logMsg(addAll(1, 1, 1));

//----------------------------Default parameters value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 1)) // I have to explicitly say undefined for 'a'.


//----------------------------Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(1, 2, 3, 4))

//rest operator should come at the end.
const total2 = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total2(10 , 1 , 2))

//----------------------------never type
//for functions that explicitly throw errors.
const createError = (errMsg: string): never => {
    throw new Error (errMsg)
}

const func = (msg: string, code: number) => {
    throw { message: msg, errorCode: code};
  };
  
  func("An error occured", 500);

//for endless loops
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++
        if (i > 100) break //this line prevents the infinite loop!
    }
}

//----------------------------Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

//----------------------------Using never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'; //type guard
    if (isNumber(value)) return 'number'; //Custom type guard
    return createError('This should never happen!') //using never type
}






