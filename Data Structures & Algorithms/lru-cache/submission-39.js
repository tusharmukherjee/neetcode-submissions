class Node {
    constructor(key = null,val = null) {
        this.next = null;
        this.prev = null;
        this.value = val;
        this.key = key;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.right = new Node();
        this.left = new Node();
        this.right.prev = this.left;
        this.left.next = this.right;
    }

    remove(node){
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node){
        let prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.insert(newNode);
        this.cache.set(key,newNode);
        
        if(this.cache.size > this.capacity){
            const leftMostNode = this.left.next;
            this.remove(leftMostNode);
            this.cache.delete(leftMostNode.key)
        }
    }
}
