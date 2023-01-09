const frutas = []
const laticinios = []
const doces = []
const congelados = []

const menu = () => {
    const opcao = prompt("se você deseja adicionar ou remover uma comida na sua lista de compras!! (adicionar) ou (sair)")
    if (opcao !== "adicionar" || opcao !== "sair") {
        return opcao;
    } else {
        alert("opção inválida!!!")
        menu()
    }
}

const adicionarItem = () => {
    const comida = prompt("qual comida vc deseja inserir?")
    const categoria = prompt("qual categoria essa comida se encaixa? (frutas), (laticinios), (doces) ou (congelados)")
    switch (categoria) {
        case "frutas":
            frutas.push(comida)
            break
        case "laticinios":
            laticinios.push(comida)
            break
        case "doces":
            doces.push(comida)
            break
        case "congelados":
            congelados.push(comida)
            break
        default:
            alert("Essa categoria não foi pré-definida.")
    }
}

while (true) {
    const opcao = menu()
    if (opcao === "adicionar") {
        adicionarItem()
    } else {
        break;
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);