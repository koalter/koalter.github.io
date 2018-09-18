<?php
$name = $_POST['nombre'];
$age = $_POST['edad'];
$email = $_POST['email'];
$message = $_POST['consulta'];
$estado = $_POST['estadoCivil'];
$to = 'heavens_drive090@hotmail.com';
$email_subject = "Nuevo mensaje: de la web";
$email_body = "Has recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje o consulta: \n $message \n";
$headers = "From: $email";
mail($to, $email_subject, $email_body, $headers);
echo 'Pronto nos estaremos comunicando con usted!'
?>