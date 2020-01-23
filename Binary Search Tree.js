class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {
                if(!current.left) return current.left = newNode;
                current = current.left;
            } else {
                if(!current.right) return current.right = newNode;
                current = current.right;
            }
        }
    }

    contains(value) {
        if(!this.root) return false;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}