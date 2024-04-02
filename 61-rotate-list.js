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

const rotateRight = (head, k) => {
    if (!head || !head.next) {
        return head;
    }

    let shortenedK = 0;

    for (let current = head; current; current = current.next) {
        shortenedK++;
    }

    shortenedK = k % shortenedK;

    for (let i = 0; i < shortenedK; i++) {
        let current = head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        current.next = head;
        head = current;
        previous.next = null;
    }

    return head;
};
