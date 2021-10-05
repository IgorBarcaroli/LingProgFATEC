function exe1() {
    let vet = []
    let par = []
    let impar = []
    for (let i = 0; i < 6; i++) {
        vet[i] = Number(prompt(`Insira o ${i + 1}° número: `))
    }
    for (let i = 0; i < 6; i++) {
        if (vet[i]%2 == 0) {
            par.push(vet[i])
        }
        else {
            impar.push(vet[i])
        }
    }
    console.log(`Todos os números pares: ${par}`)
    console.log(`Quantidade de números pares: ${par.lenght}`)
    console.log(`Todos os números ímpares: ${impar}`)
    console.log(`Quantidade de números ímpares: ${impar.lenght}`)
}

function exe2() {
    let vet = []
    let mult2 = []
    let mult3 = []
    let mult2e3 = []
    for (let i = 0; i < 7; i++) {
        vet[i] = Number(prompt(`Insira o ${i + 1}° número: `))
    }
    for (let i = 0; i < 7; i++) {
        if (vet[i]%2 == 0 && vet[i]%3 == 0) {
            mult2e3.push(vet[i])
        }
        if (vet[i]%2 == 0) {
            mult2.push(vet[i])
        }
        if (vet[i]%3 == 0) {
            mult3.push(vet[i])
        }
    }
    console.log(`Múltiplos de 2: ${mult2}`)
    console.log(`Múltiplos de 3: ${mult3}`)
    console.log(`Múltiplos de 2 e 3: ${mult2e3}`)
}

function exe3() {
    let codigoProd = []
    let totalProd = []
    for (let i = 0; i < 10; i++) {
        codigoProd[i] = Number(prompt(`Insira o código do produto: `))
        totalProd[i] = Number(prompt(`Insira o total de unidades desse produto em estoque: `))
    }
    let cliente = Number(prompt(`Informe o código do cliente: `))
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto á ser comprado: `))
        let achou = false
        for (let i = 0; i < 10; i++) {
            if (codigoCompra == codigoProd[i]) {
                achou = true
                let qtdeCompra = Number(prompt(`Informe a quantidade da compra: `))
                if (totalProd[i] - qtdeCompra >= 0) {
                    totalProd[i] = totalProd[i] - qtdeCompra
                    
                }
                else {
                    alert(`Quantidade insuficiente.`)
                }
            }
        }
        if (!achou) {
            alert(`Produto não existente.`)
        }
        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar: `))
    }
    while (cliente != 0)
    alert(`Estoque atualizado: ${totalProd}`)
}

