const mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log 500 if a = 300 and b = 200', () => {
    sendPaymentRequestToApi(300, 200);
    expect(spy.calledOnceWithExactly('The total is: 500')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should log 50 if a = 20 and b = 30', () => {
    sendPaymentRequestToApi(20, 30);
    expect(spy.calledOnceWithExactly('The total is: 50')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});

