function removeElement(nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[right] = nums[left];
      right--;
    } else {
      left++;
    }
  }
  return right +1
}
