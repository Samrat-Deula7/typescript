// Type - 'unknown'

// -> The unknown type in TypeScript is a type-safe counterpart of the any type. 
// -> It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.
// -> Before using the type unknown variable the type script requires us to check the type of that number.

let unknownValue:unknown;

unknownValue='hello world';
unknownValue=[1,2,3,4,5];
unknownValue=12.2352;

// unknownValue.toFixed(); This will throw an error because we havent checked if the value is number or not

if(typeof unknownValue==="number"){
    unknownValue.toFixed();
}

function runSomeCode(){
    const random=Math.random();

    if(random<0.5){
        throw new Error('there was error ...');
    }
    else{
        throw'some error';
    }
}

try {
    runSomeCode();
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(error);
        
    }
}