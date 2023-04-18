let myName = "Negar"; //TS infer the type of data === this is implicit
let hisName: string = "Dave" //this is explicit === absolutely declare the data type

let age: number;
age = 43;
age = 12;

let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let postId: string | number | boolean; //a union type
let isActve: boolean | number;

meaningOfLife = 42;
isLoading = true;
album = 'false';



const sum = (a: number, b: string) => {  //what function returns in addition to what it receives as parameters
    return a + b;
}

let re: RegExp = /\W+/g //TS infers its a RegExp type.
