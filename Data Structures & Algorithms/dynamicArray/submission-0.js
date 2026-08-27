class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0
        this.arr = new Array(this.capacity).fill(0);
        
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length == this.capacity){
            this.resize();
        }
        this.arr[this.length]=n;
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.length > 0){
            this.length--;
        }
        return this.arr[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        const newArr = new Array(this.capacity).fill(0);
        this.arr = this.arr.concat(newArr);
        this.capacity *= 2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
