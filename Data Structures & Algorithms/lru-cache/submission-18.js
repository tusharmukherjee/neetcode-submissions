class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.lruMap = new Map()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.lruMap.has(key)) return -1
        const value = this.lruMap.get(key)
        this.lruMap.delete(key)
        this.lruMap.set(key, value)
        return value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.lruMap.has(key)) {
            this.lruMap.delete(key);
        }else if (this.lruMap.size === this.capacity) {
            const firstIndex = this.lruMap.keys().next().value
            this.lruMap.delete(firstIndex)
        }
        this.lruMap.set(key, value)
    }
}
