<?php
    $toEmail  = "info@stenago.com";
    $subject  = "Feedback from Your site";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: <site@stenago.com>\r\n"; //Наименование и почта отправителя
    $userReceive = '';
    $userMessage = '';
    $interestedList = '';

    if(isset($_POST['userCheckedList'])) {
        $interestedList = $_POST['userCheckedList'];
    } else {
        $interestedList = 'Nothing';
    }

    if( isset($_POST['userReceive']) ) {
        $userReceive = 'I <b>want</b> receive Messages';
    } else {
        $userReceive = 'I <b>dont want</b> receive Messages';
    }

    $messageText = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p style="font-size: 16px; color: black;">
                    <i>
                        <b>Receive: </b> '. $userReceive .'<br>
                        <b>Society: </b> '. $_POST['userSociety'] .'<br>
                        <b>Name:    </b> '. $_POST['userName'] .'<br>
                        <b>Email:   </b> '. $_POST['userEmail'] .'<br>
                        <b>Phone:   </b> '. $_POST['userPhone'] .'<br>
                        <b>Message: </b> '. $_POST['userMessage'] .'<br>
                    </i>
                </p>
                <p style="font-size: 14px;">
                    Im interesting in: <b>'; 
                    foreach ($interestedList as $key => $value) {
                        $messageText .= $value . ", ";
                    };
                    $messageText .= '</b>
                </p>
            </body>
        </html>';

    if(mail($toEmail, $subject, $messageText, $headers)) {
        print "<p class='success' style='color: green'>Mail Sent.</p>";
    } else {
        print "<p class='Error' style='color: red'>Problem in Sending Mail.</p>";
    }
?>