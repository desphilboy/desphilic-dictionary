import { is_palindrome } from './palindrome.js';

describe('is_Palindrome', () => {
	it('eye is palindrome', () => {
		expect(is_palindrome('eye')).toBe(true);
	});

	it('e1ye is not palindrome', () => {
		expect(is_palindrome('e1ye')).toBe(false);
	});

	it('manjoooojnam is not palindrome', () => {
		expect(is_palindrome('manjoooojnam')).toBe(true);
	});
});
