const segredo = 8;
let totalDeTentativas = 3

while (totalDeTentativas > 0) {
    const numeroDigitado = prompt("chute um numero: ")
    if (numeroDigitado == segredo) {
        break
    } else if (numeroDigitado > segredo) {
        alert("o numero que vc digitou é maior que o segredo")   
    } else {
        alert("o numero que vc digitou é menor que o segredo")
    }
    totalDeTentativas--;
}

if (totalDeTentativas == 0) {
    alert(`infelizmente vc errou!! o segredo era ${segredo}`)
} else {
    alert("parabenss vc acertou!!!")
}
