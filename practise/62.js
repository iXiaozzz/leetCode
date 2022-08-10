function uniquePaths(m, n) {
    var dp = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
    for (var i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (var i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
