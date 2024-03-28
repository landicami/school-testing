import { faker } from "@faker-js/faker";

describe("Newsletter subscribe", () => {
	const email = faker.internet.email();
	const invalidEmail = "pelle";
	const existingSubscriberEmail = "john@example.com";

	beforeEach(() => {
		// Visit page
		cy.visit("/")

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

	it("should not allow users to subscribe twice", () => {
		cy.getByData("email-input").type(existingSubscriberEmail);
		cy.getByData("submit-button").click()
		cy.getByData("server-error-message")
		.should("be.visible")
		.contains("Error").contains(existingSubscriberEmail)

	})

	it("should not allow subscribing without an emailadress", () => {
		cy.getByData("submit-button").click()
		cy.getByData("error-message")
		.should("be.visible")
		.contains("Email is required")
	})

});
