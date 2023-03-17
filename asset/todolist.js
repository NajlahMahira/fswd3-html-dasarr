
const todo = document.getElementById('todo');




function add(){
    // ambil nilai
    let text = document.getElementById('text');

    // tambahkan list baru

    let newtodo = "<li> <span onclick='toggle(this)'>" + text.value + "</span>" + 
    "<span onclick='remove(this)'> X </span>" +
    "</li>"

    todo.insertAdjacentHTML('afterbegin', newtodo)

    text.value = " "
    

   
}

function toggle(el) {
    el.classList.toggle('done')
}

function remove(el) {
    el.parentElement.remove()
}



