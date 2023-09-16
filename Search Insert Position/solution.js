function searchInsert(nums,target){
    //start from left end of the line
    let left = 0
    //start from right end of the line
    let right = nums.length-1

    while(left<=right){
        //calculate middle postion
        //math.floor - makes sure we get a whole number
        let mid = Math.floor((left+right)/2)

        //check if number in the middle is the same as the special number
        if(nums[mid] === target){
            //give us position where we found it
            return mid
        }
        else if(nums[mid]<target){
            left = mid +1
        }else{
            right = mid-1
        }
    }
    return left
}

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,33,5,6],2))
console.log(searchInsert([1,3,5,6],7))



