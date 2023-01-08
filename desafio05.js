const listaDeCompras = [
    {
        categoria: "frutas",
        items: []
    },
    {
        categoria: "laticinios",
        items: []
    }
]

while (true) {
    const desejaAdicionarItensAoCarrinho = prompt("se você deseja adicionar uma comida na sua lista de compras!! (sim) ou (não)")
    if (desejaAdicionarItensAoCarrinho === "sim") {
        const comida = prompt("qual comida vc deseja inserir?")
        const categoria = prompt("qual categoria essa comida se encaixa?")
        const existeCategoria = listaDeCompras.filter(lista => lista.categoria === categoria).length > 0;
        if (existeCategoria) {
            listaDeCompras.filter(lista => lista.categoria === categoria).map(lista => lista.items.push(comida))
        } else {
            const obj = { categoria, items: [comida] }
            listaDeCompras.push(obj)
        }
    } else {
        break
    }
}

alert(JSON.stringify(listaDeCompras))