console.log("typescript tutorial");

// Some Commands :
//Run: npm run build   :to generate an output of the typescript code

// An interface is an way to define the structure(shape) of an object
// Example of interface
// interface someValue{
//     name:string,
//     id:number
// }

// let someObj:someValue={
//     name:'samrat',
//     id:101
// }

// console.log(someObj)

// Type annotation
// We dont need to put type annotation ourselves typescript does it automatically but its good to defind in the code.
// - A type annotation is written using a colon (:) followed by the type after a variable, parameter, or function declaration.

// string:
let awesomeName: string = "samrat";
// By assigning an string type to the awesomeName it only allows to store string value in this variable
// Its also only allows to string functions to be runned
// awesomeName=30  :This will give an error: "Type 'number' is not assignable to type 'string'."
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// number:
let amount: number = 20;
// only allows number/ int value
// amount='sam' :This will give an error: "Type 'string' is not assignable to type 'number'."
amount = amount + 2;
console.log(amount);

// boolean
let ispass: boolean = true;
ispass = false;
console.log(ispass);

// Unoiun Type annotation ( | )

//  Its an type of annotation that return value can hold multiple possible types

// For example:

let tax: number | string = 10;

tax = 20;
tax = "20 rs";

// Literal value type

let requestStatus: "pending" | "success" | "error" = "pending";
// Now requestStatus can only contain 'pending' , 'success' or 'error'
// TS will throw error when we try to put any other string value other then the three mentioned above

requestStatus = "pending"; // ✅
requestStatus = "success"; // ✅
requestStatus = "error"; // ✅
// requestStatus='Namuna' // ❌ This will throw an error :Type '"Namuna"' is not assignable to type '"pending" | "success" | "error"'.

// Type any
// - any is a special type in TypeScript that disables type checking for a variable.
// Examples :
// IN this example the any annotation has disabled the type checking function of type Script
// So now notSure doesn't have any kind of specific variable and we can store any kind of data in it.
let notSure: any = 4; // ✅

notSure = "sam"; // ✅

notSure = true; // ✅

// If any variable is defined without any data in it then it is temporaryly given any annotation 
// Which is updated when the variable has new data then the annotation is changed of the basis of the data provided.
// Example :
let noType;
console.log(typeof(noType));

// Array with annotations
// Adding annotations to array

let prices:number[]=[100,25,33]; // This can only contain numbers.
console.log(prices);

let name:string[]=["samrat","ram","shyam"]; // This can only contain strings.
console.log(name);

// Adding union annotation to array

let arr:(number | string)[]=[1,4,55,"samrat","ram","namuna"];
console.log(arr);


// object with annotation

let car:{brand:string;year:number}={
    brand:"toyota",
    year:2020
}
console.log(car.brand);
console.log(car.year);

// This is an optional symbol "?:"
// This allows an variable or an objects to have or even have certain value
// In the following code of arrays of objects notebook doesn't have price but since ?: is being used there is no error

// Arrays of objects with annotations
// readonly is a function on typescript 
// variable's which annotations has readonly ,There values cant be updated
let book ={title:'book',cost:20};
let pen ={title:'pen',cost:20};
let notebook ={title:'notebook'};
// since readonly is used on title the value of title can only be read and cannot be updated
let items:{readonly title:String;cost?:number}[]=[book,pen,notebook]
