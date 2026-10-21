
let input = document.getElementById("itemInput");
let button = document.getElementById("addBtn");
let ul = document.getElementById("itemList");

button.addEventListener("click", function () {
    let li = document.createElement("li");

    li.textContent = input.value;

    ul.appendChild(li);
});
