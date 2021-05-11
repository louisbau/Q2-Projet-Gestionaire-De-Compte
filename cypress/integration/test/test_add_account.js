describe('test add account on league of legends', () => {
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
    it('test add account lol', function () {
        cy.get('.MuiFab-label > .MuiSvgIcon-root').as('button edit').click()
        //cy.get('.Mui-selected').as('button_lol').click()

        //cy.get(':nth-child(6) > [width="85%"] > .MuiPaper-root > #panel1a-header\n' +
            //'\n').as('button add account')

        cy.get('.MuiAccordionSummary-content').as('button_add_account').click()

        cy.get('input[id=addUsernamefff]').type("test_username")
        cy.get('input[id=addPassword]').type("test_password")
        cy.get('input[id=addDescription]').type("ceci est un test")
        cy.get('form > .MuiButtonBase-root > .MuiButton-label').as('button_add_account2').click()

    })
})

