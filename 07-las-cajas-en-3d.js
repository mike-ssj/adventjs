console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

function drawGift(size, symbol) {
    let defSymbol = '#'
    let output = ''
    let top = []
    let bottom = []

    for (let i = 1; i <= size; i++) {
        const espacios = ' '.repeat(size - i);
        let borde = '';
        if(i===1 || i===size){
            borde = defSymbol.repeat(size);
        }else{
            borde = defSymbol + symbol.repeat(size - 2) + defSymbol;
        }
        const cuadrado = espacios + borde;
        let fila = '';
        if (i === 1) {
            fila = cuadrado;
        } else {
            let numberOfRepeats = (i - 2 > 0) ? i - 2 : 0
            fila = cuadrado + symbol.repeat(numberOfRepeats) + defSymbol;
        }
        top.push(fila);
    }

    for (let i = size - 1; i > 0; i--) {
        let borde = '';
        if(i===1 || i===size){
            borde = defSymbol.repeat(size);
        }else{
            borde = defSymbol + symbol.repeat(size - 2) + defSymbol;
        }
        const cuadrado = borde;
        let fila = '';
        if (i === 1) {
            fila = cuadrado;
        }else{
            let numberOfRepeats = (i - 2 > 0) ? i - 2 : 0
            fila = cuadrado + symbol.repeat(numberOfRepeats) + defSymbol;
        }
        bottom.push(fila);
    }

    output = top.join('\n')
    output += '\n'
    output += bottom.join('\n')
    output += output.lastIndexOf('\n') === output.length - 1 ? '' : '\n'

    return output
}
