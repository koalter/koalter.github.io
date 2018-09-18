<?php
    $to = 'lorenzo.cea.ko@gmail.com';
    $from = $_POST['mail'];
    $phone = $_POST['telefono'];
    $message = $_POST['mensaje'];
    $subject = "Nuevo mensaje: de la web";
    $headers = "From: $email";
    $body = "Has recibido un nuevo mensaje! \n Teléfono: $phone \n Email: $from \n Mensaje: $message";

    mail($to,$subject,$body,$headers);
    echo 'Su mensaje ha sido recibido. Muchas gracias!'
?>