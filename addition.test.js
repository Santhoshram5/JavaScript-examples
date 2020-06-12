const explain = require('./node_modules/testing-lib/test');
const reverse = require('./addition');
explain("Addition of 1,2,3").it('should be 6').expect(reverse([1,2,3])).toBe(6);