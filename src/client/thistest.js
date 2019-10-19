export const thistest = my_string =>
	my_string
		.split('')
		.reverse()
		.join('') === my_string;
