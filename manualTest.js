const calculate = require("./calculate");
try {
  console.log(calculate(245000)); // Expected output: 2000
  console.log(calculate(255000)); // Expected output: 2350
  console.log(calculate(658823)); // Expected output: 39232
  console.log(calculate(788823)); // Expected output: 39232
  console.log(calculate(750000)); // Expected output: 39232
  console.log(calculate(1230000)); // Expected output: 39232
} catch (e) {
  console.log(e);
}
