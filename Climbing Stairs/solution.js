function climbStairs(n){
    if(n<=2){
        return n;
    }

    //create an array dynamic programming
    //stores number of distinct ways to reach each step from 1 to n
    const dp = new Array(n+1)


    //keeps track of number of distinct ways to reach the stair case
    dp[1] = 1;
    dp[2] = 2;



    //the heart of dynamic programming is that the loop starts from step 3 and goes up to step n. 
    for(let i=3;i<=n;i++){
        //we sum up the ways to reach the previous step
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

const n1 = 2;
const n2 = 3;

console.log(climbStairs(n1))
console.log(climbStairs(n2))
