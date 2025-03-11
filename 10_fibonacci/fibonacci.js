const fibonacci = function(num) {
  if (+num < 0) return "OOPS";
  if (+num === 0) return 0;

  let prev1 = 1;
  let prev2 = 0;
  let fib = 1;
  for (let i = 2; i <= +num; i++) {
    fib = prev1 + prev2;
    prev2 = prev1;
    prev1 = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
