export function zfill(digit: number, value: number | string): string {
	if (typeof digit === 'number') {
		return zfill(digit, String(value));
	} else {
		return "A";
	}
}