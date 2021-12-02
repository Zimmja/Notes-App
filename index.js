// To run the backend, enter "node index.js" in the terminal while in the notes-backend-server folder

const addNote = require("./lib_functions/addNote.js");
const displayNotes = require("./lib_functions/displayNotes.js").primary;

const createButton = document.querySelector("#createButton");
const noteContent = document.querySelector("#noteInput");

createButton.addEventListener("click", () => {
  addNote(noteContent, displayNotes);
});

displayNotes();

console.log("Frontend loaded");
