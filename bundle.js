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

  // index.js
  var firstTwenty = require_firstTwenty();
  var addNote = require_addNote();
  var createButton = document.querySelector("#createButton");
  var noteTitle = document.querySelector("#noteTitle");
  var noteContent = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    addNote(noteTitle, noteContent);
  });
})();
