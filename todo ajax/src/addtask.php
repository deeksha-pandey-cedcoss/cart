<?php
session_start();
include_once "config.php";
print_r($_POST['d']);
   
array_push($_SESSION['task'], $_POST['d']);
print_r($_SESSION['task']);




    
//session_destroy();
?>

