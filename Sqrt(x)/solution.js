var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }

  //middle point between left and right will be calculated
  //comparison with x will determine whether the value lies to the left or right of the
  //middle point

  //signifies the lower boundary
  let left = 0;

  //signifies the upper boundary
  let right = x;

  //executes as long as this condition is true
  while (left <= right) {
    //midpoint divides the search space into two halves
    let mid = Math.floor((left + right) / 2);

    //mid is the variable representing the current work space
    //mid*mid - square of the mid value
    //x - input value you are trying to find the squre root

    //handles the exact case where you have found the exact square root of input value x
    //if mid*mid is equal to x it means you have found the square root of x
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(mySqrt(4))
console.log(mySqrt(8))
