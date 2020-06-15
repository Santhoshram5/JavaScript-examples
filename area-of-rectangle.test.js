const explain = require('./node_modules/testing-lib/test');
const rectangleArea = require('./Area-of-rectangle');
explain("Area of rectangle with length 8 and breadth 7").expect(rectangleArea(8,7)).toBe(56);