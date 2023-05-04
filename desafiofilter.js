// Filtrar apenas os números pares e divisíveis por 5.

const list = [20,3,234,12,17,541,6,87,275,1000];

const newList = list.filter ( number => {
 if (number % 2 === 0 && number % 5 === 0) return true

})
console.log (newList)