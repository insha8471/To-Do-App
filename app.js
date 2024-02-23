const btn = document.querySelector('button');
const inp = document.querySelector('input');
const ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let listItem = document.createElement('li');
    listItem.innerText = inp.value;
    ul.appendChild(listItem);
    let span = document.createElement('span');
    span.innerText = 'x';
    listItem.appendChild(span);
    inp.value = "";
    saveData();
});

//remove
ul.addEventListener('click', function(event) {
    if(event.target.nodeName === "SPAN"){
        let item = event.target.parentElement;
        item.remove()
        saveData();
    }
});


ul.addEventListener('click', function(e) {
    if(e.target.nodeName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
});


let listcontainer = document.querySelector('#list-container');
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();