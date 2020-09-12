/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const lcaDeepestLeaves = function(root) {
    const getLowestCommonAncestor = (root, depth) => {
        if (!root) {
            return depth
        }
        const left = getLowestCommonAncestor(root.left, depth + 1)
        const right = getLowestCommonAncestor(root.right, depth + 1)
        depth = Math.max(left, right)
        if (left === right && depth >= maxDepth) {
            res = root
            maxDepth = depth
        }
        return depth
    }
    let res = null
    let maxDepth = 0
    getLowestCommonAncestor(root, 0)
    return res
}
