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
        contVal = content.value;
        if (contVal != "") {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: `${firstTwenty(contVal)}`,
              content: `${contVal}`
            })
          }).then((response) => response.json()).then((_r) => {
            console.log(`Added new note: ${contVal}`);
            callback();
          });
        }
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
  var createButton = document.querySelector("#createButton");
  var noteContent = document.querySelector("#noteInput");
  var updateDisplay = () => {
    noteContent.value = "";
    getNotes(resetNotes);
  };
  var resetNotes = (notes) => {
    noteBoard.innerHTML = "";
    notes.forEach((note, index) => {
      addNoteToBoard(note, index);
    });
  };
  var addNoteToBoard = (note, idNum) => {
    const newDiv = newElement("p", note.title, "note", `${idNum}`);
    createNoteListener(newDiv);
    noteBoard.appendChild(newDiv);
  };
  var displayOneNote = (note) => {
    displayContent.innerHTML = "";
    const oneNote = newElement("p", note.content, "oneNote", "note00");
    createReloadListener(oneNote);
    displayContent.appendChild(oneNote);
  };
  var newElement = (elType, elContent, elClass, elID) => {
    let newEl = document.createElement(elType);
    newEl.innerText = elContent;
    newEl.className = elClass;
    newEl.id = elID;
    return newEl;
  };
  createButton.addEventListener("click", () => {
    addNote(noteContent, updateDisplay);
  });
  var createNoteListener = (newEl) => {
    newEl.addEventListener("click", () => {
      console.log(`Clicked note, id: ${newEl.id}`);
      getOneNote(Number(newEl.id), displayOneNote);
    });
  };
  var createReloadListener = (newEl) => {
    newEl.addEventListener("click", () => {
      location.reload();
    });
  };
  updateDisplay();
  console.log("Frontend loaded");
})();
