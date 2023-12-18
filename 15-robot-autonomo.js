const store = ['..!....',
    '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
);
//console.log(result)

function autonomousDrive(store, movements) {
    let inicio = [];

    for (let i = 0; i < store.length; i++) {
        if (store[i].indexOf('!') > 0) {
            inicio.push(+i)
            inicio.push(store[i].indexOf('!'))
        }
    }
    if (inicio.length === 0) {
        return store
    }

    let actPos = [...inicio]

    for (const movement of movements) {
        let newPos = [...actPos]
        if (movement === 'R') {
            newPos[1] += 1
        } else if (movement === 'L') {
            newPos[1] -= 1
        } else if (movement === 'U') {
            newPos[0] -= 1
        } else if (movement === 'D') {
            newPos[0] += 1
        }
        if (newPos[0] >= 0 && newPos[0] < store.length &&
            newPos[1] >= 0 && newPos[1] < store[0].length &&
            store[newPos[0]][newPos[1]] !== '*') {
            actPos = newPos
        }
    }

    store[inicio[0]] = store[inicio[0]].replace('!', '.')

    store[actPos[0]] = store[actPos[0]].substring(0, actPos[1])
     + '!' + store[actPos[0]].substring(actPos[1] + 1)
     
    return store
}