
export function arrwith(arr: Array<any>): Map<keyof (typeof arr), number> {
	let result: Map<keyof (typeof arr), number> = new Map<keyof (typeof arr), number>();

	for (let i = 0; i < arr.length; i++) {
		if (result.get(arr[i]) !== undefined) {
			result.set(arr[i], result.get(arr[i])! + 1);
		}
		else
			result.set(arr[i], 1);
	}

	return result;
}