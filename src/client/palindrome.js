export const is_palindrome = my_string =>
	my_string
		.split('')
		.reverse()
		.join('') === my_string;
