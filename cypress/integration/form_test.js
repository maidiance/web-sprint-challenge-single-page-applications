describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // helpers to grab elements
    const nameInput = () => cy.get('input[name=nameInput]');
    const pizzaSizeInput = () => cy.get('input[name=sizeDropdown]');
    const toppingsInput = () => cy.get('input[type="checkbox"]');
    const specialInstructionsInput = () => cy.get('input[name=specialInstructions]');
    const submitButton = () => cy.get('button[id="order-button"]');

    it('proper elements are showing', () => {
        nameInput().should('exist');
        pizzaSizeInput().should('exist');
        toppingsInput().should('exist');
        specialInstructionsInput().should('exist');
        submitButton().should('exist');
    })
    
})