describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // helpers to grab elements
    const nameInput = () => cy.get('input[name=nameInput]');
    const pizzaSizeInput = () => cy.get('#size-dropdown');
    const toppingsInput = () => cy.get('input[type="checkbox"]');
    const specialTextInput = () => cy.get('input[name=specialText]');
    const submitButton = () => cy.get('button[id="order-button"]');

    it('proper elements are showing', () => {
        nameInput().should('exist');
        pizzaSizeInput().should('exist');
        toppingsInput().should('exist');
        specialTextInput().should('exist');
        submitButton().should('exist');
    })

})