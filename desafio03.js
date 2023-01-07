const areaDaTecnologia = prompt("Qual área da tecnologia deseja seguir? Frontend ou Backend")
const isFrontend = areaDaTecnologia.toLowerCase === "frontend"
const isBackend = areaDaTecnologia.toLowerCase === "backend"

let tecnologia
let tecnologiaEscolhida

if (isFrontend || isBackend) {
    alert("vc só pode escolher frontend ou backend!!")
} else {
    if (isFrontend) {
        tecnologia = prompt("Deseja aprender React ou Vue?")        
    } else {
        tecnologia = prompt("Deseja aprender C# ou Java?") 
    }    
}

const fullstack = prompt("Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?")

alert(`Quero seguir na área de ${areaDaTecnologia}. ${tecnologiaEscolhida}. ${fullstack}`)

let outrasTecnologias = [];
while(true) {

    const outraTecnologia = prompt("quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.")
    outrasTecnologias.push(outraTecnologia)

    const desejaContinuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim digite 'ok' caso contrário digite 'sair'")

    if (desejaContinuar === "sair") {
        alert("Obrigadoo por jogar!!")
        break
    }

    alert("excelentee escolha")

}

alert(`tecnologias que quero aprender, além de ${tecnologia}: ${outrasTecnologias}`)