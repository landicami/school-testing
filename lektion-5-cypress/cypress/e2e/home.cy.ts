describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");

		// wait for the app to be fully hydrated and visible
		cy.get("#__next").should("be.visible");
	});

	context("Hero section", () => {
		it("the h1 contains the correct text", () => {
			// cy.get('[data-test="hero-heading"]')  // 🫤
			cy.get("h1")
				.should("exist")
				.contains("Testing Next.js Applications with Cypress");
		});

		it("the features on the homepage are correct", () => {
			// Find the first definition term
			cy.get("dt").eq(0).contains("4 Courses");

			cy.get("dt").eq(1).contains("25+ Lessons");

			cy.get("dt").eq(2).contains("Free and Open Source");
		});
	})
});
