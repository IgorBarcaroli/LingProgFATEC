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

function exe4() {
    let vetor = new Array(15)
    let vetorR = []
    for (i = 0; i < 15; i++) {
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i + 1}`)) 
        if (vetor[i] == 30) {
            vetorR.push(i)
        }
    }
    alert(`As posições contendo elementos iguais a 30 são: ${vetorR}`)
}

function exe5() {
    let logica = new Array(15)
    let lingprog = new Array(10)
    let interseccao = []
    for (let i = 0; i < 15; i++) {
        logica[i] = Number(prompt(`Insira o código de matrícula do aluno de Lógica: `))
    }
    for (let i = 0; i < 10; i++) {
        lingprog[i] = Number(prompt(`Insira o código de matrícula do aluno de Linguagem de Programação: `))
    }
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 10; j++) {
            if (logica[i] == lingprog[j]) {
                interseccao.push(logica[i])
            }
        }
    }
    alert(`Códigos de matrícula dos alunos que cursam ambas disciplinas: ${interseccao}`)
}

function exe6() {
    let vendedor = new Array(10)
    let comissao = new Array(10)
    let vendas = new Array(10)
    let receber = []

    for (let i=0; i<10; i++) {
        vendedor[i] = String(prompt(`Insira o nome do ${i+1}° vendedor: `))
        vendas[i] = Number(prompt(`Insira o total das vendas deste vendedor: `))
        comissao[i] = Number(prompt(`Insira o valor decimal da porcentagem da comissão deste vendedor: `))
        receber[i] = vendas[i] * (comissao[i] / 100)
    }
    let totalVendas = 0
    for (let i=0; i<10; i++) {
        alert(`Nome do vendedor: ${vendedor[i]}, total á receber: ${receber[i]}`)
        totalVendas = totalVendas + vendas[i]
    }
    let menorValor = 100000; let maiorValor = 0; let nomeMenor = ""; let nomeMaior = ""
    for (let i=0; i<10; i++) {
        if (receber[i] < menorValor) {
            menorValor = receber[i]
            nomeMenor = vendedor[i]
        }
        if (receber[i] > maiorValor) {
            maiorValor = receber[i]
            nomeMaior = vendedor[i]
        }
    }
    alert(`Total das vendas: ${totalVendas}`)
    alert(`O maior valor a receber é ${maiorValor}, do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menorValor}, do vendedor ${nomeMenor}`)
}

function exe7() {
    let vet = new Array(10)
    let qttNegativo = 0; let somaPositivo = 0

    for (let i = 0; i < 10; i++) {
        vet[i] = Number(prompt(`Insira o ${i + 1}° número real: `))
    }
    for (let i = 0; i < 10; i++) {
        if (vet[i] < 0) {
            qttNegativo++
        }
        else if (vet[i] > 0) {
            somaPositivo = somaPositivo + vet[i]
        }
    }
    alert (`Quantidade de número negativos: ${qttNegativo}\nSoma dos números positivos: ${somaPositivo}`)
}

function exe8() {
    let alunos = new Array(7)
    let medias = new Array(7)
    let maiorMedia = 0
    let nomeMaior = ""
    for (let i = 0; i < 7; i++) {
        alunos[i] = String(prompt(`Insira o nome do ${i + 1}° aluno: `))
        medias[i] = Number(prompt(`Insira a média final desse aluno: `))
        if (medias[i] > maiorMedia) {
            maiorMedia = medias[i]
            nomeMaior = alunos[i]
        }
        if (medias[i] < 7) {
            alert(`Para ser aprovado, o aluno ${alunos[i]} precisa tirar ${10 - medias[i]}`)
        }
    }
    alert(`Nome do aluno com maior média: ${nomeMaior} (${maiorMedia})`)
}

function exe9() {
    let nomeProd = new Array(10)
    let codProd = new Array(10)
    let precoProd = new Array(10)
    let novoPreco = new Array(10)
    let msg = "Produtos com novo preço:"
    for (let i = 0; i < 10; i++) {
        nomeProd[i] = String(prompt(`Insira o nome do ${i + 1}° produto: `))
        codProd[i] = Number(prompt(`Insira o código deste produto: `))
        precoProd[i] = Number(prompt(`Insira o preço deste produto: `))
        if (codProd[i] %2 == 0 && precoProd[i] > 1000) {
            novoPreco[i] = (precoProd[i] * (20/100)) + precoProd[i]
        }
        else if (codProd[i] %2 == 0) {
            novoPreco[i] = (precoProd[i] * (15/100)) + precoProd[i]
        }
        else if (precoProd[i] > 1000) {
            novoPreco[i] = (precoProd[i] * (10/100)) + precoProd[i]
        }
        if (novoPreco[i]) {
            msg+=(`\nNome: ${nomeProd[i]} | Código: ${codProd[i]} | Preço original: ${precoProd[i]} | Novo preço: ${novoPreco[i]}`)
        }
    }
    alert(msg)
}