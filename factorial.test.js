const explain = require('./node_modules/testing-lib/test');
const factorial = require('./Factorial');
explain("Factorial of 5").it('should be 120').expect(factorial(5)).toBe(120);