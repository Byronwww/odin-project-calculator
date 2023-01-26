let secondNumber = 0;
let result = 0;
let operator = '';


/**
 * Clears all and updates the display
 */
function clear() {
  secondNumber = 0;
  result = 0;
  operator = '';
  console.log('Clear function - a: ' + firstNumber + ' secondNumber: ' +
  secondNumber + ' operator: ' + operator + ' result: ' + result);
  display(result);
}

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
    subtraction(a, b);
  } else if (operator == '*') {
    multiplication(a, b);
  } else if (operator == '/') {
    division(a, b);
  }
  return result;
}

/**
 * Displays text on the calculator screen
 * @param {*} displayText - the text to display on the screen
 */
function display(displayText) {
  const displayScreen = document.querySelector('#display');
  displayScreen.innerHTML = displayText;
}


function assignNumberAndOperator(operatorSymbol) {
  onScreen = document.querySelector('#display').innerText;
  result = Number(onScreen);
  console.log('result:' + result);
  console.log('operatorSymbol: ' + operatorSymbol);
  operator = operatorSymbol;
}

function assignSecondNumber() {
  onScreen2 = document.querySelector('#display').innerText;
  secondNumber = Number(onScreen2);
  console.log('secondNumber:' + secondNumber);
}

// Button event listeners
const buttonEquals =
document.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', function() {
  assignSecondNumber();
  console.log('result: ' + result);
  console.log('secondNumber: ' + secondNumber);
  console.log('operator: ' + operator);
  result = operate(result, secondNumber, operator);
  display(result);
});

const buttonAddition =
document.querySelector('#buttonAddition');
buttonAddition.addEventListener('click', function() {
  assignNumberAndOperator('+');
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

const buttonClear =
document.querySelector('#buttonClear');
buttonClear.addEventListener('click', function() {
  clear();
});
