import "./index.html";
import "./style.scss";


import "./index.html";
import "./style.scss";

const card = document.querySelector(".card");
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

function create() {
  if (!input.value) {
    return;
  }

  let listItem = document.createElement("div");
  list.appendChild(listItem);
  let text = document.createElement("div");
  listItem.appendChild(text);
  text.innerHTML = input.value;

  let btnRemove = document.createElement("button");
  btnRemove.innerHTML = "Remove";
  btnRemove.addEventListener("click", remove);
  let btnAdd = document.createElement("button");
  btnAdd.innerHTML = "Edit";
  btnAdd.addEventListener("click", edit);
  btnAdd.addEventListener("dblclick", addChange);
  listItem.appendChild(btnRemove);
  listItem.appendChild(btnAdd);
  input.value = "";
}

function remove(event) {
  list.removeChild(event.target.parentElement);
}

let n = 0;
function edit(e) {
  

  let index = [...list.children].indexOf(e.target.parentElement);

  btn.innerHTML = "Edit";
  let text = e.target.parentElement.firstChild.innerText;
  input.value = text;

  n = index;
}
function addChange(e) {
  //listshi indexis text unda sheicvalos inputis valueti editze dacheris dros
  e.target.parentElement.parentElement.lastChild.previousSibling.children[n].children[0].innerHTML = input.value;
  input.value = "";
}

btn.addEventListener("click", (e) => {
  if (btn.innerHTML == "Edit") {
    addChange(e);
    // change()

    btn.innerHTML = "ADD";
  } else {
    create();
  }
});


