const texto = "Olá"
const numero = 12
const booleano = true// false - 0 ou 1
const array = ["azul", "amarelo", "branco"]
const objeto = { nome: 'Fábio', cidade: 'São Paulo'}
let valorIndefinido
let valorNulo = null 

document.getElementById('tipos').innerHTML = `
Texto: ${texto} <br>
Número: ${numero} <br>
Booleano: ${booleano} <br>
Array: ${array} <br>
Objeto nome: ${objeto.nome} <br>
Objeto cidade: ${objeto.cidade} <br>
`

console.log(typeof texto)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof array)
console.log(typeof objeto)
console.log(typeof valorIndefinido)
console.log(typeof valorNulo)