import { assert } from 'chai';
import calculateTax from '../taxcalculator.js';

describe('Tax Calculator', () => {
  // it('should return 0 for earnings less than 12000', () => {
  //   assert.equal(calculateTax(10000), 0);
  // });
  // it('should return 0 for earnings exactly 11999', () => {
  //   assert.equal(calculateTax(11999), 0);
  // });

  // it('should return 1600 for earnings of 20000', () => {
  //   assert.equal(calculateTax(20000), 1600);
  // });

  it('should return 4800 for earnings of 36000', () => {
    assert.equal(calculateTax(36000), 4800);
  });
});
