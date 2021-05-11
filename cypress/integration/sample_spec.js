describe('My First Test', () => {
    it('finds the page login', () => {
        cy.visit('/')
        cy.contains('Sign in')
    })
})

