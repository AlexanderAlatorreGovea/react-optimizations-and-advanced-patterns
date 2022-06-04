// compose function
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const double = (x) => x * 2;
const square = (x) => x * x;
const minusTwo = (x) => x - 2;

var output_final = compose(minusTwo, square, double)(2);
console.log(output_final);

// pipe

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const pipedOutput = pipe(square, double, minusTwo, minusTwo, minusTwo)(2);

console.log(pipedOutput);
