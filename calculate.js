function calculate(propertyPrice) {
  if (propertyPrice === undefined || isNaN(propertyPrice)) {
    throw new Error(
      "Invalid Number; Please provide a valid number e.g. 185000."
    );
  } else if (propertyPrice < 0) {
    throw new Error("Invalid Number; Please provide a positive number");
  }

  let tax = 0; // initialize taxAmount
  let level0 = 145000;
  let level1 = 250000;
  let level2 = 325000;
  let level3 = 750000;
  //let level0Rate = 0;
  let level1Rate = 2;
  let level2Rate = 5;
  let level3Rate = 10;
  let level4Rate = 12;

  function calculateTax(taxableAmount, taxRate) {
    taxAmount = (taxableAmount * taxRate) / 100;
    return taxAmount;
  }

  console.log("[Property Price]: " + propertyPrice);

  if (propertyPrice <= level0) {
    // Below  145000
    return 0;
  } else if (propertyPrice > level0 && propertyPrice <= level1) {
    // Range 145000 - 250000
    tax = calculateTax(propertyPrice - level0, level1Rate);
  } else if (propertyPrice > level1 && propertyPrice <= level2) {
    // Range  250000 - 325000
    tax = calculateTax(level1 - level0, level1Rate);
    tax += calculateTax(propertyPrice - level1, level2Rate);
  } else if (propertyPrice > level2 && propertyPrice <= level3) {
    // Range 325000 - 750000
    tax = calculateTax(level1 - level0, level1Rate);
    tax += calculateTax(level2 - level1, level2Rate);
    tax += calculateTax(propertyPrice - level2, level3Rate);
  } else {
    tax = calculateTax(level1 - level0, level1Rate);
    tax += calculateTax(level2 - level1, level2Rate);
    tax += calculateTax(level3 - level2, level3Rate);
    tax += calculateTax(propertyPrice - level3, level4Rate);
  }
  return tax;
}

module.exports = calculate;
