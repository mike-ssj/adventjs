const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
  console.log(distributeGifts(input));
  
  // Resultado paso a paso de los primeros cálculos:
  
  // En la posición [0][0] tenemos el valor 4
  // Sus vecinos son los valores 5 y 6
  // (4 + 5 + 6) / 3 = 5
  
  // En la posición [0][1] tenemos el valor 5
  // Sus vecinos son los valores 4 y 1
  // (5 + 4 + 1) / 3 = 3.33
  // Math.round(3.33) = 3
  
  // En la posición [0][2] tenemos el valor 1
  // Sus vecinos son los valores 5 y 3
  // (1 + 5 + 3) / 3 = 3
  
  // En la posición [1][0] tenemos el valor 6
  // Sus vecinos son los valores 4, 8
  // (6 + 4 + 8 ) / 3 = 6
  
  // En la posición [1][1] tenemos el valor null
  // Sus vecinos son los valores 5, 6 y 3
  // (5 + 6 + 3) / 3 = 4.66
  // Math.round(4.66) = 5
  // ... y así con el resto de posiciones
/*
  [
    [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
    [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
    [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
  ]
  */
  // Resultado final tras redondear con Math.round()
 /* [
    [5, 3, 3],
    [6, 5, 3],
    [7, 6, 4]
  ]
*/

  function distributeGifts(weights) {

    let result = [];

    for (let i = 0; i < weights.length; i++) {
        result[i] = [];
        for (let j = 0; j < weights[i].length; j++) {
            let sum = 0;
            let count = 0;
            const positions = [
                [i, j],
                [i, j - 1],
                [i, j + 1],
                [i - 1, j],
                [i + 1, j]
            ];
            for (let k = 0; k < positions.length; k++) {
                const [x, y] = positions[k];
                if (weights[x] !== undefined && 
                    weights[x][y] !== undefined && 
                    weights[x][y] !== null) {
                        
                    sum += weights[x][y];
                    count++;
                }
            }
            result[i][j] = Math.round(sum / count);
        }
    }
    return result;
}