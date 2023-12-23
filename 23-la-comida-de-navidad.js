const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]
  
  console.log(organizeChristmasDinner(dishes))
  
  /*
  
  "sauce" está en 2 platos: "christmas turkey" y "pizza".
  "sugar" está en 2 platos: "cake" y "hot chocolate".
  El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.
  
  Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
  Y los platos de cada ingrediente también están ordenados alfabéticamente.
  
  [
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
  ]
  */

function organizeChristmasDinner(dishes) {
    let arr = {}
    let output = []
  
    dishes.forEach(dish => {
      dish.forEach(ingredient => {
        if (arr[ingredient]) {
          arr[ingredient].push(dish[0])
        } else {
          arr[ingredient] = [dish[0]]
        }
      })
    })
  
    const arrSorted = Object.keys(arr).sort()
    
    arrSorted.forEach(ingredient => {
      if (arr[ingredient].length > 1) {
        output.push([ingredient, ...arr[ingredient].sort()])
      }
    })
  
    return output
  }