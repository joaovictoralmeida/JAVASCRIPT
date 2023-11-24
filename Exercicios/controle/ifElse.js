const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}!!!`)
    } else {
        console.log(`Reprovado!!!`)
    }
}

imprimirResultado(5.9)
imprimirResultado(8.4)
imprimirResultado("Epa") // Cuidado!!!