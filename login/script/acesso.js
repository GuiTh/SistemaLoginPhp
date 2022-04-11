$(function(){
    $('button#btnEntrar').on("click", function(e){
      e.preventDefault();

      var campoNome = $('form#formularioLogin #nome').val();
      var campoSenha = $('form#formularioLogin #senha').val();


        if(campoNome.trim() == "" || campoSenha.trim() == ""){
            $('div#mensagem').html("Preencha todos os campos");
        }else{
      $.ajax({
            url: "acoes/login.php",
            type:"POST",
            data:{
                nome:campoNome,
                senha: campoSenha
            },
            success: function(retorno){
              retorno = JSON.parse(retorno);
              if(retorno['erro'] == 1){
                  $('div#mensagem').html(retorno['mensagem']);
              }else{
                  window.location = "dashboard.php"
              }
            },
            error:function(){
                $("div#mensagem").html('Ocorreu um erro durante a solicitação')
            }
      });
    }

    })
})