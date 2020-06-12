const explain = require('./node_modules/testing-lib/test');
const triangleArea = require('./Area-of-traingle');
explain("Area of triangle with base 3 and height 6").it('should be 9').expect(triangleArea(3,6)).toBe(9);