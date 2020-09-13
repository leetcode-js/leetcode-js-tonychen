// 给出 字符串 text 和 字符串列表 words, 返回所有的索引对 [i, j] 使得在索引对范围内的子字符串 text[i]...text[j]（包括 i 和 j）属于字符串列表 words。

//  

// 示例 1:

// 输入: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
// 输出: [[3,7],[9,13],[10,17]]
// 示例 2:

// 输入: text = "ababa", words = ["aba","ab"]
// 输出: [[0,1],[0,2],[2,3],[2,4]]
// 解释: 
// 注意，返回的配对可以有交叉，比如，"aba" 既在 [0,2] 中也在 [2,4] 中
//  

// 提示:

// 所有字符串都只包含小写字母。
// 保证 words 中的字符串无重复。
// 1 <= text.length <= 100
// 1 <= words.length <= 20
// 1 <= words[i].length <= 50
// 按序返回索引对 [i,j]（即，按照索引对的第一个索引进行排序，当第一个索引对相同时按照第二个索引对排序）。

function TrieNode () {
    this.next = {}
    this.isEnd = false
}

function Trie () {
    this.root = new TrieNode()
}

/**
 * 向 Trie 中插入 word
 * @param {string} word 
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (!word) {
        return
    }
    let { root } = this
    for (let i = 0; i < word.length; i++) {
        if (!root.next[word[i]]) {
            root.next[word[i]] = new TrieNode()
        }
        root = root.next[word[i]]
    }
    root.isEnd = true
}

/**
 * 查找 trie 中是否存在单词 word
 * @param {string} word 
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const isMatch = (root, index) => {
        if (index === word.length) {
            return root.isEnd
        }
        if (root.next[word[index]]) {
            return isMatch(root.next[word[index]], index + 1)
        }
        return false
    }
    return isMatch(this.root, 0)
}

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function(text, words) {
    const res = []
    const trie = new Trie()
    // 首先将 word 插入到 trie 中
    words.forEach((word) => trie.insert(word))
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j <= text.length; j++) {
            if (trie.search(text.substring(i, j))) {
                res.push([i, j - 1])
            }
        }
    }
    return res
}