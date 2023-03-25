
const todo = document.getElementById('todo');




function add(){
    // ambil nilai
    let text = document.getElementById('text');

    // tambahkan list baru

    let newtodo = "<li> <span onclick='toggle(this)'>" + text.value + "</span>" + 
    "<span onclick='remove(this)'> X </span>" +
    "</li>"

    
    
    fetch('https://crudcrud.com/api/66de75cc3d45448a9a540ad8fb60d3b9/todos', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            "text": text.value
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    todo.insertAdjacentHTML('afterbegin', newtodo)

    text.value = " "

   
}

function toggle(el) {
    el.classList.toggle('done')
}

function remove(el) {
    el.parentElement.remove()
}



