<?php
session_start();
include_once "config.php";
 include "addtask.php";
 $str="";
 $i=0;
echo $str;
foreach($_SESSION['task'] as $key=>$value)
{
  

    $str .= "<li><input type='checkbox' id=$i onclick='incompletetask(this.id)'><label>$value</label><input type='text'>
    <button class='edit' id=$i onclick='edittask(this.id)' >Edit</button>
    <button class='delete'id=$i onclick='deletetask(this.id)'>Delete</button></li>";
    $i++;
   
   
    
}
 echo ($str);


?>