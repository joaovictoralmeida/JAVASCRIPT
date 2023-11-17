const valores = [7.7, 8.9, 5.3, 9.1]
console.log(valores[0], valores[3])
console.log(valores[4]) // ira retornar um valor undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste") // push -> adiciona itens ao array
console.log(valores)

console.log(valores.pop()) // pop -> retira o último atributo do array
delete valores[0] // delete -> deleta o atributo de indice 0 
console.log(valores)

console.log(typeof valores)

