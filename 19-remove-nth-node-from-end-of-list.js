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

const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    console.log(first);
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};
