// To run the backend, enter "node index.js" in the terminal while in the notes-backend-server folder

const firstTwenty = require("./lib_functions/firstTwenty.js");
const addNote = require("./lib_functions/addNote.js");

// const testMessage = document.querySelector("#testp");
// testMessage.innerText = firstTwenty("Supercalifragilisticexpialidocious");

const createButton = document.querySelector("#createButton");
const noteTitle = document.querySelector("#noteTitle");
const noteContent = document.querySelector("#noteInput");

createButton.addEventListener("click", () => {
  addNote(noteTitle, noteContent);
});
