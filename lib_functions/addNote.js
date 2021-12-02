const addNotes = (title, content) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: `${title.value}`,
      content: `${content.value}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

module.exports = addNotes;
