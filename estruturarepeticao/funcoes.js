function exe0(){
    let soma = 0
    let preco 
    let contador = 1
    while (contador <= 10) {
        preco = Number(prompt("Insira o preço do produto : "))
        soma = soma + preco
        contador ++
    }
    alert (`A média de preço dos produtos é ${soma/10}`)
}

function exe1(){
    let a; let b; let c; let d; let z = Number;

    for (let grupo = 1; grupo <=5; grupo++) {
        a = Number(prompt(`Insira o valor de A do grupo ${grupo}: `))
        b = Number(prompt(`Insira o valor de B do grupo ${grupo}: `))
        c = Number(prompt(`Insira o valor de C do grupo ${grupo}: `))
        d = Number(prompt(`Insira o valor de D do grupo ${grupo}: `))

        for (let i = 1; i <= 3; i++) {     
            if (a > b) {
                z = a
                a = b
                b = z
            }

            if (b > c) {
                z = b
                b = c
                c = z
            }

            if (c > d) {
                z = c
                c = d
                d = z
            }
        }
        alert(`Ordem crescente do grupo ${grupo}:\n${a}, ${b}, ${c}, ${d}.\nOrdem decrescente do grupo ${grupo}: \n${d}, ${c}, ${b}, ${a}. `)
    }
}

function exe2(){
let preco = 5
let ingressos = 120
let texto = 'Preço   Ingressos   Despesas    Lucros\n'
    while (preco > 0) {
        let despesa = 200
        let lucro = (preco*ingressos-despesa)
        alert(texto)
        texto += `\n${preco.toFixed(2)}         ${ingressos}            ${despesa}         ${lucro}`
        ingressos += 26
        preco -= 0.5
    }
}

function exe3(){
    let idade
    let contador = 1
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0
    while (contador <= 8) {
        idade = Number(prompt(`Insira sua idade: (${contador})`))
        if (idade <= 15) {
            f1++
        }
        else if (idade <=30) {
            f2++
        }
        else if (idade <=45) {
            f3++
        }
        else if (idade <=60) {
            f4++
        }
        else {
            f5++
        }
        contador ++
    }
    alert(`Faixa 1: ${f1} Faixa 2: ${f2} Faixa 3: ${f3} Faixa 4: ${f4} Faixa 5: ${f5}`)
    alert(`Percentual da faixa 1: ${f1/8*100} Percentual da faixa 5: ${f5/8*100}`)
}

function exe6(){
    let codigov; let codigop
    let somav = 0
    let somap = 0
    let codigo
    let valor
    let contador = 1
    while (contador <=15) {
        codigo = String(prompt(`Insira o código V ou P:`))
        if (codigo == 'V' | codigo == 'v') {
            valor = Number(prompt(`Insira o valor da transação (${contador})`))
            somav = somav + valor
            contador++
        }
        else if (codigo == 'P' | codigo == 'p') {
            valor = Number(prompt(`Insira o valor da transação (${contador})`))
            somap = somap + valor
            contador++
        }
        else {
            alert(`Código Inválido!`)
        }
        
    }
    alert(`Valor total das compras á vista: ${somav}`)
    alert(`Valor total das compras á prazo: ${somap}`)
    alert(`Valor total das compras efetuadas: ${somav + somap}`)
    alert(`Valor das prestações de cada compra á prazo: ${somap/3}`)
}

function exe21(){
    let opcao
    let qtde1 = 0; let qtde2 = 0; let qtde3 = 0; let qtde4 = 0; let qtdeBranco = 0; let qtdeNulo = 0

    do {
        opcao = Number(prompt(`Informe: \n1. Cand1 \n2. Cand2 \n3. Cand3 \n4. Cand4 \n5. Nulo \n6. Branco \n0. Sair`))
        switch(opcao) {
            case 1: qtde1++; break
            case 2: qtde2++; break
            case 3: qtde3++; break
            case 4: qtde4++; break
            case 5: qtdeNulo++; break
            case 6: qtdeBranco++; break
            case 0: alert(`Encerrando as votações`); break
            default: alert(`Opção Inválida!`)
        }
    }
    while (opcao != 0)
    let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo
    alert(`Cand1: ${qtde1}\n Cand2: ${qtde2}\n Cand3: ${qtde3}\n Cand4: ${qtde4}\n Branco: ${qtdeBranco}\n Nulo: ${qtdeNulo}`)
    alert(`%Branco: ${qtdeBranco/total*100}%\n %Nulo: ${qtdeNulo/total*100}%`)
}

function exe23(){
    let opcao
    let salario
    do {
        opcao = Number(prompt(`Digite \n1. Novo Salário \n2. Férias \n3. Décimo Terceiro \n4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o Salário: `))
                let novoSalario
                if(salario < 210){
                    novoSalario = salario + (15*salario)/100
                }
                else if (salario <= 600) {
                    novoSalario = salario + (10*salario)/100
                }
                else {
                    novoSalario = salario + (5*salario)/100
                }
                alert(`O novo salário é de ${novoSalario}`)
                    break
            case 2: salario = Number(prompt(`Informe o salário: `))
                alert(`As férias serão ${salario + salario/3}`)
                    break
            case 3: salario = Number(prompt(`Informe o salário: `))
                let meses = Number(prompt(`Informe quantos meses foram trabalhados: `))
                    break
            case 4: alert(`O programa será encerrado.`)
                    break
            default: alert(`Opção Inválida!`)
        }  
    }
    while (opcao != 4)
}