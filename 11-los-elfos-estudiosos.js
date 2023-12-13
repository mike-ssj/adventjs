console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null

function getIndexsForPalindrome(word) {
    if (word.split('').reverse().join('') === word) {
        return []
    }

    for (const i in word) {
        for (const j in word) {
            let newWord = word.split('');
            [newWord[i], newWord[j]] = [newWord[j], newWord[i]];
            newWord = newWord.join('');

            if (newWord.split('').reverse().join('') == newWord) {
                return [+i, +j]
            }
        }
    }
    return null
}