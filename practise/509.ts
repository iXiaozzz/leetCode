function fib(n: number, memo?: number[]): number {
  memo = !memo ? new Array(n).fill(0) : memo;
  if (n < 2) return n;
  if (!memo[n]) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo)
  }
  return memo[n]
};


function fib2(n: number): number {
  const arr: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}