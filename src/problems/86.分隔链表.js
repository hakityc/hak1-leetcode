/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30005
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let p1 = new ListNode(0);
    let p2 = new ListNode(0);
    let newHead1 = p1;
    let newHead2 = p2;

    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = p1.next;
        } else {
            p2.next = head;
            p2 = p2.next;
        }
        head = head.next;
    }

    p2.next = null; // terminate the second list
    p1.next = newHead2.next; // connect the two lists

    return newHead1.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

