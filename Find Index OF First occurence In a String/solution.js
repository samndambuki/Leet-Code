function findNeedleInHayStack(haystack, needle) {
  //i - keeps track of where we are looking in the haystack
  //in this case start at 0 which is the beginning
  //i ++ moves one character at a time
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    //we beleive that we will find what we are looking for as we go through the haystack
    let found = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        //exit the loop immediately
        break;
      }
    }

    if (found) {
      //i - starting positio where needle was found
      return i;
    }
  }

  //if we couldn't find needle in haystack we return -1

  return -1;
}

module.exports={findNeedleInHayStack}

// console.log(findNeedleInHayStack("sadbutsad", "sad"));
// console.log(findNeedleInHayStack("leetcode","leeto"))