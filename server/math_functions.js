module.exports.adder = (a, b) => {
  return `The sum of ${a} and ${b} is ${a + b}`;
};

module.exports.square = (s) => {
  return s * s;
};

pi = 3.1416;

module.exports.area_circle = (r) => {
  return 2 * pi * r;
};

module.exports.pi = pi;
