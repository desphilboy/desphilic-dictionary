import { wls } from './worstLoosingStreak.js';

describe('works as spec', () => {
	it('works for [[6,2,5,3]', () => {
		expect(wls([6, 2, 5, 3])).toBe(4);
	});

	it('works for [1,8,4,2,10,3,2]', () => {
		expect(wls([1, 8, 4, 2, 10, 3, 2])).toBe(8);
	});

	it('works for [1,8,4,2,10,3,2]', () => {
		expect(wls([2, 3, 6, 5, 1, 7])).toBe(5);
	});
});
