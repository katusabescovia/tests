// Akech Sandra & Katusabe 

//This imports the assert function from the Chai assertion library, which is used for making assertions in tests.

// This imports the multiply function from a file named multiply.js. It's assumed that multiply.js contains a function that multiplies two numbers


// cycle 1
import { assert } from 'chai';  
import multiply from '../multiply.js';

describe('multiply', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});

// Explanation:

// Expects multiply(1, 1) to return 1. With the initial implementation (return 1;), this test would pass, as multiply(1, 1) indeed returns 1.



// cycle 2
// import { assert } from 'chai';
// import multiply from '../multiply.js';

// describe('multiply', () => {
//   it('should return 1 when multiplying 1 and 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 and 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });
// });



// Explanation:

//  multiply(2, 2) should return 4. With the updated multiply.js function (return a * b;), this test case verifies that the function correctly computes the product of 2 and 2, ensuring the test passes if the result is 4.






// cycle 3

// import { assert } from 'chai';
// import multiply from '../multiply.js';
// describe('multiply', () => {
//   it('should return 1 when multiplying 1 and 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 and 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });

//   it('should return 9 when multiplying 3 and 3', () => {
//     assert.equal(multiply(3, 3), 9);
//   });
// });


// Explanation:

// Cycle 2 Recap: This cycle builds upon Cycle 2. It includes all tests from Cycle 2 and adds a new test.

// New Test Case: Add a new it block to test multiply(3, 3). This ensures that the multiply function correctly calculates 3 multiplied by 3, expecting the result to be 9.




// cycle 4
// import { assert } from 'chai';
// import multiply from '../multiply.js';

// describe('multiply', () => {
//   it('should return 1 when multiplying 1 and 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 and 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });

//   it('should return 9 when multiplying 3 and 3', () => {
//     assert.equal(multiply(3, 3), 9);
//   });

//   it('should return 16 when multiplying 4 and 4', () => {
//     assert.equal(multiply(4, 4), 16);
//   });
// });


// Explanation:

// Cycle 3 Recap: This cycle includes all tests from Cycle 3 and adds a new test.

// New Test Case: Add a new it block to test multiply(4, 4). This verifies that the multiply function correctly computes 4 multiplied by 4, with the expected result being 16.



// cycle 5

// import { assert } from 'chai';
// import multiply from '../multiply.js';
// describe('multiply', () => {
//   it('should return 1 when multiplying 1 and 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 and 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });

//   it('should return 9 when multiplying 3 and 3', () => {
//     assert.equal(multiply(3, 3), 9);
//   });

//   it('should return 16 when multiplying 4 and 4', () => {
//     assert.equal(multiply(4, 4), 16);
//   });

//   it('should return 1035 when multiplying 23 and 45', () => {
//     assert.equal(multiply(23, 45), 23 * 45);
//   });
// });


// Explanation:

// Cycle 4 Recap: This cycle includes all tests from Cycle 4 and adds a new test.

// New Test Case: Add a new it block to test multiply(23, 45). This ensures that the multiply function correctly calculates 23 multiplied by 45, expecting the result to be 1035.



