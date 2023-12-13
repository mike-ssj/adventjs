console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta cl#us is comin#'
)) // true
console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'p#nt: cla#s #s c+min#'
)) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')) //true


function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) return false;

    for (let i = 0; i < original.length; i++) {
        const p = ['#', '+', ':', '.', ' ',
            original[i].toLowerCase(), original[i]];

        if (!p.includes(copy[i])
            || (original[i] === ' ' && copy[i] !== ' ')) {
            return false;
        }
    }

    return true;
}