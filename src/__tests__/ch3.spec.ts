import { should } from 'chai';
should();

import * as ch3 from '../ch3';

describe('ch3', () => {
  describe('squareOf()', () => {
    it('should return 4', () => {
      ch3.squareOf(2).should.equal(4);
      // ch3.squareOf('z'); // --> Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    });
  });

  describe('xxxExample()', () => {
    it('call', () => {
      ch3.anyTypeExample().should.equal(0);
      ch3.unknownTypeExample().should.equal(0);
      ch3.booleanTypeExample().should.equal(0);
      ch3.numberTypeExample().should.equal(0);
      ch3.bigintTypeExample().should.equal(0);
      ch3.stringTypeExample().should.equal(0);
      ch3.symbolTypeExample().should.equal(0);
      ch3.objectTypeExample().should.equal(0);
      ch3.typeAliasUnitonIntersectionExample().should.equal(0);
      ch3.arrayTypeExample().should.equal(0);
      ch3.tupleTypeExample().should.equal(0);
      ch3.nullEtcTypeExample().should.equal(0);
      ch3.enumTypeExample().should.equal(0);
    });
  });
});
