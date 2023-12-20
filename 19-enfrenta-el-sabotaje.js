const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

function revealSabotage(store) {
    const rows = store.length;
    const cols = store[0].length;

    for (let rowi = 0; rowi < rows; rowi++) {
        for (let coli = 0; coli < cols; coli++) {
            if (store[rowi][coli] === '*') {
                const positions = [
                    [rowi, coli - 1], [rowi, coli + 1],
                    [rowi - 1, coli], [rowi + 1, coli],
                    [rowi - 1, coli - 1], [rowi - 1, coli + 1],
                    [rowi + 1, coli - 1], [rowi + 1, coli + 1],
                ];

                for (const [r, c] of positions) {
                    if (store[r] && store[r][c] && store[r][c] !== '*') {
                        store[r][c] = (+store[r][c] + 1).toString();
                    }
                }
            }
        }
    }

    return store;
}