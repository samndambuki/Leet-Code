var lengthOfLastWord = function(s){
    //remove any spaces at the beginning and end of the string
    s = s.trim();

    //separate the string into individual words wherever there is a space
    const words = s.split(' ')

    //if the words array is empty, if there are no words
    //the function returns 0 if there are no wrods to measure
    if(words.length ===0){
        return 0;
    }

    //retrieve the last word from the words array
    //it does so by accessing the index of the last element of the array
    const lastWord = words[words.length - 1]


    //the function returns the length of the last word
    return lastWord.length
}


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord(" fly me to the moon "))
console.log(lengthOfLastWord("Samuel Ndambuki"))