<?php
    $to = 'lorenzo.cea.ko@gmail.com';
    $name = $_POST['name'];
    $from = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = "[koalter.github.io] $name";
    $headers = "From: $from";
    $body = "Has recibido un nuevo mensaje! \n Nombre: $name \n Teléfono: $phone \n Email: $from \n Mensaje: $message";

    mail($to,$subject,$message,$headers);
    echo "Mensaje enviado!";
?>
