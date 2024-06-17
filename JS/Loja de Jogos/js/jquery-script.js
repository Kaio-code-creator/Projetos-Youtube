//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#form-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });
});