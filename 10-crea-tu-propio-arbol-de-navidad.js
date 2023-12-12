console.log(createChristmasTree([1, 2, 3], 4));
console.log(createChristmasTree(['*', '@', 'o'], 3));

function createChristmasTree(ornaments, height) {
    let output = []
    let orni = 0

    for (let i = 1; i <= height; i++) {
        let orns = []
        for (let j = 1; j <= i; j++) {
            orns.push(ornaments[orni])
            orni = orni === ornaments.length - 1 ? 0 : orni + 1
        } 
        output.push(' '.repeat(height - i) + orns.join(' '))

    }

    output.push(' '.repeat(height - 1) + '|'+'\n')
    
    return output.join('\n')
}
