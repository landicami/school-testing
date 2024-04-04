/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
	  getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
	}

  }

declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(email: string, password: string): Chainable<Subject>;
    }
}


  Cypress.Commands.add("getByData", (selector) => {
	return cy.get(`[data-test=${selector}]`)
  })

  Cypress.Commands.add('login', (email, password) => {
		cy.get("input[type=\"email\"]").type(email)
		cy.get("input[type=\"password\"]").type(password)
		cy.get("[type=\"submit\"]").click()
	})

