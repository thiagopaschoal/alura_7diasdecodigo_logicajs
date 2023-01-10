const somar = (numeroUm, numeroDois) => numeroUm + numeroDois
const subtrair = (numeroUm, numeroDois) => numeroUm - numeroDois
const multiplicar = (numeroUm, numeroDois) => numeroUm * numeroDois
const dividir = (numeroUm, numeroDois) => numeroUm / numeroDois

while (true) {

    const numeroUm = prompt("digite o primeiro valor: ")
    const numeroDois = prompt("digite o segundo valor: ")
    const operacao = prompt("Operações disponíveis: soma, subtração, multiplicação, divisão, e sair")

    if (operacao === "sair") {
        alert("Até a próxima.")
        break;
    }

    let resultado = 0;
    switch (operacao) {
        case "soma":
            resultado = somar(numeroUm, numeroDois);
            break;
        case "subtração":
            resultado = subtrair(numeroUm, numeroDois);
            break
        case "multiplicação":
            resultado = multiplicar(numeroUm, numeroDois);
            break
        case "divisão":
            resultado = dividir(numeroUm, numeroDois);
            break
        default:
            alert("operador inválido")
    }

    alert("resultado: " + resultado)
}