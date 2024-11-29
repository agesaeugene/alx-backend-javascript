const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('adds positive integers', () => {
      expect(calculateNumber('SUM', 3, 5)).to.equal(8);
    });

    it('adds positive decimals', () => {
      expect(calculateNumber('SUM', 1.7, 2.5)).to.equal(5);
    });

    it('adds negative integers', () => {
      expect(calculateNumber('SUM', -4, -6)).to.equal(-10);
    });

    it('adds negative decimals', () => {
      expect(calculateNumber('SUM', -2.7, -3.3)).to.equal(-6);
    });

    it('adds a positive and a negative number', () => {
      expect(calculateNumber('SUM', 7, -3)).to.equal(4);
    });

    it('adds a negative and a positive number', () => {
      expect(calculateNumber('SUM', -4.6, 3.2)).to.equal(-1);
    });

    it('adds zeros', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtracts positive integers', () => {
      expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(7);
    });

    it('subtracts positive decimals', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.1)).to.equal(4);
    });

    it('subtracts negative integers', () => {
      expect(calculateNumber('SUBTRACT', -7, -4)).to.equal(-3);
    });

    it('subtracts negative decimals', () => {
      expect(calculateNumber('SUBTRACT', -3.5, -1.8)).to.equal(-2);
    });

    it('subtracts a positive number from a negative number', () => {
      expect(calculateNumber('SUBTRACT', -3, 7)).to.equal(-10);
    });

    it('subtracts a negative number from a positive number', () => {
      expect(calculateNumber('SUBTRACT', 8, -5)).to.equal(13);
    });

    it('subtracts zeros', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('divides two positive integers', () => {
      expect(calculateNumber('DIVIDE', 12, 4)).to.equal(3);
    });

    it('divides a positive number by a negative number', () => {
      expect(calculateNumber('DIVIDE', 9, -3)).to.equal(-3);
    });

    it('divides a negative number by a positive number', () => {
      expect(calculateNumber('DIVIDE', -8, 2)).to.equal(-4);
    });

    it('divides two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -6, -2)).to.equal(3);
    });

    it('handles a positive number divided by zero', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });

    it('handles a negative number divided by zero', () => {
      expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
    });

    it('handles division by a number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', 5, 0.2)).to.equal('Error');
    });

    it('handles division by a number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', 5, -0.4)).to.equal('Error');
    });

    it('handles division of zero by a positive number', () => {
      expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
    });

    it('handles division of zero by a negative number', () => {
      expect(calculateNumber('DIVIDE', 0, -4)).to.equal(-0);
    });

    it('handles division of zero by zero', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});

