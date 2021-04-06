<?php
ini_set('display_errors', 1);
error_reporting( E_ALL );
$to = "smolyakin1993@gmail.com";
$phone = $_POST['phone'];
$name = $_POST['name'];
$extra = $_POST['extra'];
$product = $_POST['product'];
$subject = 'Новая заявка';
$page = 'Новая заявка';
$message = '
<html>
<body>
<center>	
<table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
 <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Заявка</b></td></tr>
 <tr>
  <td><b>Тема</b></td>
  <td>Заявка на продукт '.$product.', от '.$name.', '.$phone.'</td>
 </tr>
 <tr>
  <td><b>Имя покупателя</b></td>
  <td>'.$name.'</td>
 </tr>
 <tr>
 <td><b>Телефон</b></td>
 <td>'.$phone.'</td>
 </tr>
 <tr>
 <td><b>Продукт</b></td>
 <td>'.$product.'</td>
 </tr>
 <tr>
 <td><b>Дополнительно</b></td>
 <td>'.$extra.'</td>
 </tr>
</table>
</center>	
</body>
</html>'; 
$headers  = "Content-type: text/html; charset=utf-8\r\n";
if ($phone != '' && $name != '') {
$result = mail($to, $subject, $message, $headers);
} else {
    echo 'Ошибка! product: '.$product.' name: '.$name.' phone: '.$phone;
}
if ($result) {
	echo 'Сообщение успешно отправлено!';
} else {
	echo 'Сообщение не отправлено!';
}
?>