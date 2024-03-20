import { describe, expect, it, beforeAll, beforeEach } from "vitest";
import { clone } from "../utils/arrays";

describe("clones an array", () => {
	const a = ["i", "like", "unit", "tests"];
	// const b = clone(a);
	let b: any[]= [];
	beforeAll(() => {
		 b = clone(a); //beforeAll kör en gång beforeEach kör i varje kod
	})

	beforeEach(() => {
		console.log("Iseeyou")
	});

	//kollar om längden är samma i a och b
	it("contains the same number of items", () => {
		// const a = ["i", "like", "unit", "tests"];
		// const b = clone(a);
		expect(b.length).toBe(a.length);
	});

	it("contains the same items", () => {
		// const a = ["i", "like", "unit", "tests"];
		// const b = clone(a);

		expect(b).toEqual(a);
	});

	it("is not the same array", () => {
		expect(b).not.toBe(a);
	})
});
