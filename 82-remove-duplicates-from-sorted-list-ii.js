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

const deleteDuplicates = (head) => {
    if (!head) {
        return null;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current !== null) {
        while (current.next !== null && current.val === current.next.val) {
            current = current.next;
        }

        if (prev.next === current) {
            prev = prev.next;
        }
        else {
            prev.next = current.next;
        }

        current = current.next;
    }

    return dummy.next;
};
