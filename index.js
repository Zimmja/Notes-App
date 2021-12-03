const addNote = require("./lib_functions/addNote.js");
const getNotes = require("./lib_functions/getNotes.js");
const getOneNote = require("./lib_functions/getOneNote.js");

const noteBoard = document.querySelector("#noteBoard");
const displayContent = document.querySelector("#displayContent");
const createButton = document.querySelector("#createButton");
const noteContent = document.querySelector("#noteInput");

//========================================
// FUNCTIONS
//========================================

const updateDisplay = () => {
  noteContent.value = "";
  getNotes(resetNotes);
};

const resetNotes = (notes) => {
  noteBoard.innerHTML = "";
  notes.forEach((note, index) => {
    addNoteToBoard(note, index);
  });
};

const addNoteToBoard = (note, idNum) => {
  const newDiv = newElement("p", note.title, "note", `${idNum}`);
  createNoteListener(newDiv);
  noteBoard.appendChild(newDiv);
};

const displayOneNote = (note) => {
  displayContent.innerHTML = "";
  const oneNote = newElement("p", note.content, "oneNote", "note00");
  createReloadListener(oneNote);
  displayContent.appendChild(oneNote);
};

const newElement = (elType, elContent, elClass, elID) => {
  let newEl = document.createElement(elType);
  newEl.innerText = elContent;
  newEl.className = elClass;
  newEl.id = elID;
  return newEl;
};

//========================================
// EVENT LISTENERS
//========================================

createButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

const createNoteListener = (newEl) => {
  newEl.addEventListener("click", () => {
    console.log(`Clicked note, id: ${newEl.id}`);
    getOneNote(Number(newEl.id), displayOneNote);
  });
};

const createReloadListener = (newEl) => {
  newEl.addEventListener("click", () => {
    location.reload();
  });
};

//========================================
// INITIATION
//========================================

updateDisplay();
console.log("Frontend loaded");
