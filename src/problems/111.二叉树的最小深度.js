/*
 * @lc app=leetcode.cn id=111 lang=javascript
 * @lcpr version=30006
 *
 * [111] 二叉树的最小深度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

    // 广度优先遍历
    const bfs = () => {
        if (!root) return 0;
        const queue = [root];
        let depth = 0;
        while (queue.length) {
            depth++;
            let len = queue.length;
            while (len--) {
                const node = queue.shift();
                if (!node.left && !node.right) return depth;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return depth;
    }
    // 深度优先遍历
    const dfs = () => {
        if (!root) return 0;
        let depth = Infinity;
        const traverse = (node, level) => {
            if (node.left === null && node.right === null) {
                depth = Math.min(depth, level);
            }
            if (node.left) traverse(node.left, level + 1);
            if (node.right) traverse(node.right, level + 1);
        }
        traverse(root, 1);
        return depth;
    };
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,null,3,null,4,null,5,null,6]\n
// @lcpr case=end

 */

