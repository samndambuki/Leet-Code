//pass parameters to functions to make them more versatile and be able to handle different scenarios
//makes code effecient and maintainable
//nums - array of elements
//val - the value we want to remove
function removeElement(nums, val) {
  //keeps track of where we are in the array while we are going through it
  //starting at 0 means that this is the very first ball in the line
  let left = 0;
  //arrays are indexed based
  //nums.length counts how many balls are in our line
  //-1 makes sure we are at the last ball in our line
  //.length is a property that determines number of elements in a data structure
  let right = nums.length - 1;

  //continues executing as long as a certain condition is true
  while(left<=right){
    if(nums[left] === val){
        //swaps the position of two balls
        //assignment statement
        nums[left] = nums[right]
        //move one step back after receiving the red ball
        //-- is a decrement operator
        right --;
    }else{
        //increment operator
        //moves forward to check the next ball
        left ++;
    }
  }
  //right represents the position of the last blue ball
  //when we add 1, its like saying lets count the last colourful ball too
  //+1 is the total number of colourful balls remaining 
  //how many blue balls remain after removing the red ones
  return right+1
}

// let nums1 = [3,2,2,3]
// let val1 = 3

// let result1 = removeElement(nums1,val1)
// console.log(result1)
// console.log(nums1)


// let nums2 = [0,1,2,2,3,0,4,2]
// let val2 = 2

// let result2 = removeElement(nums2,val2)
// console.log(result2)
// console.log(nums2)

module.exports = {removeElement}