const firstTwenty = (str) => {
  return `${str.substring(0, 20)}${str.length < 20 ? "" : "..."}`;
};

module.exports = firstTwenty;
