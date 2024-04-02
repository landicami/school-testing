describe("trying out todos", () => {
	beforeEach(() => {
		cy.visit("/")

	})

	it.skip('should see at least one todo', () => {
		cy.get('#todos').find("li").should("have.length.at.least", 1)
	})

	it.skip("create todo form should be empty", () => {
		cy.get('#new-todo-title').should("have.value", "");
	});

	it.skip("can't create a todo without a title", () => {
		// cy.get('#new-todo-title').type(" ")

		cy.get('.btn-success').contains("Create").click()
		cy.get('#error')
		.should("be.visible")
		.contains("Title cannot be empty")
	});

	it.only("can create a new todo (and see it in the list and clears input)", () => {
		const newTodo = "The new todo"
		cy.get('#new-todo-title').type(newTodo)
		cy.get('.btn-success').click()
		cy.wait(1300)
		cy.get('#todos').find("li")
		.last()
		.contains(newTodo)
		cy.get('#new-todo-title').should("have.value", "");
	});

	// it.skip( även köra cy.wait
	// 	"can create a new todo (and see it in the list and clears input)",
	// 	{ defaultCommandTimeout: 6000 }, () => {
	// 		const todoTitle = "Too many todos, did not read";

	// 		// type a todo title and submit form
	// 		cy.get("#new-todo-title").type(todoTitle);
	// 		cy.get("[type=\"submit\"]").click();

	// 		// expect that a todo with the title exists in the list
	// 		cy.get("#todos").find("li").last().contains(todoTitle);

	// 		// expect input to be empty
	// 		cy.get("#new-todo-title").should("have.value", "");
	// });

	it.skip("can type in the create todo form and then reset the form", () => {
		cy.get('#new-todo-title').type("Create a new todo")
		cy.get('.btn-warning').click();
	});
})
