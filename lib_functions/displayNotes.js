const displayNotes = (follow_up) => {
  // const noteBoard = document.querySelector("#noteBoard");
  fetch("http://localhost:3000/notes").then((response) => {
    response.json().then((notes) => {
      // resetNotes(noteBoard, notes);
      follow_up(notes);
    });
    // .then((res) => {
    //   console.log("thenning");
    //   if (follow_up) {
    //     console.log("Follow-up defined");
    //     follow_up(res);
    //   } else {
    //     console.log("No follow-up");
    //   }
    // });
  });
};

// const resetNotes = (noteBoard, notes) => {
//   noteBoard.innerHTML = "";
//   notes.forEach((note, index) => {
//     addNoteToBoard(noteBoard, note, index);
//   });
// };

// const addNoteToBoard = (noteBoard, note, id = false) => {
//   const noteCount = document.querySelectorAll(".note").length;
//   const idNum = id ? id : noteCount;
//   const newDiv = document.createElement("p");
//   newDiv.innerText = note.title;
//   newDiv.className = "note";
//   newDiv.id = `note-${idNum}`;
//   newDiv.addEventListener("click", () => {
//     cencor(newDiv);
//   });
//   noteBoard.appendChild(newDiv);
// };

// const cencor = (docSection) => {
//   docSection.innerText = "CENSORED";
// };

module.exports = {
  primary: displayNotes,
  // sub01: resetNotes,
  // sub02: addNoteToBoard,
};
