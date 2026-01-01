import type { teacherType } from "./exportingTypes";
 
// since "verbatimModuleSyntax" option is enabled we need to put "type" key word.
// if  "verbatimModuleSyntax" option was enabled  then :
// import  { teacherType } from "./exportingTypes";
// "type" key word is  not required.


const teacher: teacherType = {
  name: "babita",
  age: 20,
  subject:"english",
};

console.log(teacher);
