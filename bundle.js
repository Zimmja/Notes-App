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

  // index.js
  var firstTwenty = require_firstTwenty();
  var createButton = document.querySelector("#createButton");
  var noteInput = document.querySelector("#noteInput");
  createButton.addEventListener("click", () => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New notes", content: `${noteInput.value}` })
    }).then((response) => response.json()).then((data) => {
      console.log(data);
    });
  });
})();
