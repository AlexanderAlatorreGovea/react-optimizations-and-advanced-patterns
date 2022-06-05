// compose function
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const double = (x) => x * 2;
const square = (x) => x * x;
const minusTwo = (x) => x - 2;

var output_final = compose(square, double)(2);
console.log(output_final);

// pipe
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const pipedOutput = pipe(double, square)(2);

console.log(pipedOutput);

//////// pipe message

let message = "Hello world     "; // Try edit me

const removeEmptySpace = (x) => x.trim();
const limitToEightCharacters = (x) => x.slice(0, 8);
const splitIntoTwoArrays = (x) => x.split(" ");
const rejoinArrays = (x) => x.join(" ");

message = pipe(
  removeEmptySpace,
  limitToEightCharacters,
  splitIntoTwoArrays,
  rejoinArrays
)(message);

// Log to console
console.log(message);
