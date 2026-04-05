<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    
    echo json_encode([
        "status" => "success",
        "message" => "Hi $name, your message has been received!"
    ]);
}
?>