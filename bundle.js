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

  // lib_functions/getNotes.js
  var require_getNotes = __commonJS({
    "lib_functions/getNotes.js"(exports, module) {
      var getNotes2 = (follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes);
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // lib_functions/getOneNote.js
  var require_getOneNote = __commonJS({
    "lib_functions/getOneNote.js"(exports, module) {
      var getOneNote2 = (index, follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes[index]);
          });
        });
      };
      module.exports = getOneNote2;
    }
  });

  // index.js
  var addNote = require_addNote();
  var getNotes = require_getNotes();
  var getOneNote = require_getOneNote();
  var noteBoard = document.querySelector("#noteBoard");
  var displayContent = document.querySelector("#displayContent");
  var updateDisplay = () => {
    getNotes(resetNotes);
  };
  var resetNotes = (notes) => {
    noteBoard.innerHTML = "";
    notes.forEach((note, index) => {
      addNoteToBoard(note, index);
    });
  };
  var addNoteToBoard = (note, idNum) => {
    const newDiv = document.createElement("p");
    newDiv.innerText = note.title;
    newDiv.className = "note";
    newDiv.id = `${idNum}`;
    createEventListener(newDiv);
    noteBoard.appendChild(newDiv);
  };
  var displayOneNote = (note) => {
    displayContent.innerHTML = "";
    const oneNote = document.createElement("p");
    oneNote.innerText = note.content;
    oneNote.className = "oneNote";
    oneNote.id = `note00`;
    displayContent.appendChild(oneNote);
  };
  var createButton = document.querySelector("#createButton");
  var noteContent = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    addNote(noteContent, updateDisplay);
  });
  var createEventListener = (newEl) => {
    console.log(`New note created, id: ${newEl.id}`);
    newEl.addEventListener("click", () => {
      console.log(`Clicked note, id: ${newEl.id}`);
      getOneNote(Number(newEl.id), displayOneNote);
    });
  };
  updateDisplay();
  console.log("Frontend loaded");
})();
