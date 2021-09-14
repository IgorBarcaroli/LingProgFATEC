function exe1(){
    // recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >=7){
        document.getElementById("resultado").innerHTML = `A média é ${media}, está aprovado.`
    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media}, está reprovado.`
    }
}

function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let media = (nota1 + nota2) / 2
    if (media <3){
        document.getElementById("resultado").innerHTML = `Média ${media} = Reprovado`
    }
    else if (media >=3 && media <7){
        document.getElementById("resultado").innerHTML = `Média ${media} = Exame`
    }
    else {
        document.getElementById("resultado").innerHTML = `Média ${media} = Aprovado`
    }
}
function exe3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    if (num1 > num2){
        document.getElementById("resultado").innerHTML = `O menor número é o ${num2}`
    }
    else if (num1 < num2){
        document.getElementById("resultado").innerHTML = `O menor número é o ${num1}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Os números são iguais!`
    }
}
function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    if (num1 == num2 && num2 == num3) {
        document.getElementById("resultado").innerHTML = `Os números são iguais!`
    }
    else if (num1 > num2 && num1 > num3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${num1}`
    }
    else if (num2 > num3) {
        document.getElementById("resultado").innerHTML = `O maior número é o ${num2}`
    }
    else {
        document.getElementById("resultado").innerHTML = `O maior número é o ${num3}`
    }
}
function exe5(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let op = Number(document.getElementById("op").value)
    if (op == 1) {
        document.getElementById("resultado").innerHTML = `Média entre os números digitados: ${(num1 + num2) /2}`
    }
    else if (op == 2) {
        if (num1 > num2) {
            document.getElementById("resultado").innerHTML = `Diferença do maior pelo menor: ${(num1 - num2)}`
        }
        else if(num1 < num2) {
            document.getElementById("resultado").innerHTML = `Diferença do maior pelo menor: ${(num2 - num1)}`
        }
    }
    else if (op == 3) {
        document.getElementById("resultado").innerHTML = `Produto entre os números digitados: ${(num1 * num2)}`
    }
    else if (op == 4) {
        if (num2 == 0){
            document.getElementById("resultado").innerHTML = `Impossível dividir por zero!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Divisão do primeiro pelo segundo: ${(num1 / num2)}` 
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Erro - Operador inválido!`
    }
}
function exe6(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let op = String(document.getElementById("op").value)
    if (op == "a" || op == "A") {
        document.getElementById("resultado").innerHTML = `O primeiro número elevado pelo segundo: ${Math.pow(num1,num2)}`   
    }
    else if (op == "b" || op == "B") {
        document.getElementById("resultado").innerHTML = `Raíz quadrada de cada um dos números: ${Math.sqrt(num1)} e ${Math.sqrt(num2)}`
    }
    else if (op == "c" || op == "C") {
        document.getElementById("resultado").innerHTML = `Raíz cúbica de cada um dos números: ${Math.cbrt(num1)} e ${Math.cbrt(num2)}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Erro - Operador Inválido!`
    }
}
function exe7(){
    let salario = Number(document.getElementById("salario").value)
    if (salario < 500) {
        if (salario < 1) {
            document.getElementById("resultado").innerHTML = `Valor inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Novo salário (+30%): ${salario + (salario * 0.3)}`
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Seu salário excede o valor de R$499,99; logo, não houve reajuste.`
    }
}
function exe8(){
    let salario = Number(document.getElementById("salario").value)
    if (salario <= 300) {
        if (salario < 1) {
            document.getElementById("resultado").innerHTML = `Valor inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Novo salário (+35%): ${salario + (salario * 0.35)}`
        }
    }
    else {
        document.getElementById("resultado").innerHTML = `Novo salário (+15%): ${salario + (salario * 0.15)}`
    }
}
function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    if (saldo <= 200) {
        if (saldo < 0) {
            document.getElementById("resultado").innerHTML = `Valor Inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (10%): ${saldo * 0.1}`
        }
    }
    else if (saldo > 200 && saldo <= 300) {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (20%): ${saldo * 0.2}`
    }
    else if (saldo > 300 && saldo <= 400) {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (25%): ${saldo * 0.25}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Saldo Médio: ${saldo}; Valor do Crédito Especial (30%): ${saldo * 0.3}`
    }
}
function exe10 (){
    let fabrica = Number(document.getElementById("fabrica").value)
    if (fabrica <= 12000) {
        if (fabrica < 1) {
            document.getElementById("resultado").innerHTML = `Valor Inválido!`
        }
        else {
            document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fabrica + (fabrica * 0.05)}`
        }
    }
    else if (fabrica > 12000 && fabrica <= 25000) {
        document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fabrica + (fabrica * 0.1) + (fabrica * 0.15)}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Preço ao Consumidor: ${fabrica + (fabrica * 0.15) + (fabrica * 0.2)}`
    }
}