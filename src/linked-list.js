const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let currentNode = this._head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentIndex === index) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        let currentIndex = 1;
        let newNode = new Node(data);
        while (currentNode) {
            currentNode = currentNode.next;
            if (currentIndex === index) {
                currentNode.prev.next = newNode;
                newNode.prev = currentNode.prev;
                newNode.next = currentNode;
                currentNode.prev = newNode;
                this.length++;
            }
            currentIndex++
        }
        return this;
    }

    isEmpty() {
        return this.length < 1
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentIndex === index) {
                if (currentNode == this._head && currentNode == this._tail) {
                    this._head = null;
                    this._tail = null;
                } else if (currentNode == this._head) {
                    this._head = this._head.next;
                    this._head.prev = null;
                } else if (currentNode == this._tail) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        this.length--;
        return this;
    }

    reverse() {
        let currentNode = this._head;
        let prev = null;
        while (currentNode) {
            let next = currentNode.next;
            currentNode.next = prev;
            currentNode.prev = next;
            prev = currentNode;
            currentNode = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    }
}

module.exports = LinkedList;