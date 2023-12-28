const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2

function travelDistance(map){
    const mapa = map.split('\n').map(row => row.split(''));
    const positions = [];
    let santaP = [];

    mapa.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell === 'S') {
                santaP = [i, j];
            } else if (cell !== '.') {
                positions[+cell - 1] = [i, j];
            }
        });
    });

    let distance = 0;
    positions.forEach(position => {
        const [y, x] = position;
        
        const yDistance = Math.abs(y - santaP[0]);
        const xDistance = Math.abs(x - santaP[1]);
        distance += yDistance + xDistance;

        santaP = position;
    });

    return distance;
}