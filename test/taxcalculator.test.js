import { assert } from 'chai';
import calculateTax from '../taxcalculator.js';

describe('Tax Calculator', () => {
  it('should return 0 for earnings less than 12000', () => {
    assert.equal(calculateTax(10000), 0);
  });

  // it('should return 0 for earnings exactly 12000', () => {
  //   assert.equal(calculateTax(12000), 0);
  // });

  // it('should return 20% of the amount over 12000 for earnings between 12000 and 36000', () => {
  //   assert.equal(calculateTax(20000), 1600); // 20% of (20000 - 12000)
  //   assert.equal(calculateTax(36000), 4800); // 20% of (36000 - 12000)
  // });

  // it('should return 20% of the amount between 12000 and 36000 plus 40% of the amount over 36000 for earnings greater than 36000', () => {
  //   assert.equal(calculateTax(40000), 6400); // 20% of (24000) + 40% of (4000)
  //   assert.equal(calculateTax(50000), 10400); // 20% of (24000) + 40% of (14000)
  // });
});
