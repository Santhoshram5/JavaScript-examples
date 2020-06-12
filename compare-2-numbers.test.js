const explain = require('./node_modules/testing-lib/test');
const compare = require('./Comparsion-number');
explain("Based on comparison a=6 with b=3").it('should be a is greater').expect(compare(6,3)).toBe('a is greater');