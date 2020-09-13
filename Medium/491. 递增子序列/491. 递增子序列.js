/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function(nums) {
    const getAllSubsequences = (arr, index) => {
        if (arr.length >= 2) {
            res.add(arr.join(','))
        }
        for (let i = index; i < nums.length; i++) {
            if (!arr.length || nums[i] >= arr[arr.length - 1]) {
                getAllSubsequences([...arr, nums[i]], i + 1)
            }
        }
    }
    const res = new Set()
    getAllSubsequences([], 0)
    return [...res].map((words) => words.split(',').map((word) => parseInt(word)))
}

console.log(findSubsequences([4, 6, 7, 7]))
