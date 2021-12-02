// To run the backend, enter "node index.js" in the terminal while in the notes-backend-server folder

const firstTwenty = require("./lib_functions/firstTwenty.js");

// const testMessage = document.querySelector("#testp");
// testMessage.innerText = firstTwenty("Supercalifragilisticexpialidocious");

const createButton = document.querySelector("#createButton");
const noteInput = document.querySelector("#noteInput");

createButton.addEventListener("click", () => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New notes", content: `${noteInput.value}` }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
