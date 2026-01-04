
// Discriminated Unions and exhaustive check using the never type.

// -> A discriminated union in TypeScript is a type that can be one of several different types, 
//    each indentified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

type IncrementAction={
    type:"increment";
    amount:number;
    timestamp:number;
    user:string;
}
type DecrementAction={
    type:"decrement";
    amount:number;
    timestamp:number;
    user:string;
}

type Action =IncrementAction|DecrementAction;

function reducer(state:number,action:Action){
    switch(action.type){
        case 'increment':
            return state + action.amount;
        case 'decrement':
            return state=action.amount;
    default:
        const unexpectedAction:never=action;
        throw new Error(`some error... ${unexpectedAction}`);
    }
}

const newState=reducer(15,{
    type:"increment",
    user:"samrat",
    amount:5,
    timestamp:2345,
})

console.log(newState);