function AbrirJanela()
{
	document.getElementById("janela").innerHTML = `<img class ="imagem" src="images/janelaaberta.png" onmouseout="FecharJanela()" onclick="QuebrarJanela()"/>`;
}
function FecharJanela()
{
    document.getElementById("janela").innerHTML = `<img class ="imagem" src="images/janelafechada.png" onmouseover="AbrirJanela()" onclick="QuebrarJanela()"/>`;
}
function QuebrarJanela()
{
    document.getElementById("janela").innerHTML = `<img class ="imagem" src="images/janelaquebra.png" />`;
}
function RestaurarDiv()
{
    document.getElementById("janela").innerHTML = `<img class ="imagem" src="images/janelafechada.png" onmouseover="AbrirJanela()" onclick="QuebrarJanela()"/>`;
}