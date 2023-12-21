console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s
console.log(findBalancedSegment([1, 0, 1]))
// 0, 1

console.log(findBalancedSegment([1, 1, 0]))
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no hay segmentos equilibrados: []


function findBalancedSegment(message) {
    let right = 0;
    let left = -1;

    for (let le = 0; le < message.length; le++) {
        let count = 0;

        for (let ri = le; ri < message.length; ri++) {
            count += message[ri] === 0 ? -1 : 1;

            if (count === 0 && (ri - le + 1) > right) {
                right = ri - le + 1;
                left = le;
            }
        }
    }

    return left !== -1 ? [left, left + right - 1] : [];
}