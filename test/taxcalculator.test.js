import { assert } from 'chai';
import calculateTax from '../taxcalculator.js';

describe('Tax Calculator', () => {
  it('should return 0 for earnings less than 12000', () => {
    assert.equal(calculateTax(10000), 0);
  });
});
