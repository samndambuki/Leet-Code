function romanToInt(s) {
  //Map is a data structure (dictionary) that stores key value pairs
  //We create a new map romanMap
  //use an array
  //new map() - creates a new empty map
  const romanMap = new Map([
    //we store the  keys and their values
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  //we use get method of the roman map object to get the value associated with the key
  // console.log(romanMap.get('I'))

  //result stores the final integer after conersion
  //initilize to 0 - serves as a strting point for accumulating integer value for roman numeral duirng conversion
  //prevent unintended interference from previous calculation
  let result = 0;

  //i - represents loop counter
  //loops through each symbol in roman numeral

  //let - loop counters are declared using let because their values change during iteration
  //const - used for variables whose vaues remain constant throughout the application
  for (let i = 0; i < s.length; i++) {
    //const - means current symbol cannnot be cannot be changed once it's assigned
    //s[i] - accesses the character symbol at position i in string s
    const currentSymbol = s[i];
    const currentValue = romanMap.get(currentSymbol);

    //checks if there is a next symbol in the roman numeral string s
    //i+1 - represents index of the next symbol
    //s.length is the length of the roman numeral
    //if the condition inside the if statement is true
    if (i + 1 < s.length) {
      //this block executes
      const nextSymbol = s[i + 1];
      //next value stores the next integer value
      const nextValue = romanMap.get(nextSymbol);

      //handle subtraction and addition cases
      if (currentValue < nextValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    } else {
      //hanldes the last symbol and adds its value to the result
      result += currentValue;
    }
  }
  return result;
}

console.log(romanToInt("III"))