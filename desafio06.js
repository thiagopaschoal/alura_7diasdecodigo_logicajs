let frutas = []
let laticinios = []
let doces = []
let congelados = []

const menu = () => {
    const opcao = prompt("se você deseja adicionar ou remover uma comida na sua lista de compras!! (adicionar), (remover) ou (sair)")
    if (opcao !== "adicionar" || opcao !== "remover") {
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

const removerItem = () => {
    const itemASerRemovido = prompt(`Qual deste itens vc deseja remover?\n Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
    if (frutas.includes(itemASerRemovido)) {
        frutas = frutas.splice(frutas.indexOf(itemASerRemovido))
    } else if (laticinios.includes(itemASerRemovido)) {
        laticinios = laticinios.splice(laticinios.indexOf(itemASerRemovido))
    } else if (doces.includes(itemASerRemovido)) {
        doces = doces.splice(doces.indexOf(itemASerRemovido))
    } else if (congelados.includes(itemASerRemovido)) {
        congelados = congelados.splice(congelados.indexOf(itemASerRemovido))
    } else {
        alert("Não foi possível encontrar o item dentro da lista!")
    }
}

while (true) {
    const opcao = menu()
    if (opcao === "adicionar") {
        adicionarItem()
    } else if (opcao === "remover") {
        removerItem()
    } else {
        break;
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);