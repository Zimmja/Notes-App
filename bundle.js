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
        }).then((response) => response.json()).then((_r) => {
          callback();
        });
      };
      module.exports = addNotes;
    }
  });

  // lib_functions/displayNotes.js
  var require_displayNotes = __commonJS({
    "lib_functions/displayNotes.js"(exports, module) {
      var displayNotes2 = (follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes);
          });
        });
      };
      module.exports = {
        primary: displayNotes2
      };
    }
  });

  // index.js
  var addNote = require_addNote();
  var displayNotes = require_displayNotes().primary;
  var noteBoard = document.querySelector("#noteBoard");
  var updateDisplay = () => {
    displayNotes(resetNotes);
  };
  var resetNotes = (notes) => {
    noteBoard.innerHTML = "";
    notes.forEach((note, index) => {
      addNoteToBoard(noteBoard, note, index);
    });
  };
  var addNoteToBoard = (noteBoard2, note, id = false) => {
    const noteCount = document.querySelectorAll(".note").length;
    const idNum = id ? id : noteCount;
    const newDiv = document.createElement("p");
    newDiv.innerText = note.title;
    newDiv.className = "note";
    newDiv.id = `note-${idNum}`;
    newDiv.addEventListener("click", () => {
      cencor(newDiv);
    });
    noteBoard2.appendChild(newDiv);
  };
  var createButton = document.querySelector("#createButton");
  var noteContent = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    addNote(noteContent, updateDisplay);
  });
  updateDisplay();
  console.log("Frontend loaded");
})();
