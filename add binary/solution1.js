var addBinary = function (a, b) {
  //stores final result of binary numbers
  let result = "";
  //keeps track of any carry that occurs when adding any binary digits
  let carry = 0;

  //two variables i and j
  //the point to the last index of the input string
  //the will help us iterate through the strings from right to left
  let i = a.length - 1;
  let j = b.length - 1;

  //runs as long a there are digits remaining in either of the input strings a and b
  while (i >= 0 || j >= 0) {
    //extract binary digits in i and store them in digitA

    //if parseInt(a[i]) is true means that we are in the valid range oof indeices
    const digitA = i >= 0 ? parseInt(a[i]) : 0;

    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;

    //Math.floor rounds offf to the nearest integer
    carry = Math.floor(sum / 2);

    result = (sum % 2) + result;

    i--;
    j--;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
};


console.log(addBinary("11","1"))