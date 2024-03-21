/**
 * @vitest-environment happy-dom
 */
import { afterEach, describe, expect, it, vi } from "vitest"; //beforeEach
// import  mockedLocalStorage  from "../mocks/mockedLocalStorage";
import { getTodos, saveTodos } from "../utils/todoStorage";
import { Todo } from "../types/Todo";

// const fakeLocalStorage = mockedLocalStorage();
// console.log(fakeLocalStorage);

// globalThis.localStorage = fakeLocalStorage;
// let orginalLocalStorage: any;

const TODO: Todo = {
	id: 1,
	title: "My first todo",
	completed: false,
};

//före varje test vill jag spara ner original och sedan byta ut originalstorage till fejstorage
// beforeEach(() => {
// 	orginalLocalStorage = globalThis.localStorage;

// 	//replace
// 	const fakeLocalStorage = mockedLocalStorage();
// 	globalThis.localStorage = fakeLocalStorage;
// });

// afterEach(() => {
// 	//restore localstorage to original
// 	globalThis.localStorage = orginalLocalStorage;

// });

//clear localstorage efter varje test
afterEach(() => {
	globalThis.localStorage.clear();
})

describe("get todos", () => {
	it("returns empty lists of todos",  () => {
		const getItemsSpy = vi.spyOn(globalThis.localStorage, "getItem");
		const todos = getTodos();

		expect(getItemsSpy).toHaveBeenCalledOnce();
		expect(todos.length).toBe(0);
	});
});

describe("save todos", () => {
	it("can save a todo", () => {
		//register a spy
		const setItemSpy = vi.spyOn(globalThis.localStorage, "setItem")
		//gör först en array av objektet TODO
		const todosArray: Todo[] = [TODO];
		//anropa save todos
		const setTodo = saveTodos(todosArray);
		// förvänta att det blir sucess av arrayen setTodo
		expect(setTodo.success).toBe(true);
		expect(setItemSpy).toHaveBeenCalledOnce();

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

		//eller skicka in objektet
		//expect(todos).toContainEqual(TODO);

	});
});
