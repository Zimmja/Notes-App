const addNote = require("./lib_functions/addNote.js");
const getNotes = require("./lib_functions/getNotes.js");
const getOneNote = require("./lib_functions/getOneNote.js");

const noteBoard = document.querySelector("#noteBoard");
const disCont = document.querySelector("#displayContent");
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
  return newElement("p", note.title, "note", `${idNum}`, newNoteEL, noteBoard);
};

const displayOneNote = (note) => {
  disCont.innerHTML = "";
  return newElement("p", note.content, "oneNote", "note00", newREL, disCont);
};

const newElement = (elType, elContent, elClass, elID, listenFunc, docLoc) => {
  let newEl = document.createElement(elType);
  setAttributes(newEl, elContent, elClass, elID);
  addElementToPage(newEl, listenFunc, docLoc);
  return newEl;
};

const setAttributes = (newEl, elContent, elClass, elID) => {
  newEl.innerText = elContent;
  newEl.className = elClass;
  newEl.id = elID;
};

const addElementToPage = (newEl, listenFunc, docLoc) => {
  listenFunc(newEl);
  docLoc.appendChild(newEl);
};

//========================================
// EVENT LISTENERS
//========================================

createButton.addEventListener("click", () => {
  addNote(noteContent, updateDisplay);
});

const newNoteEL = (newEl) => {
  newEl.addEventListener("click", () => {
    console.log(`Clicked note, id: ${newEl.id}`);
    getOneNote(Number(newEl.id), displayOneNote);
  });
};

const newREL = (newEl) => {
  newEl.addEventListener("click", () => {
    location.reload();
  });
};

//========================================
// INITIATION
//========================================

updateDisplay();
console.log("Frontend loaded");
