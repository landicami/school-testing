describe("Home Page", () => {
	beforeEach(() => {
		cy.visit("/");

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

	context("Course section", () => {
		it.only("shoud get the first course", () => {
			cy.getByData("course-0").find("a").contains("Get started");
			cy.getByData("course-0")
			.find("a")
			.eq(-1)
			.click()
			cy.location("pathname").should("equal", "/testing-your-first-application")


		})


	})
});
