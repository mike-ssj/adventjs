let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)) // []

function manufacture(gifts, materials) {
    let newGifts = []

    gifts.forEach(gift => {
        newGifts.push(gift)

        for (let i = 0; i < gift.length; i++) {
            if (!materials.includes(gift[i])) {
                newGifts.pop()
                break
            }
        }    
    });
    return newGifts
    
}