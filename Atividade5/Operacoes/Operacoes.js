function soma(){
    let numeroUm = parseFloat(document.getElementById("num1").value);
    let numeroDois = parseFloat(document.getElementById("num2").value);

    let soma = numeroUm + numeroDois

    alert("A soma é igual a " + soma);
}

function subtracao(){
    let numeroUm = parseFloat(document.getElementById("num1").value);
    let numeroDois = parseFloat(document.getElementById("num2").value);

    let subtracao = numeroUm - numeroDois

    alert("A subtração é igual a " + subtracao);
}

function produto(){
    let numeroUm = parseFloat(document.getElementById("num1").value);
    let numeroDois = parseFloat(document.getElementById("num2").value);

    let produto = numeroUm * numeroDois

    alert("O produto é igual a " + produto);
}

function divisao(ehResto){
    let numeroUm = parseFloat(document.getElementById("num1").value);
    let numeroDois = parseFloat(document.getElementById("num2").value);
    let divisao = 0;
    if(!ehResto){
        divisao = numeroUm / numeroDois;
        alert("O resultado da divisão é igual a " + divisao);
    }
    else{
        divisao = numeroUm % numeroDois;
        alert("O resultado do mod é igual a " + divisao);
    }
    


}