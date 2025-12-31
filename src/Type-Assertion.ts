// Type assertion:

// It is the way to tell the browser what type the variable.
// It is used when we know more about the type then the type script does.

let someValue:any='This is a string';

let strLength:number=(someValue as string).length;

type Bird={
    name:string;
}

let birdString='{"name":"Eagle"}';
let dogString='{"breed":"Poodle"}';

let birdObject=JSON.parse(birdString);
let dogObject=JSON.parse(dogString);

let bird=birdObject as Bird;