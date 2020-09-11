/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
const depthSumInverse = function(nestedList) {
    const getMaxDepth = (nestedList) => {
        if (!nestedList) {
            return 0
        }
        let res = 0
        for (let i = 0; i < nestedList.length; i++) {
            res = Math.max(res, getMaxDepth(nestedList[i].isInteger() ? null : nestedList[i].getList()))
        }
        return res + 1
    }
    /**
     * @method sum
     * @param nestedList
     * @param depth
     * @return {number}
     */
    const sum = (nestedList, k) => {
        let res = 0
        for (let i = 0; i < nestedList.length; i++) {
            if (nestedList[i].isInteger()) {
                res += nestedList[i].getInteger() * (depth - k)
            } else {
                res += sum(nestedList[i].getList(), k + 1)
            }
        }
        return res
    }
    const depth = getMaxDepth(nestedList)
    return sum(nestedList, 0)
}
