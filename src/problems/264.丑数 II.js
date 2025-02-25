/*
 * @lc app=leetcode.cn id=264 lang=javascript
 * @lcpr version=30006
 *
 * [264] 丑数 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    if (n === 1) return 1;
    let arr = [1];
    let q = 0, m = 0, t = 0;
    while (arr.length < n) {

        let uglyNum = Math.min(arr[q] * 2, arr[m] * 3, arr[t] * 5)
        arr.push(uglyNum);
        if (uglyNum === arr[q] * 2) q++;
        if (uglyNum === arr[m] * 3) m++;
        if (uglyNum === arr[t] * 5) t++;

    }
    return arr[n - 1]
};
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

