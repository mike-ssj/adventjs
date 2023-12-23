/*
+: Incrementa en 1 el valor del contador.
*: Multiplica por 2 el valor del contador.
-: Resta 1 al valor del contador.
%: Marca un punto de retorno. No modifica el contador.
<: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
?: Finaliza un bloque condicional.
Crea una función compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas. Aquí tienes algunos ejemplos:
*/
console.log(compile('++*-')) // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<')) // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--')) // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?')) // 3
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?')) // -2
// - 1 - 1 = -2

function compile(code) {
    let contador = 0;
    let lastLoopIndex = null;
    let arr = code.split('');

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '+':
                contador++;
                break;
            case '*':
                contador *= 2;
                break;
            case '-':
                contador--;
                break;
            case '%':
                lastLoopIndex = i;
                break;
            case '<':
                if (lastLoopIndex) {
                    arr[i] = '%';
                    i = lastLoopIndex;
                }
                break;
            case '¿':
                if (contador <= 0) {
                    i += arr.slice(i, arr.length).indexOf('?');
                }
                break;
        }
        
    }
    return contador;
}