describe('test contact', () => {
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
    it('test page contact', function () {
        cy.get('.MuiToolbar-root > :nth-child(1) > .MuiButtonBase-root').as('menubar_boutton').click()
        cy.contains('Contact').click()
        cy.url().should('include', '/contact')
    })
    /*it('test submit contact', function () {
        cy.get('input[id=email]')
        cy.get('input[id=textarea]')

        cy.get('form > .MuiButtonBase-root').as('submit_button').click()
        cy.url().should('include', '/...')
    })*/
})

