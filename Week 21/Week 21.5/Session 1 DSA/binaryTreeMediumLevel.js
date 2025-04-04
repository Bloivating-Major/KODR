//  Symmetric Tree
var solve = function(p, q){
    if(p === null && q === null) return true;
    if((p === null && q !== null) || (p !== null && q === null)) return false;
    if(p.val === q.val){
        let left = solve(p.left, q.right);
        let right = solve(p.right, q.left);
        return left && right;
    }
    return false;
}

var isSymmetric = function(root) {
    if(root === null) return true;
    return solve(root.left, root.right);
};
// Binary Tree LEvel Order Traversal

var levelOrder = function(root) {
    let ans = [];

    if(root === null) return ans;

    let queue = [root];

    while(queue.length !== 0){
        let cur = [];
        let size = queue.length;

        for(let i = 1; i <= size; i++){
            let node = queue.shift();
            cur.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        ans.push(cur);
    }

    return ans;
};
// Path Sum

var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    if(root.left === null && root.right === null && root.val === targetSum) return true;
    return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum - root.val);
};
// Invert Binary Tree

var solve = function(root){
    if(root === null) return;
    solve(root.left);
    solve(root.right);
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}

var invertTree = function(root) {
    if(root === null) return null;
    solve(root);
    return root;
};