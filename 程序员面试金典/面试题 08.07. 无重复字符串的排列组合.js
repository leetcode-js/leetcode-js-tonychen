/**
 * @param {string} S
 * @return {string[]}
 */
const permutation = function(S) {
    const getPermutation = (str) => {
        if (str.length === S.length) {
            return [str]
        }
        let res = []
        for (let i = 0; i < S.length; i++) {
            if (visited[i]) {
                continue
            }
            visited[i] = true
            res = res.concat(getPermutation(str + S.charAt(i)))
            visited[i] = false
        }
        return res
    }
    if (!S) {
        return []
    }
    const visited = new Array(S.length).fill(false)
    return getPermutation('')
}

console.log(permutation('ab'))
