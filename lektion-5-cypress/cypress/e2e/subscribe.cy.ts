import { faker } from "@faker-js/faker";

describe("Newsletter subscribe", () => {
	const email = faker.internet.email();
	const invalidEmail = "pelle";
	const existingSubscriberEmail = "john@example.com";

	beforeEach(() => {
		// Visit page
		cy.visit("http://localhost:3000")

		// Wait for the app to be fully hydrated and visible
		cy.get("#__next").should("be.visible")
	})

	it("allows users to subscribe to the email list", () => {
		cy.get('[data-test="email-input"]')
			.should("be.visible")
			.type(email)

		cy.getByData("submit-button").click()

		cy.getByData("success-message").contains("Success").contains(email)
	})

	it("displays an error message when the email is invalid", () => {
		cy.getByData("email-input").type(invalidEmail)
		cy.getByData("submit-button").click()
		cy.getByData("success-message").should("not.exist")
	})

	it.only("should not allow users to subscribe twice", () => {
		cy.getByData("email-input").type(existingSubscriberEmail);
		cy.getByData("submit-button").click()
		cy.getByData("server-error-message").contains("Error").contains(existingSubscriberEmail)

	});

});
