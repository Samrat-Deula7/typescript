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
