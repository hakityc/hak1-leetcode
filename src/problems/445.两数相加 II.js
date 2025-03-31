/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30008
 *
 * [445] 两数相加 II
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
const reverseList = (head) => {
    let prev = null, curr = head
    while (curr) {
        let next = curr.next; //临时存一下原来链表的头节点
        curr.next = prev;//把新链表接到curr后面
        prev = curr;//让新链表头节点前移
        curr = next;//curr指向原来链表的头节点
    }
    return prev
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //反转链表

    let reverseL1 = reverseList(l1)
    let reverseL2 = reverseList(l2)
    let p = reverseL1
    let q = reverseL2

    let dummy = new ListNode(0)
    let tail = dummy

    let carry = 0
    while (p || q || carry) {
        let num1 = 0, num2 = 0
        if (p) {
            num1 = p.val
            p = p.next
        }
        if (q) {
            num2 = q.val
            q = q.next
        }
        let sum = num1 + num2 + carry
        carry = Math.floor(sum / 10);
        tail.next = new ListNode(sum % 10)
        tail = tail.next
    }
    return reverseList(dummy.next)
};
// @lc code=end



/*
// @lcpr case=start
// [7,2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

 */

