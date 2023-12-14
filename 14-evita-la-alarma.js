console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)

function maxGifts(houses) {
    let max = Array(houses.length).fill(0);

    max[0] = houses[0];
    max[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < houses.length; i++) {
        max[i] = Math.max(max[i - 1], (max[i - 2] + houses[i]));
    }

    return max[houses.length - 1];
}