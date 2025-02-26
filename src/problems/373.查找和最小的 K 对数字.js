/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30006
 *
 * [373] 查找和最小的 K 对数字
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    //1. 创建最小堆
    //2. 先让 nums1[i] 和 nums2[0] 进入堆。
    //3. 循环k次操作：从最小堆取出最小值，并把下一个可能的最小值压入堆中
    let pq = new MinPriorityQueue(pair => pair[0] + pair[1]);


    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        pq.enqueue([nums1[i], nums2[0], 0])
    }

    let res = []
    while (!pq.isEmpty() && k--) {
        let cur = pq.dequeue()
        let next_index = cur[2] + 1
        if (next_index < nums2.length) {
            pq.enqueue([cur[0], nums2[next_index], next_index])
        }
        res.push([cur[0], cur[1]])
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */

