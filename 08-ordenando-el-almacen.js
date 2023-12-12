const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)

*/

function organizeGifts(gifts) {
    let output=''

    while ((matches = gifts.match(/[a-zA-Z]/))) {
        let letter = matches[0];
        let allGifts = gifts.slice(0, gifts.indexOf(letter))
    
        let boxesNumber = Math.floor(allGifts / 10)
        let palletsNumber = Math.floor(boxesNumber / 5)

        boxesNumber = boxesNumber - (palletsNumber * 5)
        let packedGifts = (palletsNumber * 5 + boxesNumber) * 10
        let bagsNumber = allGifts - packedGifts

        let boxes = (`{`+letter+`}`).repeat(boxesNumber)
        let pallets = (`[`+letter+`]`).repeat(palletsNumber)
        let bags = bagsNumber>0?`(`+letter.repeat(bagsNumber) + `)`:''
        output += pallets + boxes + bags

        gifts = gifts.substring(gifts.indexOf(letter) + 1);
    }

    return output
}