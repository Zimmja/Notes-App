const firstTwenty = require("./firstTwenty.js");

const addNotes = (content, callback) => {
  contVal = content.value;
  if (contVal != "") {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `${firstTwenty(contVal)}`,
        content: `${contVal}`,
      }),
    })
      .then((response) => response.json())
      .then((_r) => {
        console.log(`Added new note: ${contVal}`);
        callback();
      });
  }
};

module.exports = addNotes;
