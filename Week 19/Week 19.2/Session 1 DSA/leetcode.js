// question 1

var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack.length !== 0){
        return this.stack.shift();
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack.length !== 0){
        return this.stack[0];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// question 2 


var MyStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.empty()) return null;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.empty()) return null;
    return this.stack[this.stack.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// question 3

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Implementation of Stack Using Array
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let ch = s.charAt(i);
        if(ch === "(" || ch === "[" || ch === "{"){
            stack.push(ch);
            continue;
        }
        if(stack.length === 0) return false;
        if(ch === ")"){
            if(stack[stack.length-1] === "(") stack.pop();
            else return false; 
        }
        else if(ch === "]"){
            if(stack[stack.length-1] === "[") stack.pop();
            else return false; 
        }
        else if(ch === "}"){
            if(stack[stack.length-1] === "{") stack.pop();
            else return false; 
        }
    }
    if(stack.length != 0) return false;
    return true;
};