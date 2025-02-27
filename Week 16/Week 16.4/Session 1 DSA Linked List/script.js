class Node {
    constructor(val) {
        this.val = val;
        this.next = null;  // Points to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initially, list is empty
        this.size = 0; // Number of items in the list
    }

    insertAtFirst(val) {
        this.size++;
        let newNode = new Node(val); // Create a new node
        if (this.head === null) {
            this.head = newNode; // If list is empty, head becomes newNode
            return;
        }
        newNode.next = this.head; // Point newNode to current head
        this.head = newNode; // Update head to newNode
    }

    insertAtLast(val){
        this.size++;
        let newNode = new Node(val); // Create a new node
        if(this.head === null){
            this.head = newNode; // If list is empty, head becomes newNode
            return;
        }
        let current = this.head;
        while(current.next!== null){
            current = current.next;
        }
        current.next = newNode; // Point the last node to newNode
    }

    deleteAtFirst(){
        this.size--;
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        if(this.head.next === null){
            this.head = null; // If list has only one node
            return;
        }
        this.head = this.head.next; // Update head to next node
    }

    deleteAtLast(){
        this.size--;
        if(this.head == null || this.head.next === null){
            this.head = null; // If list is empty, head becomes
            return;
        }
        let current = this.head;
        while(current.next.next!== null){
            current = current.next;
        }
        current.next = null; // Point the second last node to null
    }

    insertAtPosition(value, position){
        if(position < 1 || this.size+1 < position){
            console.log("Invalid position");
            return;
        }
        if(position===1) {
            this.insertAtFirst(value);
            return;
        }
        if(position === this.size+1){
            this.insertAtLast(value);
            return;
        }
        this.size++;
        let newNode = new Node(value);
        let current = this.head;
        let i =1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    deleteAtPosition(position){
        if(position < 1 || this.size < position){
            console.log("Invalid position");
            return;
        }
        if(position === 1) {
            this.deleteAtFirst();
            return;
        }
        if(position === this.size){
            this.deleteAtLast();
            return;
        }
        this.size--;
        let current = this.head;
        let i = 1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        current.next = current.next.next;
    }

    print() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.val + " → ";
            temp = temp.next;
        }
        console.log(output + "NULL");
    }
}

let obj = new LinkedList();
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);

obj.insertAtLast(40);
obj.insertAtLast(50);

obj.print();

obj.deleteAtFirst();

obj.print();

obj.deleteAtLast();

obj.print();

obj.insertAtPosition(60, 3);

obj.print();


obj.deleteAtPosition(2);

obj.print();

