const palindromes = function (str) {
  const exclude = ["!", ".", " ", ","];
  const clean = str.toLowerCase().split("").filter(char => !exclude.includes(char)).join("");
  return clean === clean.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
