let a = '';
let b = '';
let operator = '';

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

// Button event listeners
const buttonEquals =
document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function() {
  display('=');
});

const buttonAddition =
document.querySelector('#buttonAddition');
buttonAddition.addEventListener('click', function() {
  console.log(document.querySelector('#display'));
  display('+');
});

const button1 =
document.querySelector('#button1');
button1.addEventListener('click', function() {
  display(1);
});

const button2 =
document.querySelector('#button2');
button2.addEventListener('click', function() {
  display(2);
});

const button3 =
document.querySelector('#button3');
button3.addEventListener('click', function() {
  display(3);
});
