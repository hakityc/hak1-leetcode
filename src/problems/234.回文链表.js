/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30103
 *
 * [234] 回文链表
 */

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let p = head.next;
    if(!p.next){
        return true;
    }
    if(!p.next.next){
        return head.val === p.val;
    }
    let q = p.next;

    

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

