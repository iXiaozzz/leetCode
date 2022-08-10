var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 第一种方法
function findNumberIn2DArray(matrix, target) {
    var len = matrix.length;
    var result = false;
    for (var i = 0; i < len; i++) {
        result = matrix[i].indexOf(target) > -1;
        if (result)
            break;
    }
    return result;
}
// 第二种方法
function findNumberIn2DArray2(matrix, target) {
    // 整合数组
    var allEle = matrix.reduce(function (result, next) {
        result = __spreadArrays(result, next);
        return result;
    }, []);
    // 去重
    var aloneEle = __spreadArrays(new Set(allEle));
    return aloneEle.indexOf(target) > -1;
}
;
// 看成一个矩阵
function findNumberIn2DArray3(matrix, target) {
    var i = matrix.length - 1, j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] > target)
            i--;
        else if (matrix[i][j] < target)
            j++;
        else
            return true;
    }
    return false;
}
var arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
var res = findNumberIn2DArray3(arr, 5);
console.log(res);
