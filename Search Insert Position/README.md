<!-- CHALLENGE -->

35. Search Insert Position
Easy
14.7K
633
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
Accepted
2.4M
Submissions
5.4M
Acceptance Rate
44.4%

<!-- SOLUTION -->
Certainly! Let's use a real-world example with numbers:

Real-World Scenario: Guessing a Number in a Game

Imagine you're playing a guessing game with your friend. Your friend has thought of a number between 1 and 100, and you need to guess it. To make it more exciting, your friend will only tell you if your guess is too high or too low, and you want to guess the number as quickly as possible.

Here's how you can apply the binary search logic:

Start with a big range: At the beginning, you know that the number you're guessing can be anywhere between 1 and 100. So, your range is from 1 to 100.

Guess the middle number: You guess the number right in the middle of your range, which is 50. You say, "Is it 50?"

Compare with your friend's response: Your friend tells you if your guess is too high or too low:

a. If your friend says, "No, it's not 50, it's lower," you now know that the number, if it's in the range, must be between 1 and 49. So, you ignore the higher half of the range.

b. If your friend says, "No, it's not 50, it's higher," you now know that the number, if it's in the range, must be between 51 and 100. So, you ignore the lower half of the range.

c. If your friend says, "Yes, it's 50!" you've found the number, and you're done.

Repeat the process: You keep repeating steps 2 and 3 with the narrowed-down range. For example, if you ignored the higher half, you now focus on the range from 1 to 49.

Keep narrowing it down: With each guess, you're cutting the range in half. You guess the middle of the remaining range and compare with your friend's response until you either find the number or the range becomes very small.

Exit the game: When you finally guess the correct number, you've won the game. If the range becomes very small (maybe just one number), and your friend confirms the number isn't in that range, you know your guess should be where the last number you checked was.

This way, you're using a process similar to binary search to quickly guess the number in the game. It's much faster than guessing random numbers one by one, just like the binary search algorithm is much faster than checking each number one by one in a sorted list.

<!-- SOLUTION SIMPLIFIED -->

I apologize for any confusion in my previous response. I made a mistake in explaining the example. You are absolutely right; index 3 is not the correct position to insert the number 4 because it's less than 4.

Let me correct that:

In the example, when you have the line:

Copy code
0   1   2   3   4   5   6   7   8   9   10
And you want to insert the number 4, here's the correct process:

Start in the middle: You start by looking at the number in the middle of the line, which is 5.

Compare with the new number: You compare 4 (the new number you want to insert) with 5.

Since 4 is smaller than 5, you know that the right spot for 4 must be somewhere to the left of 5.
Update the search range: To focus on the left side of the line, you move your "right" pointer to just before the middle, which is 4.

Repeat the process: Now, you're left with this part of the line:

Copy code
0   1   2   3
Keep narrowing it down: You repeat steps 1-4 until you find the right spot.

Exit the process: When your search is complete, and the "left" and "right" pointers meet, you know where to insert the number 4. In this case, the "left" pointer is pointing at position 3. This means the correct position to insert the number 4 on the number line is indeed at position 3.

So, in this corrected scenario, the code return left; is correct because it returns index 3 as the position to insert the number 4 into the line of numbers. My apologies for the previous mistake, and thank you for pointing it out.