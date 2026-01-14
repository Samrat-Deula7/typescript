
// Implementing interface with class

interface IPerson{
    name:string;
    age:number;
    greet():void;
}

class Person implements IPerson{
    constructor(public name:string,public age:number){}
    greet():void{
        console.log(`Hello, my name is ${this.name} and I'm ${this.age}`);
    }
}

const hipster=new Person('shakeAndBake',234)
hipster.greet()