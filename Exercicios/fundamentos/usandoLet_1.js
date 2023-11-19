var numero = 1  // var tem escopo global e funcao
{
    let numero = 2 // let tem escopo global, funcao e bloco
    console.log("Dentro=", numero)
}
console.log("Fora=", numero)