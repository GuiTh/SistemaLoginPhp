<?php
    require("conexao.php");

    if(isset($_POST["nome"]) && isset($_POST["senha"]) && $conexao != null){
        $query = $conexao->prepare("SELECT * FROM usuario WHERE nome = ? AND senha = ?");
        $query->execute(array($_POST["nome"], $_POST["senha"]));
        if($query->rowCount()){
            $user = $query->fetchAll(PDO::FETCH_ASSOC)[0];

            session_start();
            $_SESSION["usuario"] = array($user["nome"], $user["adm"]);

            echo json_encode(array("erro" =>0));
        }else{
            echo json_encode(array('erro'=> 1,"mensagem" =>"Email e/ou senha incorretos."));
        }
    }else{
        echo json_encode(array('erro'=> 1,"mensagem" =>"Ocorreu um erro interno."));
    }
?>