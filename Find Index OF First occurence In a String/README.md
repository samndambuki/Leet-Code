<!-- CHALENGE : -->

Find the Index of the First Occurrence in a String
Easy
4.7K
258
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.


<!-- CHALLENGE EXPAINED : -->
Okay, little friend, imagine you have two sets of building blocks. One set is called "haystack," and the other set is called "needle." We want to find out if the "needle" set of blocks can be found inside the "haystack" set of blocks. If we find the "needle" set inside the "haystack" set, we want to know where it starts.



<!-- explanation of haystack.length-needle.length  -->
: Of course, let's use a simple illustration with stick figures:

Imagine you have a long line of stick figures holding hands, like this:

Copy code
👫👫👫👫👫👫👫👫👫👫👫
Now, you have a small group of stick figures that you want to find within this long line:

Copy code
👬
You want to know where this small group starts in the long line, but you don't want to start looking just anywhere. You want to start looking where there's enough space for the small group to fit.

So, you start looking from the very beginning of the long line:

csharp
Copy code
👫👬 (Here, the small group fits.)
Then, you move one step to the right and check again:

csharp
Copy code
👫👬 (Still enough space for the small group.)
You keep doing this until you reach a point where there's not enough space for the entire small group to fit:

vbnet
Copy code
👬 (Here, the small group can't fit completely because there's not enough space for both.)

So, the code `i <= haystack.length - needle.length` is like saying, "Start looking where the small group can fit inside the long line, and stop when you can't fit anymore." It helps you find the right spot to start looking for the small group in the long line.

<!-- explanation for haystack[i+j]!=needle[j] -->
Certainly, let's use a practical example to understand the line of code haystack[i + j] !== needle[j]. Imagine we have a "haystack" and a "needle" like this:

Haystack: "abcdefgh"
Needle: "cde"

Now, let's break down the line of code step by step in this context:

haystack[i + j]: In this line of code, i represents our current starting position in the "haystack." Initially, we start at position 0 in the "haystack," so i = 0.

When j is 0, it means we are looking at the character in the "haystack" at position i + j = 0 + 0 = 0, which is "a."
!==: This symbol means "not equal to." It's like asking, "Are these two things different?"

needle[j]: j represents our progress in the "needle." When j is 0, it means we are looking at the character in the "needle" at position j, which is also "c."

So, let's put it all together:

We are comparing "a" (from the "haystack") with "c" (from the "needle").
"a" and "c" are not the same, right? "a" is not equal to "c."
Therefore, the comparison haystack[i + j] !== needle[j] is true for this specific comparison.
Now, let's see what happens as we move to the next character:

We increment j to 1, which means we are now comparing "b" (from the "haystack") with "d" (from the "needle").

"b" and "d" are also not the same, right? "b" is not equal to "d."

Again, the comparison haystack[i + j] !== needle[j] is true for this comparison.

Finally, we move to the last character:

We increment j to 2, which means we are now comparing "c" (from the "haystack") with "e" (from the "needle").

This time, "c" and "e" are different too, right? "c" is not equal to "e."

Once more, the comparison haystack[i + j] !== needle[j] is true for this comparison.

So, in this example, for all characters we compared, the condition haystack[i + j] !== needle[j] remained true because none of the characters matched. This is how the code checks each character one by one to see if they match in order to find the "needle" in the "haystack."

