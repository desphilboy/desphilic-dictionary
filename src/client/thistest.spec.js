import { thistest } from './thistest.js';

describe('is_Palindrome', () => {
	it('eye is palindrome', () => {
		expect(thistest('eye')).toBe(true);
	});

	it('e1ye is not palindrome', () => {
		expect(thistest('e1ye')).toBe(false);
	});

	it('manjoooojnam is not palindrome', () => {
		expect(thistest('manjoooojnam')).toBe(true);
	});
});
