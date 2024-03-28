describe("Newsletter subscribe", () => {
	beforeEach(() => {
		// Visit page
		cy.visit("http://localhost:3000");

		// Wait for the app to be fully hydrated and visible
		cy.get("#__next").should("be.visible");
	});

	it("allows users to subscribe to the email list", () => {
		cy.get('[data-test="email-input"]')
			.should("be.visible")
			.type("landin@best.se")

		cy.get('[data-test="submit-button"]').click();

		cy.get('[data-test="success-message"]').contains("Success").contains("landin@best.se")
	});
});
