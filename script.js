let displayValue = '0';

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function operate(operator) {
  displayValue += ` ${operator} `;
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
