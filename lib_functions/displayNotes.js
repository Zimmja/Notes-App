const displayNotes = (notes) => {
  notes.forEach((note) => {
    document.write(`${note}<br>`);
  });
};

module.exports = displayNotes;
