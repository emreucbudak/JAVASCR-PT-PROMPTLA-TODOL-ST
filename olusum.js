var todo6 = prompt("Todo Ekle = ");
const todo3 = document.querySelectorAll(".card");
todo3[2].remove();
document.getElementById("button-addon2").addEventListener("click", ekle);
function ekle() {
    const todo2 = document.getElementById("list");
    const todo = document.createElement("i");
    todo.className = "fa-solid fa-xmark";
    const todol = document.createElement("div");
    todol.className = "card-body";
    todol.innerHTML = todo6;
    const todo1 = document.createElement("div");
    todo1.className = "card w-50 bg-dark text-white"
    todol.appendChild(todo);
    todo1.appendChild(todol);
    todo2.appendChild(todo1);
}