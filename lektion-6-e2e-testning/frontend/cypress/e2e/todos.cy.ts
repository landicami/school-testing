describe("trying out todos", () => {
	beforeEach(() => {
		cy.visit("/")

	})

	it.skip('should see at least one todo', () => {
		cy.get('#todos').find("li").should("have.length.at.least", 1)
	})

	it.only("create todo form should be empty", () => {
		cy.get('#new-todo-title').should("have.value", "");
	});

	it.skip("can't create a todo without a title", () => {
		cy.get('#new-todo-title').type(" ")
		cy.get('.btn-success').click()
		cy.get('#error')
		.should("be.visible")
		.contains("Title must be at least 3 characters long")
	});

	it.skip("can create a new todo (and see it in the list and clears input)", () => {
		const newTodo = "The new todo"
		cy.get('#new-todo-title').type(newTodo)
		cy.get('.btn-success').click()
		cy.get('#todos').find("li")
		.last()
		.contains(newTodo)
		cy.get('#new-todo-title').should("be.empty");
	});

	it.skip("can type in the create todo form and then reset the form", () => {
		cy.get('#new-todo-title').type("Create a new todo")
		cy.get('.btn-warning').click();
	});
})
