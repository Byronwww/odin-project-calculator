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
function clear() {
  const displayScreen = document.querySelector('#display');
  displayScreen.innerText = '';
}


let total = 0;
let secondNumber = 0;
let operator = '';


// Button event listeners

const buttonAddition =
document.querySelector('#buttonAddition');
buttonAddition.addEventListener('click', function() {
  total = readDisplay();
  operator = '+';
  clear();
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
  total = readDisplay();
  operator = '-';
  clear();
});

const buttonClear =
document.querySelector('#buttonClear');
buttonClear.addEventListener('click', function() {
  clear();
});

const buttonEquals =
document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function() {
  secondNumber = readDisplay();
  clear();
  display(operate(total, secondNumber, operator));
});

