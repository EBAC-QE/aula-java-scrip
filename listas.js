// Contador de 1 até 10
for (let i = 1; i <=10; i++) {
    console.log(i)
}

//Iteração de texto de uma lista
const cores = ["azul", "amarelo", "verde"]
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

// Somando valores de uma lista - ou de um array
const numeros = [2, 4, 5, 10, 20, 35, 45, 100]
let soma = 0 
for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}
console.log('Resultado da soma: ' + soma)

// Gerador de usuários fake
for (let i = 1; i <= 5; i++) {
    console.log(`Usuário Fake ${i}`)
}