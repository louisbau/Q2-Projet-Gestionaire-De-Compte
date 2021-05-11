describe('test sign up', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.url().should('include', '/')
    })
    it('test sign up page', function () {
        cy.contains('Don\'t have an account? Sign Up').click()
        cy.url().should('include', '/signUp')
    })
})

