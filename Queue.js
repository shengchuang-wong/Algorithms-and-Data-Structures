class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) this.first = this.last = newNode;
        else this.last.next = this.last = newNode;
        return this.size++;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue(4);


console.log(queue.first);
console.log(queue.last);
console.log(queue.size);
