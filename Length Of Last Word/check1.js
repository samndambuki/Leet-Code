function lengthOfLastword(s){
    //trim spaces between the start and the end
    s = s.trim()

    //split the array when there is a space
    const words = s.split(' ')

    //if words array is empty return 0
    if(words.length ===0){
        return 0;
    }

    //find the last word
    const lastWord = words[words.length-1]

    return lastWord.length
}

console.log(lengthOfLastword("Hello World"))