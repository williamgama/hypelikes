<?php

header("Content-type: text/html; charset=utf-8");

$destino = 'william@hypelikes.com';
$assunto = 'Briefing - Criação de Marca';
$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$cidade = $_POST["cidade"];
$como = $_POST["como"];

$serv = $_POST["serv"];
$empresa = $_POST["empresa"];
$segmento = $_POST["segmento"];
$falesobre = $_POST["falesobre"];
$objetivos = $_POST["objetivos"];
$servicos = $_POST["servicos"];
$clientes = $_POST["clientes"];
$prefer = $_POST["prefer"];
$imagem = $_POST["imagem"];
$maisinfo = $_POST["maisinfo"];

$headers = "From: $nome" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$resposta = mail("$destino", "$assunto - $empresa", "

Nome: $nome

Email: $email
Telefone: $telefone
Cidade: $cidade
Como chegou até o nosso Estúdio: $como

Marca para: $serv

Nome da empresa: $empresa

Segmento da empresa: $segmento

Sobre a empresa: $falesobre

Objetivo com esse projeto: $objetivos

Produtos/Serviços que a empresa comercializa: $servicos

Perfil dos clientes da empresa: $clientes

Preferências de estilos: $prefer

Imagem que deseja passar através deste projeto: $imagem

Informações adcionais: $maisinfo" , "$headers");


if ($resposta == 1){

echo "<script>

alert('O seu Briefing foi enviado com sucesso. Entraremos em contato o mais breve possível.');

window.location.href = 'http://www.hypelikes.com';

</script>";

}else{

echo "<script>alert('Não foi possível enviar a mensagem, tente novamente mais tarde.');history.go(-1) </script>";

}

?>