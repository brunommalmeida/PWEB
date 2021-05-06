var checadoMaiusculo = false;
var checadoMinusculo = false;
function Maiusculo()
{
    var t = document.getElementById("palavra").value;
    if(checadoMaiusculo)
    {
        checadoMaiusculo = false;
        document.getElementById("palavra").value = t.toLowerCase();
    }
    else
    {
        checadoMaiusculo = true;
    
        document.getElementById("palavra").value = t.toUpperCase();
    }
    
}

function Minusculo()
{
    var t = document.getElementById("palavra").value;
    if(checadoMinusculo)
    {
        checadoMinusculo = false;
        document.getElementById("palavra").value = t.toUpperCase();
    }
    else
    {
        checadoMinusculo = true;
    
        document.getElementById("palavra").value = t.toLowerCase();
    }
    
}