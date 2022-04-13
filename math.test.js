const MyMath = require('./math');

test('5 + 6 = 11', () => {
	expect(MyMath.sum(5, 6)).toBe(11);
});
