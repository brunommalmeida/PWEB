function media()
{
    let aluno = document.getElementById("nome").value;
    let notaUm = parseFloat(document.getElementById("nota1").value);
    let notaDois = parseFloat(document.getElementById("nota2").value);
    let notaTres = parseFloat(document.getElementById("nota3").value);
    let media = (notaUm + notaDois + notaTres) / 3;
    alert("A média do aluno " + aluno + " é igual a " +  media);
}
