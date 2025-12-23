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
