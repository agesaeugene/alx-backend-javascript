const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('adds two whole numbers', () => {
    assert.strictEqual(calculateNumber(5.0, 10.0), 15);
  });

  it('rounds down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(3.0, 4.4), 7);
  });

  it('rounds down both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(7.3, 6.4), 13);
  });

  it('rounds down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(8.7, 5.0), 14);
  });

  it('rounds up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(9.0, 3.6), 13);
  });

  it('rounds up both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 1.7), 4);
  });

  it('rounds up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 4.0), 7);
  });

  it('handles negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-3.6, -4.4), -8);
  });

  it('handles mixed signs correctly', () => {
    assert.strictEqual(calculateNumber(-2.6, 3.6), 1);
  });

  it('rounds numbers with trailing 9\'s correctly', () => {
    assert.strictEqual(calculateNumber(5.999999, 2.499999), 8);
  });

  it('returns the sum for zero inputs', () => {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
  });
});

