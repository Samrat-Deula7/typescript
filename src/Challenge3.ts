// Questions:

// Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    upgradeRam(increase:number):number;
    storage?:number;
}

const laptop:Computer={
    id:1,
    brand:'random brand2',
    ram:8,
    upgradeRam(amount){
        this.ram += amount;
        return this.ram;
    },
};

laptop.storage=256;
console.log(laptop.upgradeRam(8));

console.log(laptop);

