import { afterEach, beforeEach, describe, expect, it } from "vitest";
import  mockedLocalStorage  from "../mocks/mockedLocalStorage";
import { getTodos, saveTodos } from "../utils/todoStorage";
import { Todo } from "../types/Todo";

// const fakeLocalStorage = mockedLocalStorage();
// console.log(fakeLocalStorage);

// globalThis.localStorage = fakeLocalStorage;
let orginalLocalStorage: any;

const TODO: Todo = {
	id: 1,
	title: "My first todo",
	completed: false,
};

//före varje test vill jag spara ner original och sedan byta ut originalstorage till fejstorage
beforeEach(() => {
	orginalLocalStorage = globalThis.localStorage;

	//replace
	const fakeLocalStorage = mockedLocalStorage();
	globalThis.localStorage = fakeLocalStorage;
});

afterEach(() => {
	//restore localstorage to original
	globalThis.localStorage = orginalLocalStorage;

});

describe("get todos", () => {
	it("returns empty lists of todos",  () => {
		const todos = getTodos();
		expect(todos.length).toBe(0);
	});
});

describe("save todos", () => {
	it("can save a todo", () => {
		//gör först en array av objektet TODO
		const todosArray: Todo[] = [TODO];
		//anropa save todos
		const setTodo = saveTodos(todosArray);
		// förvänta att det blir sucess av arrayen setTodo
		expect(setTodo.success).toBe(true);

	});

	it("can save a todo and then retrieve it", () => {
		//gör först en array av objektet TODO
		const todosArray: Todo[] = [TODO];
		//anropa save todos
		const setTodo = saveTodos(todosArray);
		// förvänta att det blir sucess av arrayen setTodo
		expect(setTodo.success).toBe(true);
		//hämta den nya todoListan
		const newListTodo = getTodos();
		//förvänta dig att den nya listan innehåller din nya TODO
		expect(newListTodo).toEqual([TODO]);
	});
});
