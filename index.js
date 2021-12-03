const addNote = require("./lib_functions/addNote.js");
const getNotes = require("./lib_functions/getNotes.js");
const getOneNote = require("./lib_functions/getOneNote.js");

//========================================
// FUNCTIONS
//========================================

const noteBoard = document.querySelector("#noteBoard");
const displayContent = document.querySelector("#displayContent");

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
  newDiv.id = `${idNum}`;
  createEventListener(newDiv);
  noteBoard.appendChild(newDiv);
};

const displayOneNote = (note) => {
  displayContent.innerHTML = "";
  const oneNote = document.createElement("p");
  oneNote.innerText = note.content;
  oneNote.className = "oneNote";
  oneNote.id = `note00`;
  displayContent.appendChild(oneNote);
};

//========================================
// EVENT LISTENERS
//========================================

const createButton = document.querySelector("#createButton");
const noteContent = document.querySelector("#noteInput");

createButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

const createEventListener = (newEl) => {
  console.log(`New note created, id: ${newEl.id}`);
  newEl.addEventListener("click", () => {
    console.log(`Clicked note, id: ${newEl.id}`);
    getOneNote(Number(newEl.id), displayOneNote);
  });
};

//========================================
// INITIATION
//========================================

updateDisplay();
console.log("Frontend loaded");
