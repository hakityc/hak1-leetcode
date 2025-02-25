/*
 * @lc app=leetcode.cn id=876 lang=javascript
 * @lcpr version=30006
 *
 * [876] 链表的中间结点
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let length = 0;
    let p = head;
    while (p) {
        p = p.next;
        length++;
    }
    let mid
    if (length % 2 === 0) {
        mid = Math.ceil(length / 2);
    } else {
        mid = Math.floor(length / 2);
    }

    while (mid--) {
        head = head.next;
    }
    return head;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

 */

