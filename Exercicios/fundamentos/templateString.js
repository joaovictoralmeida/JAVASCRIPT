const nome = "João"

const concatenacao = "Olá " + nome + "!"
const template = `\nOlá ${nome}!` // Obrigatorio o uso de crase(`) nessa concatenação, e é possivel usar quebra de linhas

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)