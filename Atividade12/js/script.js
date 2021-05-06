function validarDados() 
{    
    var formulario = document.forms.formulario;

    if(formulario.elements.idNome.value.length < 10)
    {
        alert("O nome deve ter mais que 10 caractéres");
        formulario.elements.idNome.focus;
        return;
    }
    if(!validateEmail(formulario.elements.idEmail.value))
    {
        alert("E-mail inválido. Verifique e tente novamente.");
        formulario.elements.idEmail.focus;
        return;
    }
    if(formulario.elements.opcoespesquisa.value == "Sim")
    {
        alert("Que bom que você voltou a visitar a página!");
    }
    else
    {
        alert("Volte sempre à esta página!")
    }
    

}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}