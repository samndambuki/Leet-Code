const age = 25;
const hasDriverLicense = true;

//&& - returns true if all conditions are true and false if at least one condition is fasle
//mostly used in if statements, conditions and assignments
if(age>=18 && hasDriverLicense){
    console.log("You can Drive")
}
else{
    console.log("You cannot Drive")
}

//array - collection of elements
const numbers  = [5,10,15,20]
for(let i = 0; i<numbers.length;i++){
    // ===  strict equality operator
    if(numbers[i]%2 === 0 && numbers[i] > 10){
        console.log(numbers[i] + "is even and greater than 10")
    }
    else{
        console.log(numbers[i] + "does not meet both conditions")
    }
}


const num1  = 10
const num2  = 5
const num3 = 15

if(num1>0 && num2>0 && num3>0){
    console.log("All three numbers are postive")
}else{
    console.log("At least one number is not positive")
}