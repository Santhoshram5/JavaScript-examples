const explain = require('./node_modules/testing-lib/test');
const areaofcircle = require('./Area-of-circle');
explain("Area of circle with radius 5").it('should be 78.756292').expect(areaofcircle(5)).toBe(78.756292);