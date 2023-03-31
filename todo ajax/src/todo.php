<html>
    <head>
        <title>TODO List</title>
        <link href="./CSS/style.css" type="text/css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    </head>
    <body>
        <div class="container">
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <p>
                <input id="new-task" type="text">
                <button  name="add" onclick="addtask()"  >Add</button>
                <button class='edit' onclick="update()" >UPDATE </button>
                <p id="message"></p>
                <!-- onclick=addtask() -->
            </p>
    
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                <!-- <li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
                <li><input type="checkbox"><label>Go Shopping</label><input type="text" value="Go Shopping"><button class="edit">Edit</button><button class="delete">Delete</button></li> -->
            </ul>
    
            <h3>Completed</h3>
            <ul id="completed-tasks">
                <!-- <li><input id="checkmate"type="checkbox" checked><label>See the Doctor</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li> -->
            </ul>
        </div>
    
    </body>
    <script src="./js/main.js"></script>
</html>