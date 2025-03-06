// Iterative Approach Leetcode 1290
var getDecimalValue = function(head) {
    let temp = head, size = 0, ans = 0;
    while(temp != null){
        size++;
        temp = temp.next;
    }
    temp = head;
    while(temp != null){
        ans = ans + (Math.pow(2,size-1) * temp.val);
        size--;
        temp = temp.next;
    }
    return ans;
};

// Iterative Approach Leetcode 203
var removeElements = function(head, val) {
    if(head == null) return null;

    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    temp.next = head;
    while(temp!=null && temp.next != null){
        if(temp.next.val == val){
            temp.next = temp.next.next;
        }else temp = temp.next;
    }
    return dummyNode.next;
};

// Iterative Approach Leetcode 234
var isPalindrome = function(head) {
    // Step 1: Find the size of the linked list
   let size = 0, temp = head;
   while (temp) {
       size++;
       temp = temp.next;
   }
    // Step 2: Reverse the first half while traversing
   let prev = null, current = head;
   for (let i = 0; i < Math.floor(size / 2); i++) {
       let nextNode = current.next;
       current.next = prev;
       prev = current;
       current = nextNode;
   }
   
   // Step 3: Handle odd-length linked list (skip middle node)
   if (size % 2 !== 0) {
       current = current.next;
   }

     // Step 4: Compare both halves
   while (prev && current) {
       if (prev.val !== current.val) return false;
       prev = prev.next;
       current = current.next;
   }
   return true;
};

// Leetcode 160 Hash Approach
var getIntersectionNode = function(headA, headB) {
    // Our Approach is to Solve This Using a HashSet
    // Step 1 Creating a New Set
    let set = new Set();

    // Step 2 Iterating Over List A and Adding Them in Set
    while (headA !== null) {
        set.add(headA);
        headA = headA.next;
    }

    // Step 3 Iterating Over List B and Adding Them in Set also checking if Node From List A Exist In Our Set or not
    // To find the Intersection Point
    while (headB !== null) {
        if (set.has(headB)) return headB;
        headB = headB.next;
    }
    
    // If No Node is Found Return Null
    return null;
};

// Leetcode 160 Two Pointer Approach
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null; // Edge case: If one list is empty

   let a = headA, b = headB; // Initialize two pointers

   while (a !== b) { 
       a = (a === null) ? headB : a.next; // If a reaches end, move to headB
       b = (b === null) ? headA : b.next; // If b reaches end, move to headA
   }

   return a; // Return intersection node or null
};

// Leetcode 82 Iterative Approach
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head; // If empty or only one node, return as is

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next; // Skip all occurrences of the duplicate
            }
            prev.next = current.next; // Remove all duplicates
        } else {
            prev = prev.next; // Move prev forward if no duplicate
        }
        current = current.next; // Move Forward 
    }

    return dummy.next;
};