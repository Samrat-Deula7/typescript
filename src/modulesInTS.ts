// Modules

// -> Different files in same directory in ts are interconnected.
// -> So if a variable is set in one file the same variable cannot be declared in another file as all the files are connected.

// Ex:

// file1: action1.ts
//  let sam ="name";

//  file2: action2.ts 
//  let sam ="samrat"; This will give an Error

//  Even if the action1.ts and action2.ts are different ts files they are connected to one another and the same variable cannot be declared twice even if theyt are in different FileSystem.


// There are two way to change this attribute/behaviour.

// 1) go to ts config to change the property.
// -> "moduleDetection":"force"
// 2) add exports and import it deactivates that behaviour.


export function sayHello(name:string):void{
    console.log(`Hello ${name}`);
}

export let person ="samrat";

type Student={
    name:string;
    age:number;
}
const newStudent:Student={
    name:"sam",
    age:20,
}

export default newStudent;