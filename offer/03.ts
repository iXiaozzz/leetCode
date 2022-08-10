function findRepeatNumber(nums: number[]): number {
  let len = nums.length, result = -1, obj = {}
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    const current = obj[num] || 0
    obj[num] = current + 1
    if (obj[num] > 1) {
      result = num;
      break;
    }
  }
  return result;
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])

function findRepeatNumbe2(nums: number[]): number {
  const len = nums.length;
  let i = 0;
  while (i < len) {
    if (nums[i] === i) {
      i++;
      continue;
    }
    if (nums[nums[i]] === nums[i]) return nums[i];
    const temp = nums[i];
    nums[i] = nums[temp];
    nums[temp] = temp;
    // i++;
  }
  return -1;
}
