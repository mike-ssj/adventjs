console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]

function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let optimized = []
    let currentIntv = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const intv = intervals[i];
        if (currentIntv[1] >= intv[0]) {
            currentIntv[1] = Math.max(currentIntv[1], intv[1])
        } else {
            optimized.push(currentIntv)
            currentIntv = intv
        }
    }
    optimized.push(currentIntv)
    return optimized
}