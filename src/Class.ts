
// Classes are the blueprint for creating objects

class Book{
    // "readonly " is an modifier 
    // so now title can only be read and not updated

    // public is an modifier
    // so now title can be accessed using the object created on the basis of this class
    public readonly title:string;
    public author:string;

    // private is an modifier
    // so now checkedOut cannot be accessed using the object created on the basis of this class
    private checkedOut:boolean=false;
    constructor(title:string,author:string){
        // The "this" key word points to this class.
        this.title=title;
        this.author=author;
    }

    // checkOut is an method that can be called to run some function .
    // This can access the private variables because it is also inside the class.
    checkOut(){
        return this.checkedOut=true;
    }
}

// The new key word is used to create an object called deepWork form the class named Book
const deepWork = new Book('Deep Work', 'cal Newport')

console.log(deepWork.checkOut());
