describe('test connection to index', () => {


    it('test connection', function () {
        const password = "Admin"
        const email = "bauchau@gmail.com"
        cy.visit('/')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}{enter}`)
        //cy.contains('Sign in').click()
        cy.url().should('include', '/index')
    })
})
