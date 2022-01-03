(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib_functions/firstTwenty.js
  var require_firstTwenty = __commonJS({
    "lib_functions/firstTwenty.js"(exports, module) {
      var firstTwenty = (str) => {
        let noteLength = 30;
        return `${str.substring(0, noteLength)}${str.length < noteLength ? "" : "..."}`;
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
      var getNotes = (follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes);
          });
        });
      };
      module.exports = getNotes;
    }
  });

  // lib_functions/getOneNote.js
  var require_getOneNote = __commonJS({
    "lib_functions/getOneNote.js"(exports, module) {
      var getOneNote = (index, follow_up) => {
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            follow_up(notes[index]);
          });
        });
      };
      module.exports = getOneNote;
    }
  });

  // index.js
  var require_app = __commonJS({
    "index.js"(exports, module) {
      var addNote = require_addNote();
      var getNotes = require_getNotes();
      var getOneNote = require_getOneNote();
      var noteBoard = document.querySelector("#noteBoard");
      var disCont = document.querySelector("#displayContent");
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
        return newElement(noteHash("p", note.title, "note", `${idNum}`, noteBoard), newNoteEL);
      };
      var displayOneNote = (note) => {
        disCont.innerHTML = "";
        return newElement(noteHash("p", note.content, "oneNote", `note00`, disCont), newREL);
      };
      var noteHash = (elType, elCont, elClass, elID, elLoc) => {
        return {
          type: elType,
          content: elCont,
          class: elClass,
          id: elID,
          loc: elLoc
        };
      };
      var newElement = (element, listenFunc) => {
        let newEl = document.createElement(element.type);
        setAttributes(newEl, element);
        addElementToPage(newEl, listenFunc, element.loc);
        return newEl;
      };
      var setAttributes = (newEl, element) => {
        newEl.innerText = element.content;
        newEl.className = element.class;
        newEl.id = element.id;
      };
      var addElementToPage = (newEl, listenFunc, docLoc) => {
        listenFunc(newEl);
        docLoc.appendChild(newEl);
      };
      createButton.addEventListener("click", () => {
        addNote(noteContent, updateDisplay);
      });
      var newNoteEL = (newEl) => {
        newEl.addEventListener("click", () => {
          console.log(`Clicked note, id: ${newEl.id}`);
          getOneNote(Number(newEl.id), displayOneNote);
        });
      };
      var newREL = (newEl) => {
        newEl.addEventListener("click", () => {
          location.reload();
        });
      };
      updateDisplay();
      console.log("Frontend loaded");
      module.exports = updateDisplay;
    }
  });
  require_app();
})();
