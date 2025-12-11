console.log('typescript tutorial')

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
let awesomeName:string='samrat'
// By assigning an string type to the awesomeName it only allows to store string value in this variable
// Its also only allows to string functions to be runned
// awesomeName=30  :This will give an error: "Type 'number' is not assignable to type 'string'."
awesomeName = awesomeName.toUpperCase()
console.log(awesomeName)

// number:
let amount:number = 20
// only allows number/ int value
// amount='sam' :This will give an error: "Type 'string' is not assignable to type 'number'."
amount=amount+2
console.log(amount)

// boolean
let ispass:boolean=true
ispass=false
console.log(ispass)