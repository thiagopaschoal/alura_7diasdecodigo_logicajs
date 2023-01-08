const opcao_um = "digite (1) se deseja seguir se especializando na área escolhida"
const opcao_dois = "digite (2) se deseja seguir se desenvolvendo para se tornar Fullstack?"

const areaDaTecnologia = prompt("Qual área da tecnologia deseja seguir? Frontend ou Backend")
const isFrontend = areaDaTecnologia.toLowerCase === "frontend"
const isBackend = areaDaTecnologia.toLowerCase === "backend"

let tecnologia = ""
let tecnologiaEscolhida = ""

if (isFrontend || isBackend) {
    alert("vc só pode escolher frontend ou backend!!")
} else {
    tecnologia = isFrontend ? prompt("Deseja aprender React ou Vue?") : prompt("Deseja aprender C# ou Java?")
}

const fullstack = prompt(`Como deseja seguir? ${opcao_um} ou ${opcao_dois}`)
const comoDesejaSeguir = fullstack == 1 ? "seguir se especializando na área escolhida" : "seguir me desenvolvendo para me tornar Fullstack"

alert(`Quero seguir na área de ${areaDaTecnologia} aprendendo ${tecnologiaEscolhida} e quero ${comoDesejaSeguir}`)

let outrasTecnologias = [];

while (true) {

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