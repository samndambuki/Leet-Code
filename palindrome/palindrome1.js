
function palindrome(x){
    //checks if x is a palindrome
    if(x<0 || (x%10 ===0 && x!==0)){
        return false;
    }

    //initializes reversed to 0
    let reversed = 0;

    while(x>reversed){
        reversed = reversed * 10 +(x%10)
        x = Math.floor(x/10)
    }

    //handle odd digit numbers
    return x === reversed || x===Math.floor(reversed/10)
}

console.log(palindrome(123))
console.log(palindrome(12321))
console.log(palindrome(121))