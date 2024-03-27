import { afterAll, beforeEach, describe, it, expect } from "vitest";
import * as TodoAPI from "../services/TodoAPI";
import { TodoData } from "../types/Todo";

const deleteAllTodos = async () => {
	// get all todos and then delete them one by one 😩
	const todos = await TodoAPI.getTodos();

	// delete them one by one
	for (let i = 0; i < todos.length; i++) {
		await TodoAPI.deleteTodo(todos[i].id);
	}
}

beforeEach(deleteAllTodos);
afterAll(deleteAllTodos);


describe("TodoAPI", () => {
	it("should return a list", async () => {
		const todos = await TodoAPI.getTodos();
		expect(Array.isArray(todos)).toBe(true); //kolla om det är en array
	});

	it("should create a todo", async () => {
		const todo: TodoData = { title: "My todo", completed: false }
		const createTodo = await TodoAPI.createTodo(todo);
		// expect(createTodo.title).toBe(todo.title);
		// expect(createTodo.completed).toBe(todo.completed);
		// expect(typeof createTodo.id).toBe("number");
		expect(createTodo).toMatchObject({
			id: expect.any(Number), //kommer gå igenom om Id  är ett tal
			title: todo.title,
			completed: todo.completed
		});

	});

	it("should create and then get the todo", async () => {
		const todo = { title: "Antoher todo", completed: false };
		const createtodo = await TodoAPI.createTodo(todo);

		const getTodo = await TodoAPI.getTodo(createtodo.id);

		expect(getTodo).toStrictEqual(createtodo);
		expect(getTodo.id).toBe(createtodo.id);
	});

	it("should create and then find the todo among all todos", async () => {
		const todo = { title: "Antoher todo", completed: false };
		const createtodo = await TodoAPI.createTodo(todo);
		const getTodos= await TodoAPI.getTodos();
		const findtheTodo = getTodos.find(todo => todo.id === createtodo.id);
 		if(findtheTodo){
		expect(findtheTodo.id).toBe(createtodo.id);
		expect(findtheTodo).toStrictEqual(createtodo);
		// expect `createdTodo` to exist in the array `todos`
		//expect(todos).toEqual(expect.arrayContaining([createdTodo]));
		expect(getTodos).toContainEqual(createtodo);

	};
	});

	it("should create and then update the todo", async () => {
		const todo = { title: "Antoher todo", completed: false };
		const createtodo = await TodoAPI.createTodo(todo);

		//await TodoAPI.updateTodo(todo.id, {
		//	completed: !newTodo.completed,
		//});
		const updatedTodo = { title: "Updated todo", completed: !todo.completed };
		const update = await TodoAPI.updateTodo(createtodo.id, updatedTodo);
		expect(update.id).toBe(createtodo.id);
		expect(createtodo.title).not.toBe(update.title);
		expect(update.completed).not.toBe(createtodo.completed);

	});

	it("should create and then delete the todo", async () => {
		const todo = { title: "Deleted todo", completed: false };
		const createtodo = await TodoAPI.createTodo(todo);
		const deletedTodo = await TodoAPI.deleteTodo(createtodo.id);
		const getTodos = await TodoAPI.getTodos();

		expect(getTodos).not.toContainEqual(deletedTodo);
	});
})
