function addBinary(a, b) {
  //parseInt function takes in two arguments
  //the string to be converted and the base number
  //string is a and base number is 2 which represents the binary

  //string "11" is equal to 3
  const aNumber = parseInt(a, 2);
  const bNumber = parseInt(b, 2);

  //we add the numbers
  const sum = aNumber + bNumber;

  //toString - converts a number to a binary string
  //takes in an optional argument which is the base number system to convert to
  const result = sum.toString(2);

  //return statement exits a function and returns a value to caller
  return result;
}

// const a = "11";
// const b = "1";
// const result = addBinary(a, b);


const a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

const result = addBinary(a, b);

console.log(result); 


