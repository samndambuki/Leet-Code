//declare a function
//takes in two inputs
//nums - list of numbers
//target - desired sum we want to achieve
function twoSum(nums, target) {
  //container to keep track of positions of numbers in the list
  //Map - inbuilt data structure that allows you to store key value pairs
  //in this case used to store postions of numbers in an array
  //new - keyword used to create a new instance of a class
  //Map - built in class for craeting map objects
  const numIndices = new Map();

  //i=0 represents first element in the array
  //loop continues as long as i<nums.length is true
  //iterates over each element one by one
  for (let i = 0; i < nums.length; i++) {
    ///find the complement
    //complement = target - num[i]
    const complement = target - nums[i];

    //check if we have seen the complement before
    //if we have  seen the complement before, means we have found a pair of numbers
    //that add up to the target sum
    if (numIndices.has(complement)) {
      //retrieve index from numIndices using get
      //i - represents index of the curent number
      //we return an array that contains these two indices
      return [numIndices.get(complement), i];
    }
    //if we havent seen the complement before we remember the current number
    //and its index by adding it to numIndices map
    numIndices.set(nums[i], i);
  }

  //return key word to exit the function
  //[] empty array to indicate no vaid pair was found
  return [];
}

const nums = [2,7,11,15]
const target = 9
const result = twoSum(nums,target)
console.log(result);