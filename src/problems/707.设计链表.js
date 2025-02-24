/*
 * @lc app=leetcode.cn id=707 lang=javascript
 * @lcpr version=30005
 *
 * [707] 设计链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyLinkedList = function () {
    this.val = 0;
    this.next = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    while (index--) {
        this = this.next;
        if (!this) return -1;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (!this) {
        return new MyLinkedList(val);
    }

    let head = new MyLinkedList(val);
    head.next = this;
    this.length++;
    return head;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (!this) {
        return new MyLinkedList(val);
    }
    let p = this;
    while (p.next) {
        p = p.next;
        if (!p) p.next = new MyLinkedList(val);
    }
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else if (index > 0 && index < this.length) {
        let pre = this, count = 0;
        while (pre && count++ !== index) pre = pre.next;
        let temp = pre.next;
        pre.next = new MyLinkedList(val);
        pre.next.next = temp;
        this.length++;
        return;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
        this = this.next;
        return;
    }
    let pre = this, count = 0;
    while (pre && count++ !== index) pre = pre.next;
    pre.next = pre.next.next;
    this.length--;
    return;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end



