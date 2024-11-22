import Node from "./Node.js"

export default class LinkedList {
    constructor() {
        this.head = null
        this.llSize = 0
    }

    append(value) {
        let node = new Node(value)
        let current;

        if(!this.head) {
            this.head  = node
        } else {
            current = this.head

            while(current.nextNode) {
                current = current.nextNode
            }

            current.nextNode = node
        }

        this.llSize++;
    }

    insertAt(value, index) {
        if(index > 0 && index > this.llSize || index < 0) {
            return
        }

        if(index ==  0) {
            this.prepend(value)
            return
        }

        const node = new Node(value)
        let current, previous;

        current = this.head;

        let count = 0

        while(count < index) {
            previous = current

            count++

            current = current.nextNode
        }

        node.nextNode = current

        previous.nextNode = node

        this.llSize++;
    }

    contains(value) {
        let current = this.head

        while(current) {
            if(current.value == value){
                return true
            }

            current = current.nextNode
        }

        return false
    }

    pop() {
        if (!this.head) {
            return null;
        }
    
        let current = this.head;
    
        if (!current.nextNode) {
            const value = current.value;
            this.head = null;
            this.llSize--;
            return value;
        }
    
        let previous = null;
    
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
    
        previous.nextNode = null;
        this.llSize--;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while(current) {
            if(current.value === value) {
                return index;
            }

            current = current.nextNode;
            index++;
        }

        return "Value not found."
    }

    getAt(index) {
        if (index < 0 || index >= this.llSize) {
            return null;
        }

        let current = this.head
        let count = 0

        while(current){
            if(count == index){
                return current.value
            }

            count++

            current = current.nextNode
        }

        return null;
    }

    removeAt(index) {
        if(index > 0 && index > this.llSize || index < 0) {
            return
        }

        let current = this.head
        let previous = null
        let count = 0

        if(index == 0) {
            this.head = current.nextNode
        } else {
            while(count < index) {
                previous = current
                current = current.nextNode
                count++
            }

            previous.nextNode = current.nextNode
        }

        this.llSize--;
    }

    root() {
        return this.head.value
    }

    tail() {
        let current = this.head

        while(current.nextNode != null) {
            current = current.nextNode
        }

        return current.value
    }

    size() {
        return this.llSize
    }

    prepend(value) {
        this.head = new Node(value, this.head)
        this.llSize += 1
    }

    toString() {
        if (!this.head) {
            return "null";
        }

        let current = this.head;
        let result = "";
    
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
    
        result += "null";

        return result
    }
}