const mocha = require('mocha');
const { expect, assert } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with values 150 and 50', () => {
    const calcNumSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(150, 50);

    expect(calcNumSpy.calledOnceWithExactly('SUM', 150, 50)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 200')).to.equal(true);
    expect(utils.calculateNumber('SUM', 150, 50)).to.equal(apiRequestRes);

    calcNumSpy.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with values 10 and 5', () => {
    const calcNumSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(10, 5);

    expect(calcNumSpy.calledOnceWithExactly('SUM', 10, 5)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 15')).to.equal(true);
    expect(utils.calculateNumber('SUM', 10, 5)).to.equal(apiRequestRes);

    calcNumSpy.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with values 40 and 60', () => {
    const calcNumSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(40, 60);

    expect(calcNumSpy.calledOnceWithExactly('SUM', 40, 60)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 100')).to.equal(true);
    expect(utils.calculateNumber('SUM', 40, 60)).to.equal(apiRequestRes);

    calcNumSpy.restore();
    consoleSpy.restore();
  });
});

