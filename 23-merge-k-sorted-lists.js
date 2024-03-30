/**
 * Dificulty: Medium
 * Topics: String, Dynamic Programming, Backtracking
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = (list1, list2) => {
    if (!list1) {
        return list2;
    }
    else if (!list2) {
        return list1;
    }
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

const mergeKLists = (lists) => {
    if (lists.length === 0) {
        return null;
    }
    else if (lists.length === 1) {
        return lists[0];
    }
    else if (lists.length === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }
    else {
        const mid = Math.floor(lists.length / 2);
        const left = mergeKLists(lists.slice(0, mid));
        const right = mergeKLists(lists.slice(mid));

        return mergeTwoLists(left, right);
    }
};
