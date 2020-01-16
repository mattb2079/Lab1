var idNum = 0;

function createToDo(){
    // get the text
    var text2 = $("#txtText").val();
    // create an li
    var li = `<li id="li${idNum}">${text2}<button onclick=deleteItem("li${idNum}")>Done!</button> </li>`;
    idNum++;
    // add the li to the ul
    $("#pending").append(li);
    // clear the input field
    $("#txtText").val("");
    $("#txtText").focus();
}

// this is the function
function init(){

    // hook events
    $("#btnSave").click(createToDo);
    $("#txtText").keypress( function(e){
        //console.log(e);

        if(e.key == "Enter"){
            createToDo();
        }
    });
}

//---------------------------
function deleteItem(li){
    console.log(li)
    $("#"+li).remove();
}



//---------------------------

window.onload = init;

// Do forum 1 & lab 1