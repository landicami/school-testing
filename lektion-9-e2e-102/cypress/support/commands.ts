/// <reference types="cypress" />


declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(email: string, password: string): Chainable<Subject>;
    }

}


Cypress.Commands.add('login', (email, password) => {
	cy.visit("/login");
	cy.get("input[type=\"email\"]").type(email)
	cy.get("input[type=\"password\"]").type(password)
	cy.get("[type=\"submit\"]").click()
	cy.wait(1000)
})

/**
		 * Custom command to log out a user.
		 *
		 * @example cy.logout()
		 */
declare namespace Cypress {
	interface Chainable<Subject = any> {
		logout(): Chainable<JQuery<HTMLElement>>
	}
}

Cypress.Commands.add("logout", () => {
	cy.visit("/logout");
	cy.wait(1500);
});
