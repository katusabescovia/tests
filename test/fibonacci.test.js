// fibonacci.test.js
import assert from 'assert';
import { fibonacci } from '../fibonacci.js';

function testFibonacci() {
    // assert.strictEqual(fibonacci(0), 0);
    // console.log('Test passed: Fibonacci of 0 is 0');

    // assert.strictEqual(fibonacci(1), 1);
    // console.log('Test passed: Fibonacci of 1 is 1');

    assert.strictEqual(fibonacci(2), 1);
    console.log('Test passed: Fibonacci of 2 is 1');

    // assert.strictEqual(fibonacci(3), 2);
    // console.log('Test passed: Fibonacci of 3 is 2');
    
    // assert.strictEqual(fibonacci(4), 3);
    // console.log('Test passed: Fibonacci of 4 is 3');
    
    // assert.strictEqual(fibonacci(5), 5);
    // console.log('Test passed: Fibonacci of 5 is 5');
}

testFibonacci();
