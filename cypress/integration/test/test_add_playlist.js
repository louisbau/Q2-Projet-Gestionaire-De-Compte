describe('test add game', () => {
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
    it('test add game', function () {
        cy.get('.MuiFab-label > .MuiSvgIcon-root').as('button edit').click()
        cy.get('.MuiListItemIcon-root > .MuiSvgIcon-root').as('button add game').click()
        cy.get('input[id=Addurl]').type("test")
        cy.get('input[id=Addplaylist]').type("test")
        cy.get(':nth-child(9) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > :nth-child(2) > .MuiButton-label').as('button_add_game').click()

    })
})

