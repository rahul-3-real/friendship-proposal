<?php

$db_host = 'localhost';
$db_name = 'friendship';
$db_user = 'root';
$db_pass = '';

// Create a connection
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// Insert Data
$response = $_POST['response'];
$sql = "INSERT INTO `response`(`response-option`) VALUES ('$response')";

mysqli_query($conn, $sql);

mysqli_close($conn);