import { ethers } from 'ethers';
import { Call } from '../Call'; // Adjust the import path as needed

describe('Call class', () => {

  it('should add and get a sub-call', () => {
    const mainCall = new Call('chain1', 'target1', 'callData1');
    const subCall = new Call('chain2', 'target2', 'callData2');
    mainCall.addSubCall(subCall);
    expect(mainCall.getSubCall(0)).toBe(subCall);
  });

  it('should remove a sub-call', () => {
    const mainCall = new Call('chain1', 'target1', 'callData1');
    const subCall = new Call('chain2', 'target2', 'callData2');
    mainCall.addSubCall(subCall);
    mainCall.removeSubCall(0);
    expect(mainCall.getSubCall(0)).toBeUndefined();
  });

  it('should calculate total fee', () => {
    const mainCall = new Call('chain1', 'target1', 'callData1', '', '10');
    const subCall1 = new Call('chain2', 'target2', 'callData2', '', '5');
    const subCall2 = new Call('chain2', 'target2', 'callData2', '', '5');
    mainCall.addSubCall(subCall1);
    mainCall.addSubCall(subCall2);
    expect(mainCall.calculateTotalFee()).toBe('20');
  });

  it('should encode the call', () => {
    const mainCall = new Call('chain1', ethers.ZeroAddress, ethers.ZeroAddress, ethers.ZeroAddress, '0');
    expect(typeof mainCall.encode()).toBe('string');
  });

});
