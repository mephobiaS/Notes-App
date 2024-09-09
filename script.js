const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//display in browser if anything else is there
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//creating local storage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//everytime button is clicked it will create it
createBtn.addEventListener("click", function () {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
});

//if del img is clicked it will remove note & for every key we press it will update local storage
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

//if we click enter button, it will insert line break by preventing default feature of enter key
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
