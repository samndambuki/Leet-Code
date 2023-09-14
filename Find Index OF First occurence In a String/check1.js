function findNeedleInHayStack(hayStack,needle){
    for(let i=0;i<=hayStack.length-needle.length;i++){
        let found = true;

        for(let j=0;j<needle.length;j++){
            if(hayStack[i+j]!== needle[j]){
                found = false
                break;
            }
        }

        if(found){
            return i
        }
    }

    return -1
}

console.log(findNeedleInHayStack("sadbutsad","sad"))