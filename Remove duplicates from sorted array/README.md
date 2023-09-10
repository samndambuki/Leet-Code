<!-- CHALLLENGE :  -->

explain this leet code question to me and give me a solution using javascript. implement the solution step by step as if you are explaining it to a kid : 26. Remove Duplicates from Sorted Array
Easy
12.5K
16.5K
Companies
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order. 


<!-- CHALLENGE EXPLAINED -->
Problem Explanation:

You are given an array nums that is sorted in non-decreasing order. Your task is to remove duplicates from this array in-place, which means you should modify the original array to contain only the unique elements while keeping their relative order. After removing duplicates, you need to return the number of unique elements in the modified array.

Example:

Input: [1,1,2]
Output: 2, because after removing duplicates, the modified array becomes [1, 2, _, _] (where _ represents any arbitrary values beyond the returned length).
Constraints:

The length of nums is between 1 and 30,000.
The values in nums are between -100 and 100.
The array nums is sorted in non-decreasing order.




<!-- SOLUTION EXPLAINED IN THE SIMPLEST MANNER :  -->

Sure! Let's explain the code in a way a 2-year-old might understand:

Imagine you have a bag of colorful balls (the array 'nums'). Some balls look exactly the same, but we want to keep only one of each color and count how many colors there are.

Look at the bag: We start by looking at our bag of colorful balls.

Empty bag?: If the bag is empty (no balls), we say, "Oh, there are no balls to count," and we stop.

Counting colors: Now, we're going to count the colors of the balls. We start with 1 color (because we have at least one ball).

Pointer: We have a special pointer (let's call it a "magic finger") that helps us. It points to where we want to put the next ball.

Checking balls: We start looking at the balls one by one, starting with the second ball.

Different colors: If a ball is a different color from the one just before it, we say, "Wow, this is a new color!" We put this ball where our magic finger is pointing and move our magic finger to the next spot.

Counting: We also say, "Yay, we found a new color!" and add 1 to our color count.

Repeat: We keep doing this for all the balls in the bag.

Shorten the bag: After we've looked at all the balls, we make the bag shorter. We keep only the balls we found (no duplicates), and the bag becomes just the right size.

Count: Finally, we tell everyone, "We found this many different colors!" and show them how many by counting on our fingers.

So, the code helps us count how many different colors of balls we have, and it only keeps one of each color. It's like having a bag of toys and making sure we don't have the same toy many times. We want to know how many different toys we have in the end!