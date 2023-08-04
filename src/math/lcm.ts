const base_gcd: (a: number, b: number) => number = require('./gcd').gcd;

export function base_lcm(a: number, b: number): number {
	return (a * b) / (base_gcd(a, b));
}

export function lcm(): number | undefined {
	if (arguments.length < 2) return undefined;

	let result = base_lcm(arguments[0], arguments[1]);
	for (let i = 2; i < arguments.length; i++) {
		result = base_lcm(result, arguments[i]);
	}

	return result;
}
