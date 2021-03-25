const chars = '0123456789abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[]^_{|}~';

export function from(input, radix = chars.length) {
	let index = 0;
	let result = 0;
	let exponent = input.length - 1;
	let item;

	input = input.toLowerCase();
	while (index < input.length) {
		item = chars.indexOf(input[index]);

		// 当前字符的下标大于进制
		if (item > radix) {
			break;
		}

		if (exponent) {
			item *= Math.pow(radix, exponent);
		}

		result += item;
		index += 1;
		exponent -= 1;
	}

	return result;
}

export function to(input, radix = chars.length) {
	const result = [];
	let current = input;

	while (current >= radix) {
		let index = current % radix;

		result.push(chars[index]);
		current = Math.floor(current / radix);
	}

	result.push(chars[current]);

	return result.reverse().join('');
}

export default { from, to }