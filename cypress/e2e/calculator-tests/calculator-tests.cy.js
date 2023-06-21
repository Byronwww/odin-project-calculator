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
  
  it('basic calculations: 1 + 1 = 2', () => {
    cy.get('#button1').click()
    cy.get('#buttonAddition').click()
    cy.get('#button1').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '2')})

it('basic calculations: 10 + 10 = 20', () => {
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonAddition').click()
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '20')})
})