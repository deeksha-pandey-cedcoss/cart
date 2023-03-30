$(document).ready(function(){
 
   
        



});
function addtask()
   {
    let input=document.getElementById("new-task").value;
       
    if($("#new-task").val()!='')
    {
        $('#message').html("");
        $.ajax({
            method:'POST',
            url:'addtask.php',
            data: "data="+ input,
            datatype:"text",
            success:function(data)
            {
                displaytodo(data);
                //alert(data);
               
            }
        });
    }
else{
    $('#message').html('<div class="alert alert-danger">Enter Task Details</div>');

}  
   }
function deletetask(id)
{
    event.preventDefault();
    console.log(id);
    $.ajax({
    method:"POST",
    url:"delete.php",
    datatype:"text",
    data:"d="+id,
    success:function(data)
{
   //console.log(data);
displaytodo(data);
}
});
}  

function edittask(id)
{
    event.preventDefault();
   
    $.ajax({
        method:"POST",
        url:"edit.php",
        datatype:"text",
        data:"d="+id,
        success:function(data)
        {
             console.log(data);
        }
    });
    
}

function displaytodo()
{
    event.preventDefault();
    $.ajax({
        method:"POST",
        url:"display.php",
        datatype:"text",
        
        success:function(data)
        { 
           
            $('#message').html('Task Details Added');
            $("#incomplete-tasks").html(data);
        }
    });
}


function incompletetask(id)
{
   
console.log(id);

$.ajax({
    method:"POST",
    url:"complete.php",
    datatype:"text",
    data:"d="+id,
    success:function(data)
    { 
    console.log(data);
       //$("#completed-tasks").html(data);
    }
});
}
function completedtask(id)
{
    $.ajax({
        method:"POST",
        url:"completedtask.php",
        datatype:"text",
        
        success:function(data)
        { 
            console.log(data);
            // $('#message').html('Task Details Added');
            // $("#completed-tasks").html(data);
            // displaytodo();
        }
    });
}