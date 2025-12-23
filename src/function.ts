function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("samrat");

// The ": number" ensures that the function only returns number value.
function calculateDiscount(price: number): number {
  return price * 0.9;
}
const result = calculateDiscount(900);
console.log(result);

// The following function takes in an string and provides an boolean value
const names: string[] = ["john", "jim", "samrat", "ram"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

const result2 = isNameInList("samrat");
console.log(result2);

// Optional and default parameters.

// Optional
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount1 = calculatePrice(100, 50);
console.log(priceAfterDiscount1);

let priceAfterDiscount2 = calculatePrice(100);
console.log(priceAfterDiscount2);

// Default

function calcualteScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calcualteScore(100, 20);
let scoreWithoutPenalty = calcualteScore(100);

console.log(scoreAfterPenalty);
console.log(scoreWithoutPenalty);

// How intelligent typescript is

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let totalResult = sum("The total is :", 1, 2, 3, 4, 5);
console.log(totalResult);

// If You are not returning any function from an fuction use void annotation.

function display(name: string): void {
  console.log("samrat deula");
}

display("samrat");

// ### Challenge ###

function processInput(value: number | string) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value.toUpperCase());
  }
}

let value1 = processInput("sam");
console.log(value1);

// An function that is returning an function.

function createEmployee({ id }: { id: number }): {
  id: number;
  isAcitve: boolean;
} {
    return{id,isAcitve:id%2===0};
}

const firstId=createEmployee({id:1});
const secondId=createEmployee({id:2});

console.log(firstId,secondId);


