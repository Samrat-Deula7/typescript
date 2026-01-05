
// let array1:string[]=["Apple","Banana","Mango"];
// let array2:number[]=[1,2,3];
// let array3:boolean[]=[true,false,true];

let arrar1:Array<string>=['apple','banana','mango'];


// IN the following example these function are passing the same types that it gets
// This is wasteful and time consuming .
// so we use the generic type so that one fuction can pass the same type no matter the type.
function createString(arg:string):string{
    return arg;
}
function createNumber(arg:number):number{
    return arg;
}

function genericFunction<T>(arg:T):T{
    return arg;
}

interface GenericInterface<T>{
    value:T;
    getValue:()=>T ;
}


const genericSting:GenericInterface<string>={
    value:'samrat',
    getValue() {
        return this.value;
    },
}


// These generic type is usually used in asunc functions 
// because async function usually returns promipse 
// so the following code will have an error


// async function someFunc():string{
//     return"this is a seting;"
// }

// since async function only returns an promise typescript expects to get an promise not a data type like string or number.

// This is where generic type comes in to play 

async function someFunc1():Promise<number>{
    return 23412;
}
async function someFunc2():Promise<string>{
    return "sam";
}

// See there is no error
// so we are telling typescript that the function is returning an promise but that  number or string.

// ## Challenge ##

function generateStringArray(length:number, value:string):string[]{
    let result:string[]=[];
    result=Array(length).fill(value);
    return result;
}

console.log(generateStringArray(4,"sam"))

// Making the function more dynamic an able to create an array of any variable of any data SVGUnitTypes.
// By making the array more dynamic we can create an array of any type of variable boolean, number , string etc.

function generateArray <T>(length:number, value:T):Array<T>{
    let result:T[]=[];
    result=Array(length).fill(value);
    return result;
}

console.log(generateArray<boolean>(20,true))
console.log(generateArray<string>(20,"wakeup"))


// Using multiple generic type.

function pair<T,U>(param1:T,param2:U):[T,U]{
    return [param1,param2];
}

let outcome=pair<number,string>(54563,"hgfjh");

console.log(outcome);

// Adding constraints to an generic type

// Lets suppose that we want to only put the string type to an function even while we are using generic type.
// Using extends allows us to limit the amount of type that an generic functio or variable can have.


function processValue<T extends string>(param:T){

}
function processValue2<T extends string | number>(param:T){

}

// using generic in a user define type

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

// using generic allows an functin or an varable to have all the variable types but the type that are defined by user cannot be accessed 
// so we need to use "extends " key word to be able to use that user defined type .

function printName<T extends Student | Product>(input:T):void{
    console.log(input.name);
}

console.log(printName(student));
console.log(printName(product));


// Setting up default type in generic.

interface StoreData<T=any>{
    data:T[];
}

const storeNumbers:StoreData<number>={
    data:[2,3,4,5,3],
};

const randomStuff:StoreData={
    data:['random',2345]
}