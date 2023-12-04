const a = decode('hola (odnum)')
console.log(a) // hola mundo

const sa = decode('hol(d(un)m a)o')
console.log(sa) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

function decode(message) {
    const rex = /\(([\w\s]+)\)/
    while (message.match(rex) != null) {
        const textoInvertido = message.match(rex)[1];
        const textoLegible = textoInvertido.split('').reverse().join('')
        message = message.replace('('+textoInvertido+')', textoLegible)
    }
    
    return message
}