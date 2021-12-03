const addNote = require("./lib_functions/addNote.js");
const getNotes = require("./lib_functions/getNotes.js");

//========================================
// FUNCTIONS
//========================================

const noteBoard = document.querySelector("#noteBoard");

const updateDisplay = () => {
  getNotes(resetNotes);
};

const resetNotes = (notes) => {
  noteBoard.innerHTML = "";
  notes.forEach((note, index) => {
    addNoteToBoard(note, index);
  });
};

const addNoteToBoard = (note, idNum) => {
  const newDiv = document.createElement("p");
  newDiv.innerText = note.title;
  newDiv.className = "note";
  newDiv.id = `note-${idNum}`;
  createEventListener(newDiv);
  noteBoard.appendChild(newDiv);
};

//========================================
// EVENT LISTENERS
//========================================

const createButton = document.querySelector("#createButton");
const noteContent = document.querySelector("#noteInput");
const displayContent = document.querySelector("#displayContent");

createButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

const createEventListener = (newEl) => {
  console.log(`New note created, id: ${newEl.id}`);
  newEl.addEventListener("click", () => {
    console.log(`Clicked note, id: ${newEl.id}`);
    displayContent.innerHTML = "";
  });
};

//========================================
// INITIATION
//========================================

updateDisplay();
console.log("Frontend loaded");
