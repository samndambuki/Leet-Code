//this string has a length of five
//contains five characters
//arrays and strings are zero indexed
//firts character of the string has a zero index
const s= "Hello";

//charAt - retieve a specific character from a specific index 
//string.charAt(index)
//idices are zero based
const char = s.charAt(2)
console.log(char)

//will execute as long as i is less than 5 
for(let i=0;i<s.length;i++){
    //console.log(s[i]) - when i is 0,1,2,3,4 5 - loop ends 
    console.log(s[i]);

    
}
