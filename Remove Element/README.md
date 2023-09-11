<!-- CHALLENGE : -->
27. Remove Element
Easy
1.2K
1.5K
Companies
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

<!-- CHALLENGE EXPLAINED : -->
Imagine you have a line of colorful balls. Some of these balls are blue, and you want to remove all the red balls. After removing the red balls, you want to count how many balls are left.


<!-- SOLUTION EXPLAINED -->
Solution in simple terms:

Stand at the beginning of the line of balls.
Look at each ball one by one.
If you see a red ball, take it out and put it at the end of the line.
Keep doing this until you can't find any more red balls.
Now, count how many balls are in front of you. That's your answer.
So, the solution is like rearranging the balls so that all the red ones are at the end, and then counting how many colorful balls are still in front.


Of course! Imagine you have a line of colorful balls, just like the ones we talked about before. This special code helps us with those balls.

We have two friends, one standing at the very beginning of the line (that's the 'left' friend), and the other at the very end of the line (that's the 'right' friend).

They start looking at the balls in the line.

If the 'left' friend sees a ball that is red (the one we want to remove), they take that red ball and give it to the 'right' friend.

The 'right' friend moves one step back, closer to the end of the line because they are holding a red ball now.

But if the 'left' friend sees a colorful ball that is not red, they leave it where it is and move to the next ball.

They keep doing this until they can't find any more red balls.

When they finish, we count how many colorful balls are still in front of the 'left' friend. That's how many colorful balls we have left after removing the red ones.

So, this code helps us find out how many colorful balls we have left after we've removed all the red ones from our line of balls.


<!-- CODE EXPLAINED -->
what do you mean by this : The 'right' friend moves one step back, closer to the end of the line because they are holding a red ball now.
ChatGPT
I apologize for any confusion. Let me clarify that part:

Imagine you and your friend are standing at the ends of the line of colorful balls. You are the "left" friend, and your friend is the "right" friend.

When your friend (the "left" friend) finds a red ball in the line, they want to take it out and make sure all the red balls end up at the very end of the line. So, they give that red ball to your friend (the "right" friend), who is standing at the end of the line.

Now, to keep the red balls separate from the colorful ones, your friend (the "right" friend) moves one step back, closer to the end of the line. This means they're putting the red ball they just received at the end of the line, and they're ready to take more red balls from you if needed.

So, in simple terms, when the "left" friend finds a red ball, they give it to the "right" friend, who moves one step back to make sure all the red balls end up at the very end of the line. This helps us separate the red balls from the colorful ones.






