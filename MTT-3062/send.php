<?php

    $mailSubject = "Feedback";

    $receive = isset($_POST['receive']) ? 'On' : 'Off';
    $baby = isset($_POST['baby']) ? 'On' : 'Off';
    $woman = isset($_POST['woman']) ? 'On' : 'Off';
    $personal = isset($_POST['personal']) ? 'On' : 'Off';
    $detergency = isset($_POST['detergency']) ? 'On' : 'Off';
    $petcare = isset($_POST['petcare']) ? 'On' : 'Off';
    $car = isset($_POST['car']) ? 'On' : 'Off';
    $flushable = isset($_POST['flushable']) ? 'On' : 'Off';
    $insect = isset($_POST['insect']) ? 'On' : 'Off';

    if((isset($_POST['society'])) && (isset($_POST['contact_name'])) && (isset($_POST['phone'])) && (isset($_POST['email'])))  {

        $to = 'gitawsme@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Feedback'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$mailSubject.'</title>
                    </head>
                    <body>
                        <div style="text-align: center;">
                            <table border="1px" cellpadding="5px" style="margin-bottom: 5px;">
                                <tr><td colspan="8" align="center">Client Info</td></tr>
                                <tr bgcolor="silver">
                                    <td>Subscribe Status</td>
                                    <td>Society</td>
                                    <td>Contact Name</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                </tr>
                                <tr>
                                    <td>'. $receive .'</td>
                                    <td>'. $_POST['society'] .'</td>
                                    <td>'. $_POST['contact_name'] .'</td>
                                    <td>'. $_POST['phone'] .'</td>
                                    <td>'. $_POST['email'] .'</td>
                                </tr>
                            </table>
                            <table border="1px" cellpadding="5px">
                                <tr><td colspan="8" align="center">Checked Boxes</td></tr>
                                <tr bgcolor="silver">
                                    <td>baby</td>
                                    <td>woman</td>
                                    <td>personal</td>
                                    <td>detergency</td>
                                    <td>petcare</td>
                                    <td>car</td>
                                    <td>flushable</td>
                                    <td>insect</td>
                                </tr>
                                <tr>
                                    <td>'. $baby .'</td>
                                    <td>'. $woman .'</td>
                                    <td>'. $personal .'</td>
                                    <td>'. $detergency .'</td>
                                    <td>'. $petcare .'</td>
                                    <td>'. $car .'</td>
                                    <td>'. $flushable .'</td>
                                    <td>'. $insect .'</td>
                                </tr>
                            </table>
                        </div>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: <site@stenago.com>\r\n"; //Наименование и почта отправителя
        //mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo $message;
    }
    //var_dump(mail($to, $subject, $message, $headers));
?>