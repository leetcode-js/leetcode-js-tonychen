/**
 * @param {number[][]} grid
 * @return {number}
 */
const numDistinctIslands2 = function(grid) {
    /**
     * 比较当前岛屿坐标与之前所有独立岛屿坐标的异同
     * @param {Set} cache
     * @param {Map} currCoordinates
     */
    const compareIslands = (cache, currCoordinates) => {
        if (!cache.size) {
            cache.add(currCoordinates)
            return
        }
        for (const coordinates of cache) {

        }
    }
    /**
     * 找出独立的岛屿
     * @param {number} i
     * @param {number} j
     */
    const findDistinctIsland = (i, j) => {
        // 如果越界了就结束
        if (i < 0 || i >= row || j < 0 || j >= col) {
            return
        }
        // 如果遇到 0 也结束
        if (grid[i][j] === 0) {
            return
        }

        const key = `${i}-${j}`
        coordinates.set(key, true)
        grid[i][j] = 0
        for (let k = 0; k < dirs.length; k++) {
            const [ x, y ] = dirs[k]
            findDistinctIsland(i + x, j + y)
        }
    }

    if (!grid.length) {
        return 0
    }
    const row = grid.length
    const col = grid[0].length
    // 上下左右四个方向
    const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
    // 用来存储所有唯一形状的岛屿
    const cache = new Set()
    // 当前岛屿的坐标集合
    let coordinates = new Map()

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                coordinates = new Map()
                findDistinctIsland(i, j)
                compareIslands(cache, coordinates)
            }
        }
    }
    return cache.size
}
