const getNotes = () => {
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

module.exports = getNotes;
