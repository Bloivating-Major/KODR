const prompt = require("prompt-sync")();

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    createTree() {
        let data = parseInt(prompt("Enter a value (-1 for no node): "));
        if (data === -1) return null;

        let newNode = new Node(data);

        console.log("Enter Left Child for " + data);
        newNode.left = this.createTree();

        console.log("Enter Right Child for " + data);
        newNode.right = this.createTree();

        return newNode; // Return the newly created subtree
    }

    build() {
        this.root = this.createTree();
    }

    preorder(root) {
        if (root == null) return;
        process.stdout.write(root.val + " "); // Corrected: Use root.val instead of this.root.val
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorder(root) {
        if (root == null) return;
        this.postorder(root.left);
        this.postorder(root.right);
        process.stdout.write(root.val + " "); // Corrected: Use root.val instead of this.root.val
    }

    inorder(root) {
        if (root == null) return;
        this.inorder(root.left);
        process.stdout.write(root.val + " "); // Corrected: Use root.val instead of this.root.val
        this.inorder(root.right);
    }
}

let tree = new Tree();
tree.build();

console.log("Preorder Traversal of the Tree:");
tree.preorder(tree.root);
console.log("Postorder Traversal of the Tree:");
tree.postorder(tree.root);
console.log("Inorder Traversal of the Tree");
tree.inorder(tree.root);


