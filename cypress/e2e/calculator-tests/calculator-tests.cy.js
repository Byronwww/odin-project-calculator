describe('calculator app', () => {
  beforeEach(() => {
    cy.visit('../../../index.html')
  })
  
  it('displays all calculator buttons', () => {
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
  
  it('basic calculations: 1 + 1 = 2' , () => {
    cy.get('#button1').click()
    cy.get('#buttonAddition').click()
    cy.get('#button1').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '2')})

it('basic calculations: 10 + 10 = 20' , () => {
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonAddition').click()
    cy.get('#button1').click()
    cy.get('#button0').click()
    cy.get('#buttonEquals').click()
    cy.get('#display').should('have.text', '20')})
})