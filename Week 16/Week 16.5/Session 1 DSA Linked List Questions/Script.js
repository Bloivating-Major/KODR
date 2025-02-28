// This are Linked List Questions
// Question 1 Leetcode 21 Merge Two Sorted Lists

// This Is Recursive Approach.
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
      if (list2 === null) return list1;
  
      if (list1.val < list2.val) {
          list1.next = mergeTwoLists(list1.next, list2); // Correctly linking next node
          return list1;
      } else {
          list2.next = mergeTwoLists(list1, list2.next); // Correctly linking next node
          return list2;
      }
  }; 

  // This is Iterative Approach
  var mergeTwoListsIterative = function(list1, list2) {
    let one = list1, two = list2;
       let ans = new ListNode(); // Dummy node to simplify the logic
       let temp = ans;
   
       while (one !== null && two !== null) {
           if (one.val < two.val) {
               temp.next = one;
               one = one.next;
           } else {
               temp.next = two;
               two = two.next;
           }
           temp = temp.next;
       }
   
       // Attach the remaining nodes
       if (one === null) temp.next = two;
       else temp.next = one;
   
       return ans.next; // The merged sorted list (Skipping the dummy node)
   }; 

// Question 2 Leetcode 141 Linked List Cycle 

// This is Slow and Fast Pointer Approach

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow by 1 step
        fast = fast.next.next;      // Move fast by 2 steps
        
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle
};

// Question 3 Leetcode 142 Linked List Cycle 2

// This is Slow and Fast Pointer Approach with Floyd's Tortoise and Hare Algorithm

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow by 1 step
        fast = fast.next.next;      // Move fast by 2 steps
        
        if (slow == fast) { // When Slow And Fast Becomes At One Place Now we will again track them
            slow = head;    // Slow Becomes Head Again
            while(slow != fast){ // Now Increment Both By 1 Until They Meet Again
                slow = slow.next;  // Incremented by 1 Value Now
                fast = fast.next;  // Incremented By 1 Value Now
            }
            return slow; // Cycle detected
        }
    }
    
    return null; // No cycle
};

// Question 4 Leetcode 206 Reverse Linked List

// This is Iterative Approach With 3 Pointers
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let temp = current.next; // Store next node
        current.next = prev;     // Reverse the link
        prev = current;          // Move prev forward
        current = temp;          // Move current forward
    }

    return prev; // New head of the reversed list
};