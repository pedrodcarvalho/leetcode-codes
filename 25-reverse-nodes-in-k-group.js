/**
 * Dificulty: Hard
 * Topics: Linked List, Recursion
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseKGroup = (head, k) => {
    if (!head || k === 1) {
        return head;
    }

    let count = 0;
    let current = head;

    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count < k) {
        return head;
    }

    current = head;
    let prev = null;

    for (let i = 0; i < k; i++) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head.next = reverseKGroup(current, k);

    return prev;
};
