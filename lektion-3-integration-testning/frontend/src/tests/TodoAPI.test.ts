import { describe, it, expect } from "vitest";
import * as TodoAPI from "../services/TodoAPI";
import { TodoData } from "../types/Todo";

describe("TodoAPI", () => {
	it("should return a list", async () => {
		const todos = await TodoAPI.getTodos();
		expect(Array.isArray(todos)).toBe(true); //kolla om det är en array
	});

	it("should create a todo", async () => {
		const todo: TodoData = { title: "My todo", completed: false }
		const createTodo = await TodoAPI.createTodo(todo);
		console.log(createTodo);
		expect(createTodo.title).toBe(todo.title);

	});

	it.todo("should create and then get the todo");

	it.todo("should create and then find the todo among all todos");

	it.todo("should create and then update the todo");

	it.todo("should create and then delete the todo");
})
