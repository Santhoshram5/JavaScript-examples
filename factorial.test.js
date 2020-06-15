const explain = require('./node_modules/testing-lib/test');
const factorial = require('./Factorial');
explain("Factorial of 5").expect(factorial(5)).toBe('');
explain("Factorial of 3").expect(factorial(3)).toBe(6);
explain("Factorial of 4").expect(factorial(4)).toBe(12);
explain("Factorial of 6").expect(factorial(6)).toBe(12);