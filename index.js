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
  return newElement(
    noteHash("p", note.title, "note", `${idNum}`, noteBoard),
    newNoteEL
  );
};

const displayOneNote = (note) => {
  disCont.innerHTML = "";
  return newElement(
    noteHash("p", note.content, "oneNote", `note00`, disCont),
    newREL
  );
};

const noteHash = (elType, elCont, elClass, elID, elLoc) => {
  return {
    type: elType,
    content: elCont,
    class: elClass,
    id: elID,
    loc: elLoc,
  };
};

const newElement = (element, listenFunc) => {
  let newEl = document.createElement(element.type);
  setAttributes(newEl, element);
  addElementToPage(newEl, listenFunc, element.loc);
  return newEl;
};

const setAttributes = (newEl, element) => {
  newEl.innerText = element.content;
  newEl.className = element.class;
  newEl.id = element.id;
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
