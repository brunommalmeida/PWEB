function GerarRandomico()
{
    let opcaoComputador = Math.floor(Math.random() * 3) + 1;

    document.getElementById("OpcaoComputador").innerHTML = opcaoComputador;
    statusBotao = true;
}

function Jogar()
{
    let opcaoComputador = Math.floor(Math.random() * 3) + 1;
    let opcaoHumano = parseInt(document.getElementById("OpcaoHumano").value);

    if(opcaoHumano === opcaoComputador)
    {
        alert("Empate! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
        document.getElementById("OpcaoHumano").value = "";
        document.getElementById("OpcaoHumano").focus();
        return;
    }

    if(opcaoHumano === 1)
    {
        if(opcaoComputador === 3)
        {
            alert("Você venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;

        }
        if(opcaoComputador === 2)
        {
            alert("O computador venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;
        }
    }
    else if (opcaoHumano === 2)
    {
        if(opcaoComputador === 3)
        {
            alert("O computador venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;

        }
        if(opcaoComputador === 1)
        {
            alert("Você venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;

        }
    }
    else if (opcaoHumano === 3)
    {
        if(opcaoComputador === 1)
        {
            alert("O computador venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;

        }
        if(opcaoComputador === 2)
        {
            alert("Você venceu! Pois o computador selecionou " + DescricaoLancado(opcaoComputador) + " e você selecionou " + DescricaoLancado(opcaoHumano));
            document.getElementById("OpcaoHumano").value = "";
            document.getElementById("OpcaoHumano").focus();
            return;

        } 
    }
    else
    {
        alert("O valor a ser digitado deve ser entre 1 e 3. Corrija o lançamento e tente novamente");
        document.getElementById("OpcaoHumano").value = "";
        document.getElementById("OpcaoHumano").focus();
        return;
    }
        
}

function DescricaoLancado(numero)
{
    if(numero === 1)
    {
        return "Pedra";
    }
    else if(numero === 2)
    {
        return "Papel";
    }
    else if(numero === 3)
    {
        return "Tesoura";
    }
}