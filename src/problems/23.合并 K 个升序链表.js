/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30005
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译。
// 本代码的正确性已通过力扣验证，如有疑问，可以对照 java 代码查看。

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    // 虚拟头结点
    let dummy = new ListNode(-1);
    let p = dummy;
    // 优先级队列，最小堆
    let pq = new MinPriorityQueue({ compare: (a, b) => a.val - b.val });
    // 将 k 个链表的头结点加入最小堆
    for (let head of lists) {
        if (head !== null)
            pq.enqueue(head);
    }

    while (!pq.isEmpty()) {
        // 获取最小节点，接到结果链表中
        let node = pq.dequeue();
        p.next = node;
        if (node.next !== null) {
            pq.enqueue(node.next);
        }
        // p 指针不断前进
        p = p.next;
    }
    return dummy.next;
};

// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

