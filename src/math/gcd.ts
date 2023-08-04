export function base_gcd(a: number, b: number): number {
	if (a % b == 0) return b;
	else return base_gcd(b, a % b);
}

export function gcd(): number | undefined {
	if (arguments.length < 2) return undefined;

	let result = base_gcd(arguments[0], arguments[1]);
	for (let i = 2; i < arguments.length; i++) {
		result = base_gcd(result, arguments[i]);
	}

	return result;
}