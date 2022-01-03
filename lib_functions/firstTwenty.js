const firstTwenty = (str) => {
  let noteLength = 30;
  return `${str.substring(0, noteLength)}${
    str.length < noteLength ? "" : "..."
  }`;
};

module.exports = firstTwenty;
