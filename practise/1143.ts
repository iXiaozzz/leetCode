function longestCommonSubsequence(text1: string, text2: string): number {
  const m: number = text1.length, n: number = text2.length;
  const dp: Array<Array<number>> = new Array(m + 1).fill(0).map(() => (new Array(n + 1).fill(0)))
  for (let i = 1; i <= m; i++) {
    const c1 = text1[m - i]
    for (let j = 1; j <= n; j++) {
      const c2 = text2[n - j]
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  console.log('dp:', dp)
  return dp[m][n]
};

longestCommonSubsequence("abcde", "ace")


function move2Zero(nums: number[]): number[] {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }

  return nums

}
