// javascript code goes here
document.getElementsByClassName("todo-button")[0].addEventListener("click",Addfunc);

function Addfunc(e)
{
    e.preventDefault();

    const inputValue = document.getElementsByClassName("todo-input")[0].value;

    const todoElement = document.createElement("li");
    todoElement.innerText = inputValue;
    todoElement.className = "todo-item";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "trash-btn";

    const divElement = document.createElement("div");
    divElement.appendChild(todoElement);
    divElement.appendChild(completeBtn);
    divElement.appendChild(deleteBtn);

    document.getElementsByClassName("todo-list")[0].appendChild(divElement);

}
document.addEventListener('click',function(event)
{
    if(event.target.className === "trash-btn"){
        //console.log(event.target);
        const removeItem = event.target.parentNode;
        //console.log(removeItem)
        removeItem.remove();
    }
    else if(event.target.className === "complete-btn")
    {
        const removeItem = event.target.parentNode.childNodes[0];
        if(removeItem.classList.contains('strikeh'))
        {
            removeItem.classList.remove('strikeh');
        }
        else
        {
            removeItem.classList.add('strikeh');
        }
    }
})