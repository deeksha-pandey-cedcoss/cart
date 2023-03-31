$(document).ready(function(){
 
  

});


function  incomplete_to_complete(id) {
            //alert("Checkbox is clicked");
        $newid=id;
       // console.log(id);
       flag=true;
        $.ajax({
            method:"POST",
            url:"complete.php",
            data:"d="+$newid,

        }).done(function(result){
            $("#completed-tasks").html(result);
            //displaycompleted(result);
           // console.log(result);
           deletetask(id);
        })
}
displaytodo();
function addtask()
{
    $input=$("#new-task").val();
   
    if($input!="")
    {
        $('#message').html("");
        $.ajax({
            method:"POST",
            url:"addtask.php",
            data:"d="+$input,
            datatype:"text"
        }).done(function(result){
            displaytodo(result);
           
        });
      
    }
    else{
         $('#message').html('<div class="alert alert-danger">Enter Task Details</div>');
}
}

function deletetask(id)
{
  
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
let global=0;
function edittask(id)
{
   
    global = id; 
    $.ajax({
        method:"POST",
        url:"edit.php",
        datatype:"text",
        data:"d="+id,
        success:function(data)
        {
            
           $("#new-task").val(data);

           //console.log(data);
        }
    });
    
}

function displaytodo()
{
    $('#message').html('');
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




function update()
{
    
    $new=$("#new-task").val();

    $.ajax({
        method:"POST",
        url:"update.php",
        data:{"d":$new,"globalid":global},
        success:function(result)
        {
            displaytodo(result);
          
        }
    })
}

function displaycompleted()
{
    
    $.ajax({
        method:"POST",
        url:"displaycompleted.php",
        datatype:"text",
        
        success:function(data)
        { 
            console.log(data);
           // $("#completed-tasks").html(data);
            
        }
    });
}