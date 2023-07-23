//palindrome - a word that reads the same backward as forward
//e.g radar, level, 121
function isPalindrome(x){
    //function checks for special cases where a number cannot be a plaindrome
    //when the number is negative meaning it is less than zero
    //when the number ends with zero
    //|| - logical or operator - returns true if either side on the left or right evaluates to true and vice versa
    //if true code inside if block will be executed
    if(x<0 ||(x%10 === 0 && x!==0)){
        //returns false if the condition in the if block is true
        //if none of the conditions are true the function will continue with the rest of the code after execution
        return false;
    }
    //let - declare
    //= - assign
    //revered variable to store the reversed number
    //initialize it to zero since when we reverse we start with 0 
    let reversed = 0;
    //original variable to store the original variable x
    let original = x;

    //while loop repeatedly executes a block of code as long as a certain condition is true
    //x>0 - loop will continue excuting as long as the value of x is gretaer than 0 
    //loop will continue until x becomes 0 or a negative number
    while(x>0){
        //this is the loop body 
        //executes as long as the loop condition is true
        //multiply by ten to shift all the remaining digits to the left
        //(x%10) is the remainder when x is divided by 10
        reversed = reversed * 10 + (x%10)
        //Mth.floor ensures we get a whole number as the ew value of x
        x = Math.floor(x/10)
    }

    //compares reversed with original number 
    //if they are same it returns true ootherwise false
    return reversed === original
}


//if and return
//1. improve efficiency - for large numbers
//2. final confimation

console.log(isPalindrome(121));
console.log(isPalindrome(-121))
console.log(isPalindrome(10))