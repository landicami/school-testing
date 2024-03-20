//min egna version av localstorage som jag använder till mina tester

const storage = new Map();

export default () => {
	return {
		getItem: (key: string) => {
			return storage.get(key);
		},

		setItem: (key: string, value: string) => {
			return storage.set(key, value);
		},

		length: storage.size, // wont be updated

		clear: () => {
			return storage.clear;
		},

		key: () => null, //wont work either and is not used in our map

		removeItem: (key: string) => {
			return storage.delete(key);
		},
	}
}
