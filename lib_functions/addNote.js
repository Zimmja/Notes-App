const firstTwenty = require("./firstTwenty.js");

const addNotes = (content, callback) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: `${firstTwenty(content.value)}`,
      content: `${content.value}`,
    }),
  })
    .then((response) => response.json())
    .then((_r) => {
      callback();
    });
};

module.exports = addNotes;
