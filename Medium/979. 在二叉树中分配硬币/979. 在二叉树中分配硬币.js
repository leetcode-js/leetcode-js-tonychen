/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const distributeCoins = function(root) {
    const distribute = (root) => {
        if (!root) {
            return 0
        }
        const left = distribute(root.left)
        const right = distribute(root.right)
        res += Math.abs(left) + Math.abs(right)
        return root.val + left + right - 1
    }
    let res = 0
    distribute(root)
    return res
}
