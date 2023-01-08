const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos você tem?")
const linguagemDeProgramacao = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`)

const opcaoEscolhida = prompt(`Você gosta de estudar ${linguagemDeProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (opcaoEscolhida == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (opcaoEscolhida == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} else {
    alert("Opção inválida!!!")
}