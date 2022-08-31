//slice() --- a method to access a specific number of letters 

let firstName="Harshit";
console.log(firstName);          


// H   a   r   s   h   i   t      --string
// 0   1   2   3   4   5   6      --index values

//suppose I want to print only few letters from string for ex: Harsh

newString=firstName.slice(0,5)    //here 0--start index & 5--end index   this ll return the chartacter having index from 0 to 4, but this won't print the index-5 char
console.log(newString);
