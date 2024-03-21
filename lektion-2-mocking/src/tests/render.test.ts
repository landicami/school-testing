import { Window } from "happy-dom";
import { afterEach, describe, it, expect } from "vitest"
import { transformTodosToHtml } from "../utils/render";
import dummyTodos from "./data/todos";

const window = new Window();
const document = window.document;
// const { document } = new Window();

// find the first finished todo
// const finishedTodo = dummyTodos.find(todo => todo.completed) ?? {
// 	...dummyTodos[0],   // id: 1, title: "", completed: false
// 	completed: true,
// };

// find the first unfinished todo
// const unfinishedTodo = dummyTodos.find(todo => !todo.completed) ?? {
// 	...dummyTodos[0],   // id: 1, title: "", completed: true
// 	completed: false,
// };

describe("render todos", () => {
	afterEach(() => {
		document.body.innerHTML = "";
	});

	it("outputs empty list when no todos exist", () => {
		const html = transformTodosToHtml([]);
		expect(html).toBe("");
	});

	it("outputs a list with one todo", () => {
		const todoLis = transformTodosToHtml( [dummyTodos[0]] ); // ska skicka in en array av todos därför brackets

		document.body.innerHTML = `<ul>${todoLis}</ul>`;

		const todoliElwTodo = document.querySelectorAll("li.todo");
		expect(todoliElwTodo).toHaveLength(1);

	});

	it("outputs a list with one completed todo", () => {
		const findCompleted = dummyTodos.find((todo) => todo.completed === true);
		if(findCompleted){

		const todoLis = transformTodosToHtml( [findCompleted] ); // ska skicka in en array av todos därför brackets

		document.body.innerHTML = `<ul>${todoLis}</ul>`;

		const todoliElwTodo = document.querySelectorAll("li.todo.completed");
		expect(todoliElwTodo).toHaveLength(1);
	} else {
		console.log("Could not find a tato");
	}
	// it("outputs a list with one completed todo", () => {
	// 	const todoLIs = transformTodosToHtml([ finishedTodo ]);
	// 	document.body.innerHTML = `<ul>${todoLIs}</ul>`;

	// 	expect(document.querySelectorAll("li.todo.completed")).toHaveLength(1);
	// });
	});

	it("outputs a list with many todos", () => {
		const allTodos = transformTodosToHtml(dummyTodos)
		document.body.innerHTML = `<ul>${allTodos}</ul>`;
		const manyTodosInDom = document.querySelectorAll("li");
		expect(manyTodosInDom).toHaveLength(dummyTodos.length);
	});

	it("outputs a list with one not completed todo", () => {
		const findNotCompleted = dummyTodos.find((todo) => todo.completed === false);
		// console.log(filterNotCompleted);
		if(findNotCompleted){
		const callNotCompletedTodo = transformTodosToHtml( [findNotCompleted]);
		console.log(callNotCompletedTodo);
		document.body.innerHTML = `<ul>${callNotCompletedTodo}</ul>`;

		expect(document.querySelectorAll("li")).toHaveLength(1);
	}
	});
});
