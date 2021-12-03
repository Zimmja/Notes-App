const getOneNote = (index, follow_up) => {
  fetch("http://localhost:3000/notes").then((response) => {
    response.json().then((notes) => {
      follow_up(notes[index]);
    });
  });
};

module.exports = getOneNote;
