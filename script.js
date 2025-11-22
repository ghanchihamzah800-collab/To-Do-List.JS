const listers = document.getElementById("lister");
const listcontainer = document.getElementById("list-container");

/* A function to get text in the inpu text -> Listers and add them to the <li> -> listcontainer */
function addTask(){

    if (listers.value === ''){
        alert("You must write something!") /* Normal alert if the input is empty */
    }

    else{
        let li = document.createElement("li"); /* Creating a variable name "li" which whill create a new element in the text input every time we use it */
        li.innerHTML = listers.value; /* This will insert the typed text into the created li as value */
        listcontainer.appendChild(li); /* Moves and ad the text to the list */

        let span = document.createElement("span"); /*Creates a <span. element after/besides every listed <li> */
        span.innerHTML = "\u00d7"; /* symbol of small x */
        li.appendChild(span) /* Normal append */

    }

    listers.value=''; /* This will make sure the input field is empy again after eneter a new <li>, so it looks neat to use again */

    saveData(); /* Updation */
}

listcontainer.addEventListener("click",function(e){

    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); /* will trigger list item to be checked after being clicked */

        saveData(); /* called here for updation and to save that the item is checked */
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); /* This is a click function to reomve the <li> */

        saveData(); /* updation */
    }

}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);

    showList(); /* For updation */
} /* With this all the data wil be stored in a built in local storage */

function showList(){
    const saved = localStorage.getItem("data");
    if (saved){
        listcontainer.innerHTML = saved;
    }
    /* This will redisplay the data when you open the app again that is stored in local storage */
}

//Shows the data again:
showList();