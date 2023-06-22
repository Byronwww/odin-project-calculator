describe('calculator app', () => {
  beforeEach(() => {
    cy.visit('../../../index.html')
  })
  
  it('all calculator buttons are correctly labelled', () => {
    // bottom row
    cy.get('#button0').should('have.text', '0')
    cy.get('#buttonDot').should('have.text', ' . ')
    cy.get('#buttonEquals').should('have.text', '=')
    cy.get('#buttonAddition').should('have.text', '+')

    // second from bottom row
    cy.get('#button1').should('have.text', '1')
    cy.get('#button2').should('have.text', '2')
    cy.get('#button3').should('have.text', '3')
    cy.get('#buttonSubtraction').should('have.text', '-')

    // third from bottom row
    cy.get('#button4').should('have.text', '4')
    cy.get('#button5').should('have.text', '5')
    cy.get('#button6').should('have.text', '6')
    cy.get('#buttonMultiplication').should('have.text', 'x')

    // top row
    cy.get('#button7').should('have.text', '7')
    cy.get('#button8').should('have.text', '8')
    cy.get('#button9').should('have.text', '9')
    cy.get('#buttonDivision').should('have.text', '÷')
    cy.get('#buttonClear').should('have.text', 'C')
  })

  it('has a display with a 0 on load', () => {
    cy.get('#display').exists
    cy.get('#display').should('have.text', '0')
  })

  it('each number shows on screen when the corresponding button is clicked and the C button clears the display', () => {
    cy.get('#button1').click()
    cy.get('#display').should('have.text', '1')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button2').click()
    cy.get('#display').should('have.text', '2')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button3').click()
    cy.get('#display').should('have.text', '3')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button5').click()
    cy.get('#display').should('have.text', '5')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button6').click()
    cy.get('#display').should('have.text', '6')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button7').click()
    cy.get('#display').should('have.text', '7')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button8').click()
    cy.get('#display').should('have.text', '8')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button9').click()
    cy.get('#display').should('have.text', '9')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#button0').click()
    cy.get('#display').should('have.text', '0')
    cy.get('#buttonClear').click()
    cy.get('#display').should('have.text', '0')
  })
  
  it('Basic Calculations - Single Integer - Addition (1 + 2 = 3)', () => {
    cy.get('#button1').click()
    cy.get('#buttonAddition').click()
    cy.get('#button2').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '3')})

  it('Basic Calculations - Single Integer - Subtraction (3 - 1 = 2)', () => {
    cy.get('#button3').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#button1').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '2')})

  it('Basic Calculations - Single Integer - Division (6 / 3 = 2)', () => {
    cy.get('#button6').click()
    cy.get('#buttonDivision').click()
    cy.get('#button3').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '2')})


  it('Basic Calculations - Single Integer - Multiplication (4 * 2 = 8)', () => {
    cy.get('#button4').click()
    cy.get('#buttonMultiplication').click()
    cy.get('#button2').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '8')})

  it('Basic Calculations - Larger Integers - Addition (12 + 23 = 35)', () => {
    cy.get('#button1').click()
    cy.get('#button2').click()
    cy.get('#buttonAddition').click()
    cy.get('#button2').click()
    cy.get('#button3').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '35')})


  it('Basic Calculations - Larger Integers - Subtraction (36 - 15 = 21)', () => {
    cy.get('#button3').click()
    cy.get('#button6').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#button1').click()
    cy.get('#button5').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '21')})

  it('Basic Calculations - Larger Integers - Division (999 / 9 = 111)', () => {
    cy.get('#button9').click()
    cy.get('#button9').click()
    cy.get('#button9').click()
    cy.get('#buttonDivision').click()
    cy.get('#button9').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '111')})

  it('Basic Calculations - Larger Integers - Multiplication (10 x 99 = 990)', () => {
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonMultiplication').click()
    cy.get('#button9').click()
    cy.get('#button9').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '990')})

  it('Basic Calculations - Decimals - Addition (1.2 + 2.3 = 3.5)', () => {
    cy.get('#button1').click()
    cy.get('#buttonDot').click()
    cy.get('#button2').click()
    cy.get('#buttonAddition').click()
    cy.get('#button2').click()
    cy.get('#buttonDot').click()
    cy.get('#button3').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '3.5')})
  
  it('Basic Calculations - Decimals - Subtraction (3.6 - 1.5 = 2.1)', () => {
    cy.get('#button3').click()
    cy.get('#buttonDot').click()
    cy.get('#button6').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#button1').click()
    cy.get('#buttonDot').click()
    cy.get('#button5').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '2.1')})

  it('Basic Calculations - Decimals - Division (99.9 / 2 = 49.95)', () => {
    cy.get('#button9').click()
    cy.get('#button9').click()
    cy.get('#buttonDot').click()
    cy.get('#button9').click()
    cy.get('#buttonDivision').click()
    cy.get('#button2').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '49.95')})

  it('Basic Calculations - Decimals - Multiplication (10.2 x 99.2 = 1011.84)', () => {
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonDot').click()
    cy.get('#button2').click()
    cy.get('#buttonMultiplication').click()
    cy.get('#button9').click()
    cy.get('#button9').click()
    cy.get('#buttonDot').click()
    cy.get('#button2').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '1011.84')})

  it('Chaining Equations - Addition (1 + 2 + 3 = 6 + 4 + 5 = 15)', () => {
    cy.get('#button1').click()
    cy.get('#buttonAddition').click()
    cy.get('#button2').click()
    cy.get('#buttonAddition').click()
    cy.get('#display').should('have.text', '3')
    cy.get('#button3').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '6')
    cy.get('#buttonAddition').click()
    cy.get('#button4').click()
    cy.get('#buttonAddition').click()
    cy.get('#display').should('have.text', '10')
    cy.get('#button5').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '15')})


  it('Chaining Equations - Subtraction (100 - 1 - 9 = 90 - 20 - 5 = 65) ', () => {
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#button0').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#button1').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#button9').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '90')
    cy.get('#buttonSubtraction').click()
    cy.get('#button2').click()
    cy.get('#button0').click()
    cy.get('#buttonSubtraction').click()
    cy.get('#display').should('have.text', '70')
    cy.get('#button5').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '65')})

})