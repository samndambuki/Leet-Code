function checkVowels(sentense) {
  //g - global
  //i - insensitive
  let vowels = sentense.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
