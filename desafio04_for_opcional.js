const minimo = 0
const maximo = 10

const segredo = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

let acertou = false

for (let i = 3; i > 0; i--) {
    const numeroDigitado = prompt("chute um numero: ")
    if (numeroDigitado == segredo) {
        acertou = true
        break
    } else if (numeroDigitado > segredo) {
        alert(`o numero que vc digitou é maior que o segredo!! vc tem mais ${i} tentativas`)
    } else {
        alert(`o numero que vc digitou é menor que o segredo!! vc tem mais ${i} tentativas`)
    }
}

if (!acertou) {
    alert(`infelizmente vc errou!! o segredo era ${segredo}`)
} else {
    alert("parabenss vc acertou!!!")
}
