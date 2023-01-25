
/**
 * @param {int} a
 * @param {int} b
 * @return {int} a + b
 */
function addition(a, b) {
  return a + b;
}

/**
 * @param {int} a
 * @param {int} b
 * @return {int} a - b
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * @param {int} a
 * @param {int} b
 * @return {int} a * b
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * @param {int} a
 * @param {int} b
 * @return {int} a / b
 */
function division(a, b) {
  return a / b;
}

/**
 * @param {*} a
 * @param {*} b
 * @param {*} operator (+, -, * , /)
 * takes two numbers and an operator to do a sum
 */
function operate(a, b, operator) {
  if (operator == '+') {
    addition(a, b);
  } else if (operator == '-') {
    subtraction(a, b);
  } else if (operator == '*') {
    multiplication(a, b);
  } else if (operator == '/') {
    division(a, b);
  }
}

/**
 * Displays text on the calculator screen
 * @param {*} displayText - the text to display on the screen
 */
function display(displayText) {
  const displayScreen = document.querySelector('#display');
  displayScreen.innerHTML = displayText;
}

display(666);
