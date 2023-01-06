convertFromInput = document.getElementById('convertFromInput')
convertToInput = document.getElementById('convertToInput')
convertFromSelect = document.getElementById('convertFromSelect')
convertToSelect = document.getElementById('convertToSelect')

calculateInputValue1 = document.getElementById('calculateInputValue1')
calculateInputValue2 = document.getElementById('calculateInputValue2')
calculateInputResult = document.getElementById('calculateInputResult')
calculateSelectValue1 = document.getElementById('calculateSelectValue1')
calculateSelectValue2 = document.getElementById('calculateSelectValue2')
calculateSelectOperator = document.getElementById('calculateSelectOperator')

function convert() {
  try {
    convertToInput.value = BigInt(
      convertFromInput.value.toString(getNumeralSystem(convertFromSelect.value), 
      getNumeralSystem(convertToSelect.value)))
      .toString(getNumeralSystem(convertToSelect.value))
      .toUpperCase()
  } catch (error) {
    console.error(error);
  }
}

function calculate() {
  try {
    calculateInputResult.value = getResult(calculateSelectOperator.value, 
      BigInt(calculateInputValue1.value), BigInt(calculateInputValue2.value))
      .toString(getNumeralSystem(calculateSelectValue2.value))
      .toUpperCase()
  } catch (error) {
    console.error(error);
  }
}

function getNumeralSystem(selectValue) {
  if (selectValue == "bin") {
    return 2;
  }
  else if (selectValue == "oct") {
    return 8;
  }
  else if (selectValue == "dec") {
    return 10;
  }
  else if (selectValue == "hex") {
    return 16;
  }
}

function getResult(selectValue, value1, value2) {
  if (selectValue == "plus") {
    return value1 + value2;
  }
  else if (selectValue == "minus") {
    return value1 - value2;
  }
  else if (selectValue == "multiply") {
    return value1 * value2;
  }
  else if (selectValue == "divide") {
    return value1 / value2;
  }
}