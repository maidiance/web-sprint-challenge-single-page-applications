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
        it('can select three toppings', () => {
            toppingsInput().get('#mushroom').check();
            toppingsInput().get('#sausage').check();
            toppingsInput().get('#onion').check();
            // reset
            toppingsInput().get('#mushroom').uncheck();
            toppingsInput().get('#sausage').uncheck();
            toppingsInput().get('#onion').uncheck();
        })
        it('can select four toppings', () => {
            toppingsInput().get('#pepperoni').check();
            toppingsInput().get('#mushroom').check();
            toppingsInput().get('#sausage').check();
            toppingsInput().get('#onion').check();
            // reset
            toppingsInput().get('#pepperoni').uncheck();
            toppingsInput().get('#mushroom').uncheck();
            toppingsInput().get('#sausage').uncheck();
            toppingsInput().get('#onion').uncheck();
        })
    })

    describe('Check if user can submit form', () => {
        it('can submit a new pizza without toppings', () => {
            nameInput().type('testOrder01');
            pizzaSizeInput().select('medium');
            submitButton().should('not.be.disabled');
            submitButton().click();
            cy.contains('testOrder01').should('exist');
            // reset
            // we would remove the pizza here!
        })
        it('can submit a new pizza with special instructions', () => {
            nameInput().type('testOrder02');
            pizzaSizeInput().select('large');
            specialTextInput().type('testing purposes');
            submitButton().should('not.be.disabled');
            submitButton().click();
            cy.contains('testOrder02').should('exist');
            // reset
            // we would remove the pizza here!
        })
        it('can submit a new pizza with two toppings', () => {
            nameInput().type('testOrder03');
            pizzaSizeInput().select('jumbo');
            toppingsInput().get('#pepperoni').check();
            toppingsInput().get('#mushroom').check();
            submitButton().should('not.be.disabled');
            submitButton().click();
            cy.contains('testOrder03').should('exist');
        })
    })
})