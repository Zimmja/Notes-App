(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib_functions/firstTwenty.js
  var require_firstTwenty = __commonJS({
    "lib_functions/firstTwenty.js"(exports, module) {
      var firstTwenty = (str) => {
        return `${str.substring(0, 20)}${str.length < 20 ? "" : "..."}`;
      };
      module.exports = firstTwenty;
    }
  });

  // lib_functions/addNote.js
  var require_addNote = __commonJS({
    "lib_functions/addNote.js"(exports, module) {
      var firstTwenty = require_firstTwenty();
      var addNotes = (content, callback) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: `${firstTwenty(content.value)}`,
            content: `${content.value}`
          })
        }).then((response) => response.json()).then((res) => {
          callback(res);
        });
      };
      module.exports = addNotes;
    }
  });

  // lib_functions/displayNotes.js
  var require_displayNotes = __commonJS({
    "lib_functions/displayNotes.js"(exports, module) {
      var displayNotes2 = (createdNote = null) => {
        const noteBoard = document.querySelector("#noteBoard");
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            if (createdNote) {
              addNoteToBoard(noteBoard, createdNote);
            } else {
              addAllNotesToBoard(noteBoard, notes);
            }
          });
        });
      };
      var addAllNotesToBoard = (noteBoard, notes) => {
        noteBoard.innerHTML = "";
        notes.forEach((note, index) => {
          addNoteToBoard(noteBoard, note, index);
        });
      };
      var addNoteToBoard = (noteBoard, note, id = false) => {
        const noteCount = document.querySelectorAll(".note").length;
        const idNum = id ? id : noteCount;
        const newDiv = document.createElement("div");
        newDiv.innerText = note.title;
        newDiv.className = "note";
        newDiv.id = `note-${idNum}`;
        noteBoard.appendChild(newDiv);
      };
      module.exports = {
        primary: displayNotes2,
        sub01: addAllNotesToBoard,
        sub02: addNoteToBoard
      };
    }
  });

  // index.js
  var addNote = require_addNote();
  var displayNotes = require_displayNotes().primary;
  var createButton = document.querySelector("#createButton");
  var noteContent = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    addNote(noteContent, displayNotes);
  });
  displayNotes();
  console.log("Frontend loaded");
})();
