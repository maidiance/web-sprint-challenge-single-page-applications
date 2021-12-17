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

    describe('Visit the site; check for disabled submit button', () => {
        it('can navigate tot he site', () => {
            cy.url().should('include', 'localhost');
        })
        it('submit button starts out disabled', () => {
            submitButton.apply().should('be.disabled');
        })
    })

    describe('Check text input functionality', () => {
        it('can type in the text boxes', () => {
            nameInput()
                .should('have.value', '')
                .type('test')
                .should('have.value', 'test');
            specialTextInput()
                .should('have.value', '')
                .type('testing')
                .should('have.value', 'testing');
            // reset
            nameInput().clear();
            specialTextInput().clear();
        })
    })

    describe('Check multiple toppings', () => {
        it('can select two toppings', () => {
            toppingsInput().get('#sausage').check();
            toppingsInput().get('#onion').check();
            // reset
            toppingsInput().get('#sausage').uncheck();
            toppingsInput().get('#onion').uncheck();
        })
    })
})