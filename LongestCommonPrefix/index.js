function longestCommonPrefix(strs){
    //strs - lenght of input array
    //length of input array is 0 meaning its empty
    //if condition evaluates to true code inside {} executes
    if(strs.length === 0){
        //if strings array is empty it returns an empty sting
        return "";
    }

    //array is a collection of elements
    //[0]  first element in the input array
    let commonPrefix = strs[0]

    //for loop 
    //takes in 3 parts
    //initialization, condition, iteration expression
    //i is an index to access elements is strs array
    //not execute the loop block for the last element of the array
    //i++ - increments value of i by 1
    for (let i = 1;i<strs.length;i++){
        //const - cannot be reassgined or modified once declared
        //will hold value of the current string
        const currentString = strs[i]

        //j keeps track of the index position of characters being comapred in both commonPrefix and currentPrefix
        let j = 0;
        //while block executes if the condition is true
        //.length checks bounds of commonPrefix and currentString
        while(j<commonPrefix.length && j<currentString.length && commonPrefix[j] === currentString[j]){
            //increments the value of j by 1 allowing the loope to preogress to teh next character for comparison
            j++;
        }

        //substring extracts a portion of the string
        commonPrefix = commonPrefix.substring(0,j)
    }
    return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // Output: ""
