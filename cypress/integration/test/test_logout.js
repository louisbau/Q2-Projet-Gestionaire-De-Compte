describe('test logout', () => {
    beforeEach(() => {
        //const {username, password} = this.currentUser
        const password = "Admin"
        const email = "bauchau@gmail.com"
        cy.visit('/')
        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}{enter}`)
        //cy.contains('Sign in').click()
        cy.url().should('include', '/index')
    })
    it('test logout', function () {
        cy.contains('Logout').click()
        cy.url().should('include', '/')
    })
})

