function lengthOfLastWord(s){
    //trim sapces at the begginning and at the end
    s = s.trim()

    const words = s.split(' ')

    if(words.length === 0){
        return 0;
    }

    const lastWord = words[words.length-1]

    return lastWord.length
}

console.log(lengthOfLastWord("Hello World"))