const sum = require('./math');

test('5 + 6 = 11', () => {
	expect(sum(5, 6)).toBe(11);
});
