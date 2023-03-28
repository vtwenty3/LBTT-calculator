// Possible improvements:
// Memoization for each level
// better error detection and handling

function calculate(propertyPrice) {
  if (propertyPrice === undefined || isNaN(propertyPrice)) {
    throw new Error(
      "Invalid Number; Please provide a valid number e.g. 185000."
    );
  } else if (propertyPrice < 0) {
    throw new Error("Invalid Number; Please provide a positive number");
  }

  let taxTotal = 0;
  const level0 = 145000;
  const level1 = 250000;
  const level2 = 325000;
  const level3 = 750000;
  const level1Rate = 2;
  const level2Rate = 5;
  const level3Rate = 10;
  const level4Rate = 12;

  function calculateTax(taxableAmount, taxRate) {
    let taxAmount = (taxableAmount * taxRate) / 100;
    return taxAmount;
  }

  if (propertyPrice <= level0) {
    // Below 145000
    return 0;
  } else if (propertyPrice > level0 && propertyPrice <= level1) {
    // Range 145000 - 250000
    taxTotal = calculateTax(propertyPrice - level0, level1Rate);
  } else if (propertyPrice > level1 && propertyPrice <= level2) {
    // Range 250000 - 325000
    taxTotal = calculateTax(level1 - level0, level1Rate);
    taxTotal += calculateTax(propertyPrice - level1, level2Rate);
  } else if (propertyPrice > level2 && propertyPrice <= level3) {
    // Range 325000 - 750000
    taxTotal = calculateTax(level1 - level0, level1Rate);
    taxTotal += calculateTax(level2 - level1, level2Rate);
    taxTotal += calculateTax(propertyPrice - level2, level3Rate);
  } else {
    // Above 750000

    taxTotal = calculateTax(level1 - level0, level1Rate);
    taxTotal += calculateTax(level2 - level1, level2Rate);
    taxTotal += calculateTax(level3 - level2, level3Rate);
    taxTotal += calculateTax(propertyPrice - level3, level4Rate);
  }
  return taxTotal;
}

module.exports = calculate;
