const firstTwenty = require("../lib_functions/firstTwenty.js");

test("Abbreviates a one-word string to the first twenty characters", () => {
  let singleWord = "Supercalifragilisticexpialidocious";
  expect(firstTwenty(singleWord)).toBe("Supercalifragilistic...");
});

test("Abbreviates a string made of mutliple words to the first twenty characters", () => {
  let multiWord = "The answer to life, the universe, and everything is...";
  expect(firstTwenty(multiWord)).toBe("The answer to life, ...");
});

test("Returns the string unedited if it's less than twenty characters", () => {
  let multiWord = "42";
  expect(firstTwenty(multiWord)).toBe("42");
});
