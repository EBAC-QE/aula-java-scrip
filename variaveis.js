//var nome = "Fábio" //Var é uma forma antiga no Java script

let nome = "Fábio" //Let é a forma atual do Javascript de definir uma variável
let idade = 45
let profissao = "QA"
const nacionalidade = "Brasileira"
console.log(nome, idade, profissao)

nome = "Fábio Araújo"
idade = 46
//nacionalidade = "Americana" // Este trecho retorna erro, pois a constante não pode ser alterada

// Concatenação 
console.log("------------------")
console.log("Nome: " + nome + ", " + idade + ", Teste")

//Interpolação
console.log("------------------")
console.log(`Nome: ${nome}, Idade: ${idade}, Teste, Horário: ${new Date().toLocaleTimeString()}`)

//Strings com aspas simples, duplas e backeticks (crases)
const stringSimples = 'Eu sou o "Fábio"'
const stringDuplas = "Eu sou o 'Fábio Araújo'"
const stringBacketicks = `Eu sou o "Fábio" 'Araújo da Silva'`
const stringEscape = "Eu sou o \"Fábio Araújo\""

document.getElementById('variaveis').innerHTML = `
Nome: ${nome} <br>
Idade: ${idade} <br>
Profissão: ${profissao} <br>
Nacionalidade: ${nacionalidade} <br>
Horário: ${new Date().toLocaleTimeString()} <br>
Mensagem com strings: ${stringEscape}
`