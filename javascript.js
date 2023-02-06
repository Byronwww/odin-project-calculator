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
 * @return {int} result of operation
 * takes two numbers and an operator to do an operation
 */
function operate(a, b, operator) {
  if (operator == '+') {
    result = addition(a, b);
  } else if (operator == '-') {
    result = subtraction(a, b);
  } else if (operator == '*') {
    result = multiplication(a, b);
  } else if (operator == '/') {
    result = division(a, b);
  }
  if (result % 1 === 0) {
    return result;
  } else return result.toFixed(2);
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
  secondNumber = 0;
  result = 0;
  operator = '';
  operationNumber = 0;
  displaySummed = false;
  dotExists = false;
}


let secondNumber = 0;
let result = 0;
let operator = '';
let operationNumber = 0;
let displaySummed = false;
let dotExists = false;


/**
 * Handles the logic of numerical button presses
 * @param {int} number number from 0-9
 */
function numberButtonHandling(number) {
  display(number);
  if (displaySummed) {
    clearDisplay();
    display(number);
  }
}

/**
 * Handles the logic of pressing the operator buttons
 * @param {string} operatorButtonPressed + - * /
 */
function operatorButtonHandling(operatorButtonPressed) {
  if (operationNumber == 0) {
    operator = operatorButtonPressed;
    operationNumber++;
    result = readDisplay();
    clearDisplay();
  } else {
    secondNumber = readDisplay();
    result = (operate(result, secondNumber, operator));
    clearDisplay();
    display(result);
    displaySummed = true;
    operator = 'operatorButtonPressed';
  }
  dotExists = false;
}

// Button event listeners
const button7 =
document.querySelector('#button7');
button7.addEventListener('click', function() {
  numberButtonHandling(7);
});

const button8 =
document.querySelector('#button8');
button8.addEventListener('click', function() {
  numberButtonHandling(8);
});

const button9 =
document.querySelector('#button9');
button9.addEventListener('click', function() {
  numberButtonHandling(9);
});

const buttonDivision =
document.querySelector('#buttonDivision');
buttonDivision.addEventListener('click', function() {
  operatorButtonHandling('/');
});

const buttonClear =
document.querySelector('#buttonClear');
buttonClear.addEventListener('click', function() {
  clearAll();
});

const button4 =
document.querySelector('#button4');
button4.addEventListener('click', function() {
  numberButtonHandling(4);
});

const button5 =
document.querySelector('#button5');
button5.addEventListener('click', function() {
  numberButtonHandling(5);
});

const button6 =
document.querySelector('#button6');
button6.addEventListener('click', function() {
  numberButtonHandling(6);
});

const buttonMultiplication =
document.querySelector('#buttonMultiplication');
buttonMultiplication.addEventListener('click', function() {
  operatorButtonHandling('*');
});

const button1 =
document.querySelector('#button1');
button1.addEventListener('click', function() {
  numberButtonHandling(1);
});

const button2 =
document.querySelector('#button2');
button2.addEventListener('click', function() {
  numberButtonHandling(2);
});

const button3 =
document.querySelector('#button3');
button3.addEventListener('click', function() {
  numberButtonHandling(3);
});

const buttonSubtraction =
document.querySelector('#buttonSubtraction');
buttonSubtraction.addEventListener('click', function() {
  operatorButtonHandling('-');
});

const button0 =
document.querySelector('#button0');
button0.addEventListener('click', function() {
  numberButtonHandling(0);
});

const buttonDot =
document.querySelector('#buttonDot');
buttonDot.addEventListener('click', function() {
  if (dotExists == false) {
    display('.');
    dotExists = true;
    if (displaySummed) {
      clearDisplay();
      display('.');
    }
  }
});

const buttonEquals =
document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function() {
  secondNumber = readDisplay();
  clearDisplay();
  result = (operate(result, secondNumber, operator));
  display(result);
  operationNumber = 0;
  displaySummed = true;
});

const buttonAddition =
document.querySelector('#buttonAddition');
buttonAddition.addEventListener('click', function() {
  operatorButtonHandling('+');
});

