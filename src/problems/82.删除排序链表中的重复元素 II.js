/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30008
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
    //创建p,q指针指向head
    //p指针向后移动，判断q.val和p.val和p.next.val的关系
    //只要q.val!==p.val && p.val!==p.next.val的时候，把p.next赋值给q.next
    if (!head || !head.next) return head

    let dummy = new ListNode(-1)
    let tail = dummy
    let p = head
    while (p) {
        if (p.next && p.val === p.next.val) {
            let val = p.val
            while (p && p.val === val) {
                p = p.next
            }
        } else {
            tail.next = p
            tail = p;
            p = p.next
        }
    }
    tail.next = null
    return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

