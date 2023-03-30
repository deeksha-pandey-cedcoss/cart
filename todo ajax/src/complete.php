<?php
session_start();
include_once "config.php";

$val=$_POST['id'];
// print_r($val);
$temp=array();
array_push($temp,$val);

 array_splice($_SESSION['task'],$val,1);
 array_push($_SESSION['completed'],$temp);

echo ($temp);
include "completedtask.php";
//print_r($temp);
?>