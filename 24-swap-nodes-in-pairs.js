/**
 * Dificulty: Medium
 * Topics: Linked List, Recursion
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const swapPairs = (head) => {
    if (!head || !head.next) {
        return head;
    }

    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;

    return newHead;
};
