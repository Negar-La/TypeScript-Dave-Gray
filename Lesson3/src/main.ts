let stringArr = ['one', 'hey', 'Negar'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH',  1984, true];

// stringArr[0] = 42;  error
// stringArr.push(42); error
stringArr[0] = 'John';
stringArr.push('hey');
console.log(stringArr);

guitars[0] = 12; 
guitars.unshift('Jim'); //The unshift() method adds one or more elements to the beginning of an array 
console.log(guitars);

// stringArr = guitars //error
guitars = stringArr
console.log(guitars);

mixedData = guitars;      //we cannot do it the other way
mixedData = stringArr;   //we cannot do it the other way


let test = [];
let bands: string[] = []
bands.push('byebye')
test.push(true)

//Tuple
let myTuple : [string, number, boolean] = ['Negar', 42, false];

let mixed = ['John', 1, false] //a union type of array
mixed = myTuple
// myTuple = mixed       error!!
// myTuple[3] = 42     because that 4th position is not defined
myTuple[1] = 101 //the only place we can assign a number is [1]
console.log(myTuple);


//-----------------------------------Objects
let myObj: object;
myObj = [] //re-assign myObj to an array & an array is also a type of object.
console.log(myObj, typeof myObj);  //[] 'object'
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: "Negar",
    prop2: true,
}

exampleObj.prop2 = false;
exampleObj.prop1 = "John";

type Guitarist = {
    name?: string,
    active?: boolean, //with the ? we make the property optional !
    albums: (string | number)[]
}

let evh: Guitarist = {
    // name: "Eddie",
    active: false,
    albums: [1999, 5150, "OU812"]
}

let jp: Guitarist = {
    name: "Jimmy",
    // active: true,   Now Guitarist can exist without an active property
    albums: ['I', 'II', 'IV']
}

// evh = jp   correct
// jp = evh   correct

// evh.years = 40;


const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) { //1-check to see if it exist = narrowing
        return `Hello ${guitarist.name.toUpperCase()}!`
        //2-you cannot call a method on undefined so name?.toUpperCase()
    }
    return "Hello!" //without this return functions return string | undefined.

}

const res = greetGuitarist(evh)
console.log(res);


//you can use interface instead of type:
interface myObject {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}


//Enums
enum Grade {
    U = 1,
    D,
    C,
    B, 
    A,
}

console.log(Grade.U);  
