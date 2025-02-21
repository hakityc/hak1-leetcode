/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const len = nums.length;
  if (len <= 1) return nums;
  const map = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      const cur = map.get(nums[i]);
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const list = Array.from(map);
  list.sort((a, b) => b[1] - a[1]);
  return list.slice(0, k).map((item) => item[0]);
}

console.log(topKFrequent([3, 0, 1, 0], 1));
// @lc code=end
