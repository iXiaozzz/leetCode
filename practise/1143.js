function longestCommonSubsequence(text1, text2) {
    var m = text1.length, n = text2.length;
    var dp = new Array(m + 1).fill(0).map(function () { return (new Array(n + 1).fill(0)); });
    for (var i = 1; i <= m; i++) {
        var c1 = text1[m - i];
        for (var j = 1; j <= n; j++) {
            var c2 = text2[n - j];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.log('dp:', dp);
    return dp[m][n];
}
;
// longestCommonSubsequence("abcde", "ace");

function move2Zero(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i !== j) {
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
}


const res = move2Zero([0, 1, 0, 3, 12])
console.log('res:', res)