/**
 * @param {string} expression
 * @return {string}
 */
const parseTernary = function(expression) {
    const isBoolean = (bool) => typeof bool === 'boolean'
    const isNum = (num) => /\d/.test(num)

    if (!expression) {
        return ''
    }
    const ops = []
    const map = { T: true, F: false }
    let i = expression.length - 1
    while (i >= 0) {
        const word = expression.charAt(i)
        if (isBoolean(map[word]) && expression.charAt(i + 1) === '?') {
            const first = ops.pop()
            const second = ops.pop()
            if (map[word]) {
                ops.push(first)
            } else {
                ops.push(second)
            }
        } else if (isBoolean(map[word]) || isNum(word)) {
            ops.push(word)
        }
        i--
    }
    return ops[0]
}

parseTernary('T?2:3')
parseTernary('F?1:T?4:5')
parseTernary('T?T?F:5:3')
