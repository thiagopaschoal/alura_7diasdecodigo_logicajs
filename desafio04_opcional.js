const minimo = 0
const maximo = 10

const segredo = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
let totalDeTentativas = 3

while (totalDeTentativas > 0) {
    const numeroDigitado = prompt("chute um numero: ")
    if (numeroDigitado == segredo) {
        break
    } else if (numeroDigitado > segredo) {
        alert(`o numero que vc digitou é maior que o segredo!! vc tem mais ${totalDeTentativas} tentativas`)   
    } else {
        alert(`o numero que vc digitou é menor que o segredo!! vc tem mais ${totalDeTentativas} tentativas`)
    }
    totalDeTentativas--;
}

if (totalDeTentativas == 0) {
    alert(`infelizmente vc errou!! o segredo era ${segredo}`)
} else {
    alert("parabenss vc acertou!!!")
}
