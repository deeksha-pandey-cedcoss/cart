<?php
session_start();
include_once "config.php";
print_r($_POST['data']);
   
    array_push($_SESSION['task'], $_POST['data']);





    // session_destroy();
?>

<!-- //print_r($_SESSION['task']); -->

<!-- // session_destroy(); -->

