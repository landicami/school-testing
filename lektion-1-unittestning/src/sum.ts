// add a and b together and return sum 🤯
// export const sum = (a: number, b: number) => {
// 	return a + b;
// }

// add a and b together and return sum 🤯
// export const sum = (a: number, b: number, c = 0) => {
// 	return a + b + c;
// }

// om jag vill ha ett obestämt antal nummer jag vill addera
// kan jag ta ...numbers
//loopar igenom varje nummer och plussar ihop dem
// export const sum = (...numbers: number[]) => {
// 	let sumOfNumbers = 0;
// 	for(let i = 0; i < numbers.length; i++) {
// 		sumOfNumbers += numbers[i];
// 	}
// 	return sumOfNumbers;
// }

// eller använda reduce på arrayen
export const add = (...numbers: number[]) => {
	const sumofNumbers = numbers.reduce( (acc, num) => {
		return acc + num;
	}, 0);
	return sumofNumbers;
}
// return numbers.reduce( (acc, num) => acc + num, 0 );

//funktion för att subtrahera
// export const subtract = (a: number, b: number) => {
// 	// return numbers.reduce( (acc, num) => acc - num, 0 );
// 	return a - b;
// }
// subtract numbers from each other and return sum 🤯
export const subtract = (initialValue: number, ...numbers: number[]) => {
	return numbers.reduce( (acc, num) => acc - num, initialValue );
}

// sub(42)         initialValue = 42   numbers = []
// sub(1342, 5)    initialValue = 1342 numbers = [5]
// sub(1, 2, 3)    initialValue = 1    numbers = [2, 3]
