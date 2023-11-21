console.log("01)", "1" == 1)   // Igual
console.log("02)", "1" === 1)  // Estritamente igual, comparando uma string com number
console.log("03)", "3" != 3)   // Diferente
console.log("04)", "3" !== 3)  // Estritamente Diferente

console.log("05)", 3 < 2)      // Menor
console.log("06)", 3 > 2)      // Maior
console.log("07)", 3 <= 2)     // Menor Igual
console.log("08)", 3 >= 2)     // Maior Igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime())

console.log("12)", undefined == null)
console.log("13)", undefined === null)