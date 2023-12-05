const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result.length, result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
function cyberReindeer(road, time) {
    let output = [road]

    for (let i = 0; i < (time-1); i++) {
        
        let newRoad = output[output.length - 1].split('')
        let sIndex = newRoad.indexOf('S')
        
        if (i === 4) {
            newRoad = newRoad.join('').replace(/["|"]/g, '*').split('')
        }

        if (newRoad[sIndex + 1] != '|') { // avanza el trineo
            newRoad[sIndex] = road.split('')[sIndex] === '|' ? '*' : '.'
            newRoad[sIndex + 1] = 'S'
        }

        output.push(newRoad.join(''))

    }
    return output
}