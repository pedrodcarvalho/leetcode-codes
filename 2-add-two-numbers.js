/**
 * Dificulty: Medium
 * Topics: Linked List, Math, Recursion
 */

const addTwoNumbers = (l1, l2) => {
    const recursiveFn = (n1, n2, carry) => {
        if (!n1 && !n2 && !carry) {
            return null;
        }

        const sum = (n1?.val || 0) + (n2?.val || 0) + carry;
        const nextNode = recursiveFn(n1?.next, n2?.next, Math.floor(sum / 10));

        return new ListNode(sum % 10, nextNode)
    };

    return recursiveFn(l1, l2, 0);
};
