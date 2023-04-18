"use strict";
let myName = "Negar"; //TS infer the type of data === this is implicit
let hisName = "Dave"; //this is explicit === absolutely declare the data type
let age;
age = 43;
age = 12;
let meaningOfLife;
let isLoading;
let album;
let postId; //a union type
let isActve;
meaningOfLife = 42;
isLoading = true;
album = 'false';
const sum = (a, b) => {
    return a + b;
};
let re = /\W+/g; //TS infers its a RegExp type.
