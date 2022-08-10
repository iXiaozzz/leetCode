// 最小路径
function minPathSum(grid: number[][]): number {
  let row = grid.length, col = grid[0].length

  for (let i = 1; i < row; i++)//初始化第一列
    grid[i][0] += grid[i - 1][0]

  for (let j = 1; j < col; j++)//初始化第一行
    grid[0][j] += grid[0][j - 1]

  for (let i = 1; i < row; i++)
    for (let j = 1; j < col; j++)
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])//取上面和左边最小的

  return grid[row - 1][col - 1]
};
