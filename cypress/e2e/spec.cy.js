describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('login válido', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.radius').click()
    cy.get('.flash.success').should('contain','You logged into a secure area!')
  })

  it('usuario incorrecto', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("wertwvtw")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.radius').click()
    cy.get('.flash.error').should('contain','Your username is invalid!')
  })

  it('contraseña incorrecta', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("qdeugqegd")
    cy.get('.radius').click()
    cy.get('.flash.error').should('contain','Your password is invalid!')
  })
})
