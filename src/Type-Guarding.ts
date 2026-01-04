// Type Guarding
// -> Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope .
// -> This is usually done using conditional statements that check the type of an object.
// -> In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope .

// Types of type guard.

// 1) typeof 
// -> This type guard is used to check the type of an variable.

type Valuetype=string| number| boolean;

let value:Valuetype;
const random =Math.random();

value=random<0.33?"hello":random<0.66?234.324:true;

function checkValue(value:Valuetype):void{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
        return;
    }
    else if(typeof value === "number"){
        console.log(value.toFixed());
        return;
    }
    else{
        console.log(`boolean:${value}`);
    }
}

checkValue(value);


// 2) Equality Narrowing
// -> In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality chaecks like === or !== in your code.

type Dog={type:'dog';name:string;bark:()=>void};
type Cat={type:'cat';name:string;meow:()=>void};

type Animal=Dog| Cat;

function makeSound(animal:Animal){
    if(animal.type == 'dog'){
        animal.bark();
    }else{
        animal.meow();
    }
}

// 3) Truthy/Falsy guard
// -> In TypeScript, "Truthy"/"Falsy" gurad is a simple check for a truthy of falsy value.
// Simply check if the its true or false.

function printLength(str:string|null|undefined){
    if(str){
        console.log(str.length);
    }else{
        console.log('no string provided');  
    }
}

printLength('samrat');
printLength('');
printLength(null);


// 4) Instance of guard
// -> Instance of type guard checks if an what blue print or class is used to create any specific instance.

try {
    throw new Error('This is an error')
} catch (error) {
    if(error instanceof Error){
        console.log(`Caught an Error object: ${error.message}`);
    }else{
        console.log('unknown error...');
    }
}

// 5) Type Predicate
// -> A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional  blocks.

type Student={
    name:string;
    study:()=>void;
}

type User={
    name:string;
    login:()=>void;
}

type Person=Student|User;

const randomPerson = ():Person => {
  return Math.random() < 0.66
    ? { name: "sam", study: () => console.log("studying") }
    : { name: "babita", login:()=> console.log("logging in") };
};

  let person=  randomPerson()

  console.log(person);