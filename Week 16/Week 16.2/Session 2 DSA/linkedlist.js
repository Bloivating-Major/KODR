class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    insertAtFirst(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    print(){
        
    }
}

let obj1 = new LinkedList();

console.log(obj1.insertAtFirst(10));
console.log(obj1.insertAtFirst(20));
console.log();