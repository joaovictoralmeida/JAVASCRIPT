// Funcão se retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}


imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 1, 7, 9)
imprimirSoma()


//Funcão com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,  3))
console.log(soma(2))
console.log(soma())