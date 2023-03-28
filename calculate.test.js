const calculate = require("./calculate");

test("Not a number", () => {
  expect(() => {
    calculate("twenty three");
  }).toThrow("Invalid Number; Please provide a valid number e.g. 185000.");
});

test("Test below 145,000", () => {
  expect(calculate(48000)).toBe(0);
});

test("Test in range £250,001 to £325,000", () => {
  expect(calculate(251000)).toBe(2150);
});

test("Test below £250,000", () => {
  expect(calculate(247000)).toBe(2040);
});

test("Test at £250,000", () => {
  expect(calculate(250000)).toBe(2100);
});

test("Test at £451,000", () => {
  expect(calculate(451000)).toBe(18450);
});

test("Test at £1,230,000", () => {
  expect(calculate(1230000)).toBe(105950);
});

test("Negative number", () => {
  expect(() => {
    calculate(-100);
  }).toThrow("Please provide a positive number");
});
