// ## Interface 

// Fundamentals and Methods in interfaces.

// -> Allows ot setup shape for objects (only objects).

// since isbn is readonly it cannot be updated.
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // method:
  printAuthor(): void;
  printTitle(message: string): string;

  // Other way to invoke methods in iterface.
  printSomething:(someValue:number)=>number;
}

const deepWork: Book={
    isbn:123,
    title:"deep work",
    author:'cal newport',
    genre:'self-help',
    printAuthor() {
        console.log(this.author);
    },
    printTitle(message) {
        return `${this.title} ${message}`;
    },
    // first option
    // printSomething:function (someValue) {
    //     return someValue;
    // },

    // Second option
    // printSomething:(someValue) => {
    //     console.log(deepWork.author);
    //     return someValue;
    // },

    // Third option
    printSomething(someValue) {
        return someValue;
    },
}
deepWork.printAuthor();
const result = deepWork.printTitle('is an awsome book');
console.log(result);
console.log(deepWork.printSomething(55));


