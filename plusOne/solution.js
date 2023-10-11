function plusOne(digits) {
  //keywords use to craete variables in javacript
  //var const let
  //var - outdated and can be re declared and re assigned. it has a global or function scope
  //let -has a block scope. limited to the block where it is defined. like a loop or an if statement. can be re assgined
  //const - declare constants. variables that cannot be reassgined once given a value
  // let age = 30;
  // age = 22;
  // console.log("age is:",age)
  // var name = "Sam"
  // var name = "Samuel"
  // console.log(name);

  //create a variable
  //initialize it to 1
  //an empty basket that has one
  let carry = 1;

  //does something repeatedly
  //i - position in the array
  for (let i = digits.length - 1; i >= 0; i--) {
    //sum stores result of our calculation
    //digits - an array that contains a list of numbers
    //carry -value we are carrying from the previous step in the code

    //helps calculate sum of the current value and carry from the previous step
    //we use sum to decide whether we want to carry over to the next digit
    let sum = digits[i] + carry;

    if (sum > 9) {
      //we set carry variable to 1
      carry = 1;
      //updating current value in the digits array
      //% gives the remainder
      digits[i] = sum % 10;
    }
    //if value is less than 10
    else {
        //set carry to 0 because there is no need to carry a value to the next digit
      carry = 0;
      //update the current digit with the sum
      digits[i] = sum;
    }
  }

  if(carry===1){
    digits.unshift(1)
  }

  return digits;
}

console.log(plusOne([1,2,3]))