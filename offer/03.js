function findRepeatNumber(nums) {
    var len = nums.length, result = -1, obj = {};
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        var current = obj[num] || 0;
        obj[num] = current + 1;
        if (obj[num] > 1) {
            result = num;
            break;
        }
    }
    return result;
}
;
findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
function findRepeatNumbe2(nums) {
    var len = nums.length;
    var i = 0;
    while (i < len) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[nums[i]] === nums[i])
            return nums[i];
        var temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
        // i++;
    }
    return -1;
}
