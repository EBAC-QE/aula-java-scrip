function gerarEmail() {
    return `teste_${Date.now()}@gmail.com`
}
console.log(gerarEmail())

function gerarEmailComPrefixo(prefixo) {
    return `${prefixo}_${Date.now()}@gmail.com`
}
console.log(gerarEmailComPrefixo('fabio'))

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(numeroAleatorio(1, 100000000))

function numeroAleatorioFixo() {
    return Math.floor(Math.random() * 100000000) 
}

function gerarEmailAleatorio() {
    return `teste_${numeroAleatorioFixo()}@gmail.com`
}
console.log(gerarEmailAleatorio())

