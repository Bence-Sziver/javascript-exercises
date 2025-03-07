const repeatString = function(text, num) {
  if (num < 0) {
    return "ERROR";
  }
  let repeatedText = "";
  for(let i = 1; i <= num; i++) {
    repeatedText += text;
  }
  return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
