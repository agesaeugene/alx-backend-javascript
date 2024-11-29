const mocha = require('mocha');
const { expect, assert } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with values 150 and 50', () => {
    const stub = sinon.stub(utils, 'calculateNumber');
    stub.returns(200);

    const spy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(150, 50);

    expect(stub.calledOnceWithExactly('SUM', 150, 50)).to.equal(true);
    expect(spy.calledOnceWithExactly('The total is: 200'));
    expect(utils.calculateNumber('SUM', 150, 50)).to.equal(apiRequestRes);

    stub.restore();
    spy.restore();
  });

  it('should call calculateNumber with values 10 and 5', () => {
    const stub = sinon.stub(utils, 'calculateNumber');
    stub.returns(15);

    const spy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(10, 5);

    expect(stub.calledOnceWithExactly('SUM', 10, 5)).to.equal(true);
    expect(spy.calledOnceWithExactly('The total is: 15'));
    expect(utils.calculateNumber('SUM', 10, 5)).to.equal(apiRequestRes);

    stub.restore();
    spy.restore();
  });

  it('should call calculateNumber with values 40 and 60', () => {
    const stub = sinon.stub(utils, 'calculateNumber');
    stub.returns(100);

    const spy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(40, 60);

    expect(stub.calledOnceWithExactly('SUM', 40, 60)).to.equal(true);
    expect(spy.calledOnceWithExactly('The total is: 100'));
    expect(utils.calculateNumber('SUM', 40, 60)).to.equal(apiRequestRes);

    stub.restore();
    spy.restore();
  });
});

