class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            let getArr = this.keyStore.get(key)
            getArr.push([value, timestamp]);
        } else {
            this.keyStore.set(key,[[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let getArr = this.keyStore.get(key);
        let left = 0;
        if (!getArr) return "";
        let right = getArr.length - 1;
        let result = "";
        while(left <= right) {
            let mid = left + Math.floor((right-left)/2);
            if(getArr[mid][1] <= timestamp ){
                result = getArr[mid][0];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}