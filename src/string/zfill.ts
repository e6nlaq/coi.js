export function zfill(digit: number, value: number | string): string {
	if (typeof value === 'number') {
		const floor_num: number = Math.floor(value);

		if (value >= 0)
			return zfill(digit + String(value).length - String(floor_num).length, String(value));
		else
			return "-" + zfill(digit + String(value).length - String(floor_num).length, String(0 - value));
	} else {
		digit = Math.floor(digit);

		if (digit <= value.length) return value;
		else {
			return "0".repeat(digit - value.length) + value;
		}
	}
}