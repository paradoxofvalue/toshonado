<?php
header('Content-Type: application/json');
header("HTTP/1.1 200 OK");

if(isset($_POST) && isset($_POST['name']) && isset($_POST['phone'])) {
  sendEmail($_POST['name'], $_POST['phone'], $_POST['message']);
} else {
  echo json_encode(['status' => 'Error', 'message' => 'Please specify required arguments']);
}

function sendEmail($name, $phone, $message) {
  $body = 'Имя клиента: ' . $name . '.<br>' . 'Телефон клиента: ' . $phone . '.<br>' . 'Сообщение клиента:<br>' . $message;
  if(mail('toshonado.kha@gmail.com', 'ToShoNado - заявка', $body)) {
    echo json_encode(['status' => 'Error', 'message' => 'Сообщение не отправлено. Попробуйте позже.']);
  } else {
    echo json_encode(['status' => 'Success', 'message' => 'Сообщение успешно отправлено']);
  }
  
  return 0;

  require './PHPMailer-master/PHPMailerAutoload.php';

  $mail = new PHPMailer;
  
  $mail->SMTPDebug = 3;                               // Enable verbose debug output
  
  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'kallie.kolab.ceo@gmail.com';                 // SMTP username
  $mail->Password = 'nftnjotkccajgyfo';                           // SMTP password
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                    // TCP port to connect to
  $mail->CharSet = 'UTF-8';
  $mail->setFrom('undefined@email.com', 'ToShoNado - website');
  // $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
  $mail->addAddress('lavorchukvadim@gmail.com');               // Name is optional
  // $mail->addReplyTo('info@example.com', 'Information');
  // $mail->addCC('cc@example.com');
  // $mail->addBCC('bcc@example.com');
  
  // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
  // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
  $mail->isHTML(true);                                  // Set email format to HTML
  
  $mail->Subject = 'ToShoNado - заявка';
  $mail->Body = 'Имя клиента: ' . $name . '.<br>' . 'Телефон клиента: ' . $phone . '.<br>' . 'Сообщение клиента:<br>' . $message;
  
  if(!$mail->send()) {
    echo json_encode(['status' => 'Error', 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
  } else {
    echo json_encode(['status' => 'Success', 'message' => 'Message has been sent']);
  }
}
?>