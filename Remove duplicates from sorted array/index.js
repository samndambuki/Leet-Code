//solve using pointers 
//i  - iterate through the array
//j - point to the next position where the next element should be stored

function removeDuplicates(nums){
    //conditional statement
    //checks a condition and based on that condition it performs an action or skips it
    //nums.length  - returns number of elements in an array
    // === - comparison operator
    if(nums.length === 0 ){
        //if nums array is empty the function will stop executing and return 0
        return 0;
    }

    //counts unique elements
    let uniqueCount = 1
    //keeps track of where to put the next unique element in an array
    let j = 1


    for (let i=1; i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[j] = nums[i]
            j++;
            uniqueCount++;
        }
    }

    nums.length = uniqueCount

    return uniqueCount
}


