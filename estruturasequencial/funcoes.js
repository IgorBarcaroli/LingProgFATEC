function exe1(){
  // recupera os dados do usuário
  // vamos converter o que o usuário digita, que é um texto, para um Número
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  // processamento
  let resultado = nro1 - nro2
  // mostra o resultado
  document.getElementById("resultado").innerHTML = resultado
}

function exe2(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let nro3 = Number(document.getElementById("nro3").value)
  let resultado = nro1 * nro2 * nro3
  document.getElementById("resultado").innerHTML = resultado
}

function exe3(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  if (nro2 == 0) {
    document.getElementById("resultado").innerHTML = "Impossível dividir por 0."
  }
  else {
    let resultado = nro1/nro2
    document.getElementById("resultado").innerHTML = resultado
  }
}

function exe4(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let resultado = ((nro1 * 2) + (nro2 * 3)) / 5
  document.getElementById("resultado").innerHTML = resultado

}

function exe5(){
  let nro1 = Number(document.getElementById("nro1").value)
  let resultado = nro1 - (nro1 * 0.1)
  document.getElementById("resultado").innerHTML = resultado
}

function exe6(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let resultado = nro1 + (nro2 * 0.04)
  document.getElementById("resultado").innerHTML = resultado
}
function exe7(){
  let nro1 = Number(document.getElementById("nro1").value)
  let resultado1 = nro1 + (nro1 * 0.15)
  let resultado2 = nro1 - (nro1 * 0.20)
  document.getElementById("resultado").innerHTML = `Caso o peso aumente em 15%: ${resultado1} ##### Caso o peso diminua em 20%: ${resultado2}`
}
function exe8(){
  let nro1 = Number(document.getElementById("nro1").value)
  let resultado = nro1 * 1000
  document.getElementById("resultado").innerHTML = `Convertido para Gramas: ${resultado}`
}
function exe9(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let nro3 = Number(document.getElementById("nro3").value)
  let resultado = ((nro2 + nro3) * nro1) / 2
  document.getElementById("resultado").innerHTML = `Área do trapézio: ${resultado}`
}
function exe10(){
  let nro1 = Number(document.getElementById("nro1").value)
  let resultado = nro1 * nro1
  document.getElementById("resultado").innerHTML = `Área do quadrado: ${resultado}`
}
function exe15(){
  let salario= Number(document.getElementById("salario").value)
  let conta1 = Number(document.getElementById("conta1").value)
  let conta2 = Number(document.getElementById("conta2").value)
  let multa1 = conta1 * 2/100
  let multa2 = conta2 * 2/100
  let resultado = salario - (conta1 + multa1) - (conta2 + multa2)
  document.getElementById("resultado").innerHTML = resultado
}
function exe20(){
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let resultado = (nro2 / Math.cos(nro1))
  document.getElementById("resultado").innerHTML = resultado
}
