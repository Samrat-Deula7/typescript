type User = {
  id: number;
  name: string;
  isActive: boolean;
};

// Setting type alias other way:
 type stringOrNumber=string | number;
let value1:stringOrNumber =10;
let value2:stringOrNumber ="samrat";


// Note that the type alias can also be exported.
// Example:
// export type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

const john:User= {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User):User{
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}


// Intersection type in union.
// -> Way to combine multiple types into one.

type Book={id:number; name:string; price:number};
type DiscountedBook=Book & { discount: number } ;

const book1:Book={
    id:1,
    name:'How to tame a dragon',
    price:15,
}

const book2:Book={
    id:2,
    name:'The secret life of unicorns',
    price:18,
}

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'Game of throwns',
  price: 20,
  discount: 0.15,
};



// Type Alias also supports computed properties.
// Those properties which is defined dynamically

const propName='age';

type Animal ={
    [propName]:number;
}

let tiger:Animal ={[propName]:4}