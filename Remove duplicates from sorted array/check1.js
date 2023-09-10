//parameters - placeholders for the values you want to operate within the function
//nums - represents an array of numbers

//give an example
//parameter
//recipe book
//say you want to cook a cake
//blank spaces in the recipe book represents parameter

//argument
//say you are in the kitchen
//we have eggs flour and sugar
//the actual stuff you use in your kitchen to fill in the blank spaces to  make the cake

//nums
function uniqueElements(nums) {
  ///if statement checks if something is true or false then it does something based on that decission
  //checks if nums array is empty
  //it wants to find out if there are no numbers in the array
  if (nums.length === 0) {
    //sends a result/answer from a function\
    //if nums array is empty, it returns 0 as the answer
    //0 if there are no numbers/toys
    return 0;
  }

  //we have one colorful ball
  //we find a different colorful ball we increment it by 1
  //keeps track of how many unique elements have been found
  let uniqueCount = 1;

  //imagine j as a sticker that we place to a ball
  //1 represents the first ball
  //helps you store unique elements in the correct positions
  let j = 1;

  //i - iterate through the array and compare elements
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[j] = nums[i];
      j++;
      uniqueCount++;
    }

    nums.length = uniqueCount;
    return uniqueCount;
  }
}
