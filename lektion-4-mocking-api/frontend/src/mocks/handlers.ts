import { http, HttpResponse, PathParams } from "msw";
import { Todo, TodoData } from "../types/Todo";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//Skapa en testtodoarray för att använda den gentemot apiet
const dummyTodos: Todo[] = [
	{ id: 1, title: "My first todo", completed: false},
	{ id: 2 , title: "My second todo", completed: true}
];

type CreateTodoRequestBody = TodoData;
type UpdateTodoRequestBody = Partial<TodoData>;


export const handlers = [
	// Mock get all todos
	// GET http://localhost:3001/todos
	http.get(BASE_URL + "/todos", () => {
		console.log("Intercepted GET /todos");
		return HttpResponse.json(dummyTodos, { status: 200 });
	}),

	// Mock get single todo
	// GET http://localhost:3001/todos/:todoId
	http.get<PathParams, Todo>(BASE_URL + "/todos/:todoId", ({ params }) => {
		const payloadId = Number(params.todoId);
//             ^?
		console.log(payloadId);

		// Get the todo ID from the request
		const findtheTodo = dummyTodos.find(todo => todo.id === payloadId);
		if(!findtheTodo){
			return HttpResponse.json({}, { status: 404} ); // didnt find payload ID
		}
		console.log(dummyTodos.length)

		return HttpResponse.json(findtheTodo, { status: 200 });
		// Check if a todo with that ID exists

		// If not, respond with empty object and HTTP 404 Not Found

		// Otherwise, respond with the todo with the corresponding ID

	}),

	// Mock create single todo
	// POST http://localhost:3001/todos
	http.post<PathParams, CreateTodoRequestBody>(BASE_URL + "/todos", async ({ request }) => {
		// Get POST body
		const payload = await request.json();  // { "title": "🐎 Jak er snab hest", "completed": true }
//         ^?
		if (!payload) {
			return HttpResponse.json({}, { status: 400 }); // not find
		}

		// Find the next available id
		const id = Math.max( 0, ...dummyTodos.map(todo => todo.id) ) + 1;

		// Create our new dummy todo
		const todo: Todo = {
			id,
			title: payload.title,
			completed: payload.completed,
		};

		dummyTodos.push(todo);
		console.log("Could Post a todo", dummyTodos.length);

		return HttpResponse.json(todo, { status: 201 }); // created
	}),

	// Mock update todo
	// PATCH http://localhost:3001/todos/:todoId
		http.patch<PathParams, UpdateTodoRequestBody>(BASE_URL + "/todos/:todoId", async ({params, request}) => {
		const todoId = Number(params.todoId);

		const payload = await request.json();

		const todo = dummyTodos.find(todo => todo.id === todoId);
		if(!todo){
			return HttpResponse.json({}, { status: 404} ); // didnt find payload ID
		};

		todo.title = payload.title  ?? todo.title;
		todo.completed = payload.completed ?? todo.completed;
		return HttpResponse.json(todo);

		}),

	// Mock delete todo
	// DELETE http://localhost:3001/todos/:todoId
	http.delete(BASE_URL + "/todos/:todoId", ({ params }) => {
		// Get the todo ID from the request
		const todoId = Number(params.todoId);

		// Check if a todo with that ID exists
		const todoIndex = dummyTodos.findIndex(todo => todo.id === todoId);

		// If not, respond with empty object and HTTP 404 Not Found
		if (todoIndex === -1) {
			// This is not the todo you are looking for
			return HttpResponse.json({}, { status: 404 });
		}

		// Remove todo from the dummyTodos array
		dummyTodos.splice(todoIndex, 1);

		return HttpResponse.json({});
	}),
];
