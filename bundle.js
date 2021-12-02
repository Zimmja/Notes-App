(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib_functions/firstTwenty.js
  var require_firstTwenty = __commonJS({
    "lib_functions/firstTwenty.js"(exports, module) {
      var firstTwenty2 = (str) => {
        return `${str.substring(0, 20)}${str.length < 20 ? "" : "..."}`;
      };
      module.exports = firstTwenty2;
    }
  });

  // lib_functions/addNote.js
  var require_addNote = __commonJS({
    "lib_functions/addNote.js"(exports, module) {
      var addNotes = (title, content) => {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: `${title.value}`,
            content: `${content.value}`
          })
        }).then((response) => response.json()).then((data) => {
          console.log(data);
        });
      };
      module.exports = addNotes;
    }
  });

  // lib_functions/getNotes.js
  var require_getNotes = __commonJS({
    "lib_functions/getNotes.js"(exports, module) {
      var getNotes2 = () => {
        console.log("Attempting get...");
        fetch("http://localhost:3000/notes").then((response) => {
          response.json().then((notes) => {
            notes.forEach((note) => {
              const notepad = document.querySelector("#notepad");
              const newDiv = document.createElement("div");
              newDiv.innerText = note.content;
              notepad.appendChild(newDiv);
            });
          });
        });
      };
      module.exports = getNotes2;
    }
  });

  // lib_functions/displayNotes.js
  var require_displayNotes = __commonJS({
    "lib_functions/displayNotes.js"(exports, module) {
      var displayNotes2 = (notes) => {
        notes.forEach((note) => {
          document.write(`${note}<br>`);
        });
      };
      module.exports = displayNotes2;
    }
  });

  // index.js
  var firstTwenty = require_firstTwenty();
  var addNote = require_addNote();
  var getNotes = require_getNotes();
  var displayNotes = require_displayNotes();
  var createButton = document.querySelector("#createButton");
  var noteTitle = document.querySelector("#noteTitle");
  var noteContent = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    addNote(noteTitle, noteContent);
  });
  var noteDisplay = document.querySelector("#testp");
  getNotes();
  console.log("Frontend loaded");
})();
