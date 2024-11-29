const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('adds two positive whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 6.0, 4.0), 10);
    });

    it('adds two positive numbers with fractions', () => {
      assert.strictEqual(calculateNumber('SUM', 5.3, 3.7), 9);
    });

    it('adds two negative whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -4.0, -5.0), -9);
    });

    it('adds two negative numbers with fractions', () => {
      assert.strictEqual(calculateNumber('SUM', -3.6, -2.4), -6);
    });

    it('adds a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -3.5, 3.4), 0);
    });

    it('adds a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 7.1, -2.9), 4);
    });

    it('adds zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtracts equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.0, 10.0), 0);
    });

    it('subtracts a smaller positive number from a larger one', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.8, 5.3), 5);
    });

    it('subtracts a larger positive number from a smaller one', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 6.7), -4);
    });

    it('subtracts two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -7.0, -3.0), -4);
    });

    it('subtracts a positive number from a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, 4.0), -9);
    });

    it('subtracts a negative number from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, -2.0), 5);
    });

    it('subtracts zeros', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('divides two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.0, 2.0), 5.0);
    });

    it('divides a positive number by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, -2.0), -3.0);
    });

    it('divides a negative number by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, 4.0), -2.0);
    });

    it('divides two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, -3.0), 3.0);
    });

    it('handles division by a number rounded to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0.4), 'Error');
    });

    it('handles division by a negative number rounded to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, -0.6), 'Error');
    });

    it('divides zero by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 7.0), 0);
    });

    it('divides zero by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -4.0), -0);
    });

    it('handles division of a positive number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.0, 0.0), 'Error');
    });

    it('handles division of a negative number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, 0.0), 'Error');
    });

    it('handles division of zero by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});

