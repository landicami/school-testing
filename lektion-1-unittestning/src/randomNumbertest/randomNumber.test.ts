import { it, expect } from "vitest";
import { getRandomNumber } from "./randomNumber";

it("generates a random number between 1-10", () => {
	const randomNumber = getRandomNumber(10);

	expect(randomNumber).toBeGreaterThanOrEqual(1);
	expect(randomNumber).toBeLessThanOrEqual(10);
});

it("generates a random number between 1-50", () => {
	const randomNumber = getRandomNumber(50);

	expect(randomNumber).toBeGreaterThanOrEqual(1);
	expect(randomNumber).toBeLessThanOrEqual(50);
});

it("generates a random number between 1-max", () => {
	const max = 100
	const randomNumber = getRandomNumber(max);

	expect(randomNumber).toBeGreaterThanOrEqual(1);
	expect(randomNumber).toBeLessThanOrEqual(max);
});

//loopa tio gånger och få ut tio tal
