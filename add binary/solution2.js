var addBinary = function(a,b){

    //here is where we store our result
    let result = "";

    //this is where we store the values we carry
    let carry = 0;

    //use i and j as pointers
    let i = a.length-1
    let j = b.length-1

    // a -11
    //b -  1

    while(i>=0 || j>=0){
        const digitA = i>=0 ? parseInt(a[i]) : 0
        console.log(digitA)
        const digitB = j>=0 ? parseInt(b[j]) : 0
        console.log(digitB)

        const sum = digitA + digitB + carry;
        console.log(sum)

        carry = Math.floor(sum/2) //0.5
        console.log(carry)

        result = (sum%2) + result;
        console.log(result)

        i--;
        j--;
    }
    if(carry>0){
        result = carry + result
    }
    return result
}

console.log(addBinary("11","1"))