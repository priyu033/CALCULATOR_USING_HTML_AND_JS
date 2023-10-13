// JavaScript code for the calculator

const display = document.getElementById('display');

function insertNumber(number) {
  display.value += number;
}

function insertOperator(operator) {
  display.value += operator;
}

function calculate() {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
}

function clear() {
  display.value = '0';
}
