// oar nome/valor
const saudacao = "Opa"


function exec() {
    const saudacao = "Fala"
    return saudacao
}

// Objetos sao grupos aninhados de parte nome/valor

const cliente = {
    nome: "Joao",
    idade: 21,
    peso: 130,
    endereco: {
        logradouro: "CNB 13",
        numero: 305
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)