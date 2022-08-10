// 三数之和
function threeSum(nums) {
    nums.sort(function (a, b) { return a - b; });
    var result = [];
    if (nums.length < 3)
        return result;
    var len = nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
            break;
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        var left = i + 1;
        var right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return result;
}
;
var arr = [-1, 0, 1, 2, -1, -4];
var result = threeSum(arr);
console.log(result);
