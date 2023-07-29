function isValid(s){
    //array - data structure that holds mutliple values in an oredered list
    //stack array will be used to implement stack data structure
    //stack - collection of elements with two main operations
    //push - add an element to the top of the stack 
    //pop - remove and return the top elelemnt from the stack
    //LIFO - last element added to the stack will be the first one to be removed
    //stack array keeps track of the opening brackets while iterting through the input string
    //when a closing bracket is encountered the code will check if it matches the last encountered opening bracket by using pop operation
    //if they match opening bracket will be removed from the stack
    //by the end of the iteration if the stack is empty it means that all opening brackets were correctly closed by their corresponding closing brackets and the input string is considered valid
    //if there are remaining elements in the stack it means that there were some opening brackets without matching closing brackets and th input string is not valid
    const stack = [];

    //we use a mapping object also known as a dictionary
    //keys - represent the closing brackets while values represent the opening brackets
    const mapping = {
        ')':'(',
        '}':'{',
        ']':'['     
    }

    //for loop - allows us go through each character in the input string 's one by one
    for(let i = 0;i<s.length;i++){
        //extracts a character from a string at a specific index i and store the character in a varibale char
        //charAt is used to retrieve a specific character from a string at a givrn index position
        const char = s.charAt(i);

        //stack - is like a lsit of plates
        //stack is a list that acts like a stack. we use it to keep track of opening brackets while going through the string
        //stack.length keeps track of brackets in the stack
        //stack stores opening brackets

        if(mapping[char]){
            if(!stack.length || stack[stack.length - 1] !== mapping[char]){
                return false;
            }
            stack.pop()
        }else{
            stack.push(char)
        }   
    }

    if(stack.length !== 0){
        return false;
    }

    return true;
}

// Testing the function with example cases:
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false