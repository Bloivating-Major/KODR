// Leetcode 25 Solved.

function reverse(start, end) {
    let prev = null, cur = start;
    while (cur !== end) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}

var reverseKGroup = function(head, k) {
    if (head === null || head.next === null || k === 1) return head;

    let end = head; // Initialize end pointer
    for (let i = 0; i < k; i++) {
        if (end === null) return head; // If fewer than k nodes left, return head
        end = end.next;
    }

    let start = head; // Initialize start pointer
    let newNode = reverse(start, end); // Reverse first k nodes
    start.next = reverseKGroup(end, k); // Recursively call for the next k-group

    return newNode;
};
