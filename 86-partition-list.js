/**
 * Dificulty: Medium
 * Topics: Linked List, Two Pointers
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const partition = (head, x) => {
    const beforeHead = new ListNode;
    let before = beforeHead;
    const afterHead = new ListNode;
    let after = afterHead;

    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        }
        else {
            after.next = head;
            after = after.next;
        }

        head = head.next;
    }

    before.next = afterHead.next;
    after.next = null;

    return beforeHead.next;
};
