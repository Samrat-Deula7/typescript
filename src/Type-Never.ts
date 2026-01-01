// Type Never:

// -> This is the type that represents the type of values that never occurs.
// -> You can't assign any value to a variable of type never.


// let somevalue:never=0; This will throw an error because u can't assign anu value to type error.

type Theme='light'| 'dark';

function checkTheme(theme:Theme):void{
    if(theme === 'light'){
        console.log('light theme');
        return;
    }
    if(theme === 'dark'){
         console.log("dark theme");
         return;
    }
    theme //This theme will get never type and the only two value that this variable can have has already been handeled above.
          //type script automatically assigning this variable the type never is an good thing as now other values cannot be assigned to theme.
    
}
checkTheme("light");