/**
 * @param {int} a
 * @param {int} b
 * @return {int} a + b
 */
function addition(a, b) {
  additionResult = a + b;
  console.log('addition result:' + additionResult);
  return additionResult;
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
 * @return {int} result of operation
 * takes two numbers and an operator to do an operation
 */
function operate(a, b, operator) {
  console.log(operator);
  if (operator == '+') {
    result = addition(a, b);
  } else if (operator == '-') {
    result = subtraction(a, b);
  } else if (operator == '*') {
    result = multiplication(a, b);
  } else if (operator == '/') {
    result = division(a, b);
  }
  return result;
}

/**
 * Displays text on the calculator screen
 * @param {*} displayText - the text to display on the screen
 */
function display(displayText) {
  const displayScreen = document.querySelector('#display');
  displayScreen.innerText += displayText;
}

/**
 * Used to read the calculators display
 * @return {int} the current text on the calculators display
 */
function readDisplay() {
  const displayScreen = document.querySelector('#display');
  console.log(displayScreen.innerText);
  return Number(displayScreen.innerText);
}

/**
 * Clears the calculators display
 */
function clearDisplay() {
  const displayScreen = document.querySelector('#display');
  displayScreen.innerText = '';
}

/**
 * Clears the calculators display and resets all variables to initial state
 */
function clearAll() {
  clearDisplay();
  firstNumber = 0;
  secondNumber = 0;
  total = 0;
  operator = '';
  operationNumber = 0;
}


let firstNumber = 0;
let secondNumber = 0;
let total = 0;
let operator = '';
let operationNumber = 0;


// Button event listeners
const button7 =
document.querySelector('#button7');
button7.addEventListener('click', function() {
  display(7);
});

const button8 =
document.querySelector('#button8');
button8.addEventListener('click', function() {
  display(8);
});

const button9 =
document.querySelector('#button9');
button9.addEventListener('click', function() {
  display(9);
});

const buttonDivision =
document.querySelector('#buttonDivision');
buttonDivision.addEventListener('click', function() {
  // TODO
});

const buttonClear =
document.querySelector('#buttonClear');
buttonClear.addEventListener('click', function() {
  clearAll();
});

const button4 =
document.querySelector('#button4');
button4.addEventListener('click', function() {
  display(4);
});

const button5 =
document.querySelector('#button5');
button5.addEventListener('click', function() {
  display(5);
});

const button6 =
document.querySelector('#button6');
button6.addEventListener('click', function() {
  display(6);
});

const buttonMultiplication =
document.querySelector('#buttonMultiplication');
buttonMultiplication.addEventListener('click', function() {
// TODO
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

const buttonSubtraction =
document.querySelector('#buttonSubtraction');
buttonSubtraction.addEventListener('click', function() {
  // TODO
});

const button0 =
document.querySelector('#button0');
button0.addEventListener('click', function() {
  display(0);
});

// TODO get decimal working
/* const buttonDot =
document.querySelector('#buttonDot');
buttonDot.addEventListener('click', function() {
  display(,);
}); */

const buttonEquals =
document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function() {
  secondNumber = readDisplay();
  clearDisplay();
  total = (operate(firstNumber, secondNumber, operator));
  display(total);
});

const buttonAddition =
document.querySelector('#buttonAddition');
buttonAddition.addEventListener('click', function() {
  operator = '+';
  firstNumber = readDisplay();
  clearDisplay();
});

