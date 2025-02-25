/*
 * @lc app=leetcode.cn id=160 lang=javascript
 * @lcpr version=30006
 *
 * [160] 相交链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let map = new Map();
    let aCur = headA;
    let bCur = headB;

    // 同时遍历两个链表
    while (aCur || bCur) {
        if (aCur) {
            if (map.has(aCur)) {
                return aCur;
            }
            map.set(aCur, true);
            aCur = aCur.next;
        }
        if (bCur) {
            if (map.has(bCur)) {
                return bCur;
            }
            map.set(bCur, true);
            bCur = bCur.next;
        }
    }

    return null;
};
// @lc code=end



/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[1,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */

