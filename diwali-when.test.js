const explain = require('./node_modules/testing-lib/test');
const findDaysToDiwali = require('./Diwali-when');
explain("Number of days to Diwali").it('should be 154').expect(findDaysToDiwali()).toBe(155);