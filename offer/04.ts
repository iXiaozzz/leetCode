// 第一种方法
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const len = matrix.length;
  let result = false;
  for (let i = 0; i < len; i++) {
    result = matrix[i].indexOf(target) > -1;
    if (result) break
  }
  return result
}


// 第二种方法
function findNumberIn2DArray2(matrix: number[][], target: number): boolean {
  // 整合数组
  const allEle = matrix.reduce((result: number[], next: number[]) => {
    result = [...result, ...next]
    return result
  }, [])
  // 去重
  const aloneEle = [...new Set(allEle)];
  return aloneEle.indexOf(target) > -1
};

// 看成一个矩阵
function findNumberIn2DArray3(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1, j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) i--;
    else if (matrix[i][j] < target) j++;
    else return true
  }
  return false
}

const arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
const res = findNumberIn2DArray3(arr, 5)
console.log(res)