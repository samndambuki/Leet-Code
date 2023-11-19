var climbingStairs = function(n){
    if(n<=2){
        return n;
    }

    let dp = new Array(n+1)

    dp[1] = 1
    dp[2] = 2

    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

let n1 = 2
let n2 = 3


console.log(climbingStairs(n1))
console.log(climbingStairs(n2))