// const basket = ["apples", "grapes", "oranges"];

// linked-list : apples --> grapes --> pears

// apples
// 8943 --> grapes
//          8231 --> pears
//                   3721 --> null

// Note: "Javascript don't have inbuilt linked list"

//Pointer Example
const obj1 = { a: true };
const obj2 = obj1; // obj2 refrence to obj1 ie. pointer

obj1.a = "booya"; // both obj1 and obj2 changes

// delete obj1;
// obj2 = "hello";

// console.log("1", obj1);
console.log("2", obj2);
