var addbutton = document.getElementById("add-button");
var blackpop = document.querySelector(".black-pop");
var addpopup = document.querySelector(".add-popup");
var addnote = document.getElementById("add-note");


addbutton.addEventListener("click",function(){
    blackpop.style.display = "block";
    addpopup.style.display = "block";
});

var cancelbtn = document.getElementById("cancel-button");

cancelbtn.addEventListener("click",function(event){
    event.preventDefault();
    blackpop.style.display = "none";
    addpopup.style.display = "none";

});

var originaldiv = document.querySelector(".note");
var title = document.getElementById("title");
var description = document.getElementById("description")

addnote.addEventListener("click",function(event){
    event.preventDefault();

    const newDiv = document.createElement("div")
    newDiv.classList.add("note")

    const newtitle = document.createElement("h1")
    newtitle.textContent = title.value
    const newdescription = document.createElement("p")
    newdescription.textContent = description.value


    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("delete-button")

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.classList.add("edit-button");

    newDiv.appendChild(newtitle)
    newDiv.appendChild(newdescription)
    newDiv.appendChild(deletebtn)
    newDiv.appendChild(editbtn)

    const container = document.getElementById("container")
    container.appendChild(newDiv);

    title.value = "";
    description.value = "";
    
    blackpop.style.display = "none";
    addpopup.style.display = "none";


    editbtn.addEventListener('click', function() {
        let titleInput;
        if(editbtn.textContent === "Edit"){
            
            titleInput = document.createElement("input");
            titleInput.type="text";
            titleInput.value = newtitle.textContent;

            descriptionInput = document.createElement("textarea");
            descriptionInput.value = newdescription.textContent;


            newDiv.replaceChild(titleInput,newtitle)
            newDiv.replaceChild(descriptionInput,newdescription)
            editbtn.textContent = "Save";

            editbtn.addEventListener('click', function saveChanges() {
                if (editbtn.textContent === "Save") {
                    newtitle.textContent = titleInput.value;
                    newdescription.textContent = descriptionInput.value;


                    newDiv.replaceChild(newtitle, titleInput);
                    newDiv.replaceChild(newdescription, descriptionInput);
                    editbtn.textContent = "Edit";
                    editbtn.removeEventListener('click', saveChanges);
                }
            });
        }
        
        

    });


    deletebtn.addEventListener('click', function() {
        newDiv.remove(); 
    });
});

blackpop.addEventListener("click",function(){
    blackpop.style.display = "none";
    addpopup.style.display = "none";
});