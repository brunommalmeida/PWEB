function Maior(n1, n2, n3) 
{
    let numeroUm = parseFloat(document.getElementById(n1).value);
    let numeroDois = parseFloat(document.getElementById(n2).value);
    let numeroTres =parseFloat(document.getElementById(n3).value);
    if(isNaN(numeroUm))
    {
        alert("O primeiro número está em branco. Preencha e tente novamente.")
        return;
    }

    if(isNaN(numeroDois))
    {
        alert("O segundo número está em branco. Preencha e tente novamente.")
        return;
    }
    if(isNaN(numeroTres))
    {
        alert("O terceiro número está em branco. Preencha e tente novamente.")
        return;
    }

    if(numeroUm > numeroDois && numeroUm > numeroTres)
    {
        alert("O maior número é o " + numeroUm);
        document.getElementById(n1).value = "";
        document.getElementById(n2).value = "";
        document.getElementById(n3).value = "";
        document.getElementById(n1).focus();
        return;
    }
    else if (numeroDois > numeroTres)
    {
        alert("O maior número é o " + numeroDois);
        document.getElementById(n1).value = "";
        document.getElementById(n2).value = "";
        document.getElementById(n3).value = "";
        document.getElementById(n1).focus();
        return;
    }
    else
    {
        alert("O maior número é o " + numeroTres);
        document.getElementById(n1).value = "";
        document.getElementById(n2).value = "";
        document.getElementById(n3).value = "";
        document.getElementById(n1).focus();
        return;
    }

    



}