describe('test add account', () => {
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
    it('test add account ', function () {
        cy.get('.MuiFab-label > .MuiSvgIcon-root').as('button edit').click()

        cy.get('.MuiAccordionSummary-content').as('button_add_account').click()

        cy.get('input[id=addUsernamefff]').type("test_username")
        cy.get('input[id=addPassword]').type("test_password")
        cy.get('input[id=addDescription]').type("ceci est un test")
        cy.get('form > .MuiButtonBase-root > .MuiButton-label').as('button_add_account2').click()

    })
})

