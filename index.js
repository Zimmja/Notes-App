const addNote = require("./lib_functions/addNote.js");
const displayNotes = require("./lib_functions/displayNotes.js").primary;

//========================================
// FUNCTIONS
//========================================

const noteBoard = document.querySelector("#noteBoard");

const updateDisplay = () => {
  displayNotes(resetNotes);
};

const resetNotes = (notes) => {
  noteBoard.innerHTML = "";
  notes.forEach((note, index) => {
    addNoteToBoard(noteBoard, note, index);
  });
};

const addNoteToBoard = (noteBoard, note, id = false) => {
  const noteCount = document.querySelectorAll(".note").length;
  const idNum = id ? id : noteCount;
  const newDiv = document.createElement("p");
  newDiv.innerText = note.title;
  newDiv.className = "note";
  newDiv.id = `note-${idNum}`;
  newDiv.addEventListener("click", () => {
    cencor(newDiv);
  });
  noteBoard.appendChild(newDiv);
};

// const sayHello = (response) => {
//   console.log(`HELLO: ${response}`);
// };

//========================================
// EVENT LISTENERS
//========================================

const createButton = document.querySelector("#createButton");
const noteContent = document.querySelector("#noteInput");

createButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

//========================================
// INITIATION
//========================================

updateDisplay();
console.log("Frontend loaded");
