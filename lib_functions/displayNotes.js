const displayNotes = (createdNote = null) => {
  const noteBoard = document.querySelector("#noteBoard");
  fetch("http://localhost:3000/notes").then((response) => {
    response.json().then((notes) => {
      if (createdNote) {
        addNoteToBoard(noteBoard, createdNote);
      } else {
        addAllNotesToBoard(noteBoard, notes);
      }
    });
  });
};

const addAllNotesToBoard = (noteBoard, notes) => {
  noteBoard.innerHTML = "";
  notes.forEach((note, index) => {
    addNoteToBoard(noteBoard, note, index);
  });
};

const addNoteToBoard = (noteBoard, note, id = false) => {
  const noteCount = document.querySelectorAll(".note").length;
  const idNum = id ? id : noteCount;
  const newDiv = document.createElement("div");
  newDiv.innerText = note.title;
  newDiv.className = "note";
  newDiv.id = `note-${idNum}`;
  noteBoard.appendChild(newDiv);
};

module.exports = {
  primary: displayNotes,
  sub01: addAllNotesToBoard,
  sub02: addNoteToBoard,
};
