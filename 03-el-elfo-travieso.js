let original = 'abcd'
let modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

 original = 'stepfor'
 modified = 'stepor'
console.log(findNaughtyStep(original, modified)) // 'f'

original = 'abcde'
modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // ''

original = 'xxxx'
modified = 'xxoxx'
console.log(findNaughtyStep(original, modified)) // ''

function findNaughtyStep(original, modified){
    
    let longest = (original.length > modified.length)? original : modified 
    for (let i = 0; i < longest.length; i++) {
        if (original[i]!=modified[i]) return longest[i]        
    }
    return ''
} 