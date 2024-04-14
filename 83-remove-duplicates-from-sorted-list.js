/**
 * Dificulty: Easy
 * Topics: Linked List
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


const deleteDuplicates = (head) => {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.next.val === current.val) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }

    return head;
};
