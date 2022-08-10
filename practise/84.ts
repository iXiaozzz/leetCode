function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack = [{ key: -1, value: -1 }]
  for (let i = 0; i < heights.length - 1; i++) {
    let index = stack.length
    const currentHeight = heights[i]
    while (index > -1) {
      const currentObj = stack[index]
      if (currentObj.value < currentHeight) {
        stack.push({
          key: index,
          value: currentHeight
        })
      } else {
        maxArea = currentObj.value * (currentObj.key - stack[i - 1].key - 1)
        stack.pop()
        stack.push({
          key: index,
          value: currentHeight
        })
      }
      --index
    }
  }
  return maxArea;
};

const res = largestRectangleArea([2, 1, 5, 6, 2, 3])
console.log(res)



