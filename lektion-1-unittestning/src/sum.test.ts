//UNIT TESTNING
import { it, expect, describe } from "vitest";
import { add, subtract } from "./sum";

describe("Test addition", () => {
	it("should sum two numbers", () => {
		// const three = sum(1,2);
		expect( add(1,2) ).toBe(3);
	});

	it("adds 1 +2 equals 3", () => {
		expect( add(1,2) ).toBe(3);
		expect( add(1,2) ).not.toBe(4);
	});


	it("should sum three numbers", () => {
		expect( ( add(1, 2, 3)) ).toBe(6);
	});

	it("should sum four numbers", () => {
		expect(add(1, 2, 3, 4)).toBe(10);
	});

});

describe("Test subtraction", () => {
	it("should sub 2 numbers to be a result", () => {
		expect(subtract(10, 5)).toBe(5);
		expect(subtract(5555,222)).toBe(5333);
	});

	it("subtracts tre numbers", () => {
		expect(subtract(4, 1, 1)).toBe(2);
	});

});




