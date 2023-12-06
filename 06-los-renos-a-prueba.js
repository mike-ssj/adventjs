const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

function maxDistance(movements) {
    let distance = 0;
    let comodines = 0;
    movements.split('').forEach(move => {
        switch (move) {
            case '>':
                distance += 1
                break;

            case '<':
                distance -= 1
                break;

            case '*':
                comodines += 1
                break;
        }
    });
    if (Math.abs(distance + comodines) > Math.abs(distance - comodines)) {
        distance = Math.abs(distance + comodines)
    }else{
        distance = Math.abs(distance - comodines)
    }
    return distance

}