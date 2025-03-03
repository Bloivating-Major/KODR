// Leetcode 707 Design Linked List
{
 // Define the ListNode class
var ListNode = function(val) {
    this.val = val;
    this.next = null;
};

// Define the Linked List class
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    let newNode = new ListNode(val);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    this.size--;
};

/** 
 * Usage Example:
 */
let obj = new MyLinkedList();
obj.addAtHead(1);       // List: [1]
obj.addAtTail(3);       // List: [1, 3]
obj.addAtIndex(1, 2);   // List: [1, 2, 3]
console.log(obj.get(1)); // Output: 2
obj.deleteAtIndex(1);   // List: [1, 3]
console.log(obj.get(1)); // Output: 3
   
}

// Leetcode 83 Delete Duplicates

// Approach 1 Recursive
{
    var deleteDuplicates = function(head) {
        if(head === null || head.next === null) return head; // My Base Case To Solve
    
        head.next = deleteDuplicates(head.next); // Function call for recursion 
    
        if(head.val === head.next.val) return head.next; // If Duplicate is found then we are skipping it
        else return head; // If no Duplicate then we keep it
    };
}

// Approach 2 Iterative
{
    var deleteDuplicates = function(head) {
        let current = head;
    
        while(current !== null && current.next !== null){
            if(current.val === current.next.val){
                current.next = current.next.next; // Skip the Duplicate Values
            }else{
                current = current.next; // Move Forward 
            }
        }
    
        return head;
    };
}

