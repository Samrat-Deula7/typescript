
class Book{
    private checkedOut:boolean=false;
    constructor(readonly title:string,public author:string){}
    
    get info(){
        return `${this.title}by ${this.author}`;
    }

    set checkOut(checkedOut:boolean){
        this.checkedOut=checkedOut;
    }

    get checkOut(){
        return this.checkedOut;
    }
}

const deepWork=new Book('Deep Work', 'Cal Newport')

console.log(deepWork.info);

deepWork.checkOut=true;
console.log(deepWork.checkOut);
