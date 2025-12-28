
let person:[string,number]=['samrat',50];

// readonly doesnt allow to add to the list it can only be read.ff
let date: readonly [number,number,number]=[12,45,33];

function getPerson():[string,number]{
    return ['samrat',90];
}

let randomPerson =getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);