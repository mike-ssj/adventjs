console.log(drawClock('01:30').join('\n'))
console.log('-----------------');
console.log(drawClock('12:30').join('\n'))
console.log('-----------------');
console.log(drawClock('23:30').join('\n'))

function drawClock(time) {

    const aNum = [
/* 0 */ ['***', '* *', '* *', '* *', '* *', '* *', '***'],
/* 1 */ ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
/* 2 */ ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
/* 3 */ ['***', '  *', '  *', '***', '  *', '  *', '***'],
/* 4 */ ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
/* 5 */ ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
/* 6 */ ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
/* 7 */ ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
/* 8 */ ['***', '* *', '* *', '***', '* *', '* *', '***'],
/* 9 */ ['***', '* *', '* *', '***', '  *', '  *', '***']
    ]

    const aClock = [
        ['   '],
        ['   '],
        [' * '],
        ['   '],
        [' * '],
        ['   '],
        ['   '], 
    ]

    const [hours, minutes] = time.split(':').map(Number)
    const hTens = Math.floor(hours / 10)
    const hUnits = hours % 10
    const mTens = Math.floor(minutes / 10)
    const mUnits = minutes % 10

    let clock = []

    for (let i = 0; i < 7; i++) {
        const hours = aNum[hTens][i] + ' ' + aNum[hUnits][i]
        const minutes = aNum[mTens][i] + ' ' + aNum[mUnits][i]
        const line =  hours + aClock[i] + minutes
        clock.push(line.split(''))
    }

    return clock
}