let elementoAltura = document.getElementById("altura");
let elementoPeso = document.getElementById("peso");
let peso = 0;
let altura = 0;

elementoAltura.addEventListener("keyup", function () {
    altura = Number(elementoAltura.value);
})

elementoPeso.addEventListener("keyup", function () {
    peso = Number(elementoPeso.value);
})

function calcular() {
  
    let imc = (peso / (altura * altura)).toFixed(2);
    let text = ""

    if (imc < 18.5) {
        text = " Cuidado! Você está abaixo do peso!😨"
    } else if (imc >= 18.5 && imc <= 25) {
        text = "Você está no peso ideal!😃"
    } else if (imc > 25 && imc <= 30) {
        text = " Cuidado! Você está com sobrepeso!😟"
    } else if (imc < 30 && imc <= 35) {
        text = " Cuidado! Você está com obsidade moderada!😟"
    } else if (imc > 35 && imc <= 40) {
        text = " Cuidado! Você está com obsidade severa!😨"
    } else if (imc > 40) {
        text = " Cuidado! Você está com obsidade morbida! 😨"
    }
    document.getElementById("text_area").innerText = text

}

function limpar() {
    document.querySelector("#peso").value = 0;
    document.querySelector("#altura").value = 0;
    document.querySelector("#text_area").value = "";

}