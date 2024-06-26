describe("trying out todos", () => {


	context("inital state", () => {
		beforeEach(() => {
			// cy.intercept("GET", "http://localhost:3001/todos", [
			// 	{
			// 		id: 1337, title: "I like todos", completed: false
			// 	},
			// ])
			cy.intercept("GET", "http://localhost:3001/todos", {
				fixture: "todos.json",
			}).as("getTodos")

			cy.visit("/")

		})

		it.only("should see two mocked todo", () => {
			cy.wait("@getTodos")
			cy.get("#todos").find("li").should("have.length", 2);

			cy.get("#todos").find("li").first().should("have.class", "completed").contains("My first todo");

		});

		it("should not show the error dialog", () => {
			cy.get("#error").should("not.be.visible");
		});
	});

	// it.skip('should see at least one todo', () => {
	// 	cy.get('#todos').find("li").should("have.length.at.least", 1)
	// })
	context("create todo", () => {
		beforeEach(() => {
			cy.visit("/")

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

		it.skip("can create a new todo (and see it in the list and clears input)", () => {
			const newTodo = "The new todo"
			cy.get('#new-todo-title').type(newTodo)
			// cy.get('.btn-success').click()
			cy.get("[type=\"submit\"]").click();

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
			// cy.get('.btn-warning').contains("Reset").click();
			cy.get("[type=\"reset\"]").click();

			cy.get('#new-todo-title').should("have.value", "");

		});
	})
})
