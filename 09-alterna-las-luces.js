console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)

console.log(adjustLights(['🟢', '🟢', '🟢', '🟢', '🔴', '🟢', '🟢', '🟢', '🟢',]))
// -> 4
console.log(adjustLights(['🟢', '🟢', '🟢', '🔴', '🟢', '🟢', '🟢',]))
// -> 2


function adjustLights(lights) {
    let alternedArray = Array.from({ length: lights.length },
        (_, i) => ['🟢', '🔴'][i % 2]);
    let counter1 = 0
    let counter2 = 0

    for (const i in lights) {
        if (alternedArray[i] === lights[i]) {
            counter1++
        } else {
            counter2++
        }
    }
    
    return counter1 > counter2 ? counter2 : counter1
}