const explain = require('./node_modules/testing-lib/test');
const squareArea = require('./Area-of-square');
explain("Area of square of side 5").it('should be 25').expect(squareArea(5)).toBe(25);