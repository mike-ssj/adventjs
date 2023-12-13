console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])) // '-05:29:00'

function calculateTime(deliveries) {
    function formatNum(n) {
        return n < 10 ? `0${n}` : `${n}`;
    }
    const total = deliveries.reduce((total, time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number)
        return total + hours * 3600 + minutes * 60 + seconds
    }, 0)

    const prefijo = total < 25200 ? '-' : ''
    const seconds = formatNum(Math.abs(25200 - total) % 60)
    const minutes = formatNum(Math.floor(Math.abs(25200 - total) / 60) % 60)
    const hours = formatNum(Math.floor(Math.abs(25200 - total) / 3600))
    return `${prefijo}${hours}:${minutes}:${seconds}`
}
